import { getDocs, addDoc, doc, collection, type DocumentData, deleteDoc } from 'firebase/firestore'
import { db, storage } from '@/firebase'
import { getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'
import { ref, computed } from 'vue'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useUser } from './useUser'
import * as firebase from 'firebase/storage'

export const useContent = () => {
  const content = ref()
  const contentList = ref([] as DocumentData)
  const newContent = ref({
    image: '' as string,
    author: '' as any,
    name: '' as string,
    city: '' as string,
    discription: '' as any
  })

  const loading = ref({
    content: false,
    contentList: false,
    newContent: false
  })

  async function createContent() {
    loading.value.newContent = true
    try {
      await addDoc(collection(db, 'contents'), newContent.value).then(async () => {
        await getAllContent()
      })
    } catch (e) {
      console.error('Error: ', e)
    }
  }

  async function getAllContent() {
    loading.value.contentList = true
    try {
      const querySnapshot = await getDocs(collection(db, 'contents'))
      contentList.value = querySnapshot.docs.map((doc) => doc.data())
      loading.value.contentList = false
    } catch (error) {
      console.error(error)
    }
  }

  async function getContentById(id: string) {
    loading.value.content = true
    try {
      const querySnapshot = await getDocs(collection(db, 'contents'))
      content.value = querySnapshot.docs
        .map((doc) => doc.data())
        .find((item: any) => item.id === id)
      loading.value.content = false
    } catch (error) {
      console.error(error)
    }
  }

  async function addContent() {
    const { userToObject } = useUser()
    loading.value.newContent = true
    try {
      if (newContent.value && userToObject.value) {
        newContent.value.author = userToObject.value
        await addDoc(collection(db, 'contents'), newContent.value)
        loading.value.newContent = false
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteContent(id: any) {
    try {
      if (content.value) {
        await deleteDoc(doc(db, 'contents', id))
      }
    } catch (error) {
      console.error(error)
    }
  }
  async function uploadImage(file: any) {
    console.log(file)
    const storage = getStorage()
    console.log(storage)
    const storageRef = firebase.ref(storage, 'contents/' + file.name)
    console.log(storageRef)

    uploadBytes(storageRef, file)
      .then(() => {
        console.log('Файл успешно загружен!')

        getDownloadURL(storageRef)
          .then((downloadURL) => {
            newContent.value.image = downloadURL
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
    content,
    contentList,
    loading,
    newContent,
    createContent,
    getAllContent,
    getContentById,
    addContent,
    deleteContent,
    uploadImage
  }
}
