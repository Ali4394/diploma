import { getDocs, addDoc, doc, collection, type DocumentData, deleteDoc } from 'firebase/firestore'
import { db, storage } from '@/firebase'
import { getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'
import { ref, computed } from 'vue'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useUser } from './useUser'
import * as firebase from 'firebase/storage'
import { createId } from '@/utils'

export const useInfo = () => {
  const info = ref()
  const infoList = ref([] as DocumentData)
  const newInfo = ref({
    id: createId(),
    image: '' as string,
    author: '' as any,
    name: '' as string,
    discription: '' as string
  })

  const loading = ref({
    info: false,
    infoList: false,
    newContent: false
  })

  async function createContent() {
    loading.value.newContent = true
    try {
      await addDoc(collection(db, 'infos'), newInfo.value).then(async () => {
        await getAllContent()
      })
    } catch (e) {
      console.error('Error: ', e)
    }
  }

  async function getAllContent() {
    loading.value.infoList = true
    infoList.value.length = 0
    try {
      const querySnapshot = await getDocs(collection(db, 'infos'))
      querySnapshot.forEach((doc) => {
        const compressive = {
          firebaseId: doc.id,
          ...doc.data()
        }
        infoList.value.push(compressive)
      })
      loading.value.infoList = false
    } catch (error) {
      console.error(error)
    }
  }

  async function getContentById(id: string) {
    loading.value.info = true
    try {
      const querySnapshot = await getDocs(collection(db, 'infos'))
      info.value = querySnapshot.docs.map((doc) => doc.data()).find((item: any) => item.id === id)
      loading.value.info = false
    } catch (error) {
      console.error(error)
    }
  }

  async function addContent() {
    const { userToObject } = useUser()
    loading.value.newContent = true
    try {
      if (newInfo.value && userToObject.value) {
        newInfo.value.author = userToObject.value
        await addDoc(collection(db, 'infos'), newInfo.value)
        loading.value.newInfo = false
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteContent(id: string) {
    try {
      console.log(id)
      await deleteDoc(doc(db, 'infos', id))
      await getAllContent()
    } catch (error) {
      console.error(error)
    }
  }

  async function uploadImage(file: any) {
    console.log(file)
    const storage = getStorage()
    console.log(storage)
    const storageRef = firebase.ref(storage, 'infos/' + file.name)
    console.log(storageRef)

    uploadBytes(storageRef, file)
      .then(() => {
        console.log('Файл успешно загружен!')

        getDownloadURL(storageRef)
          .then((downloadURL) => {
            newInfo.value.image = downloadURL
          })
          .catch((error) => {
            console.error('Ошибка получения ссылки на загруженный файл:', error)
          })
      })
      .catch((error) => {
        console.error('Ошибка загрузки файла:', error)
      })
  }

  return {
    info,
    infoList,
    loading,
    newInfo,
    createContent,
    getAllContent,
    getContentById,
    addContent,
    deleteContent,
    uploadImage
  }
}
