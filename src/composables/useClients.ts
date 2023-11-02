import { getDocs, addDoc, doc, collection, type DocumentData, deleteDoc } from 'firebase/firestore'
import { db, storage } from '@/firebase'
import { getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'
import { ref, computed } from 'vue'

import { useUser } from './useUser'
import * as firebase from 'firebase/storage'
import { createId } from '@/utils'

export const useClient = () => {
  const client = ref()
  const clientList = ref([] as DocumentData)
  const newClient = ref({
    id: createId(),
    author: '' as any,
    name: '' as string,
    discription: '' as string
  })

  const loading = ref({
    client: false,
    clientList: false,
    newContent: false
  })

  async function createContent() {
    loading.value.newContent = true
    try {
      await addDoc(collection(db, 'clients'), newClient.value).then(async () => {
        await getAllContent()
      })
    } catch (e) {
      console.error('Error: ', e)
    }
  }

  async function getAllContent() {
    loading.value.clientList = true
    clientList.value.length = 0
    try {
      const querySnapshot = await getDocs(collection(db, 'clients'))
      querySnapshot.forEach((doc) => {
        const compressive = {
          firebaseId: doc.id,
          ...doc.data()
        }
        clientList.value.push(compressive)
      })
      loading.value.clientList = false
    } catch (error) {
      console.error(error)
    }
  }

  async function getContentById(id: string) {
    loading.value.client = true
    try {
      const querySnapshot = await getDocs(collection(db, 'clients'))
      client.value = querySnapshot.docs.map((doc) => doc.data()).find((item: any) => item.id === id)
      loading.value.client = false
    } catch (error) {
      console.error(error)
    }
  }

  async function addContent() {
    const { userToObject } = useUser()
    loading.value.newContent = true
    try {
      if (newClient.value && userToObject.value) {
        newClient.value.author = userToObject.value
        await addDoc(collection(db, 'clients'), newClient.value)
        loading.value.newClient = false
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteContent(id: string) {
    try {
      console.log(id)
      await deleteDoc(doc(db, 'clients', id))
      await getAllContent()
    } catch (error) {
      console.error(error)
    }
  }

  async function uploadImage(file: any) {
    console.log(file)
    const storage = getStorage()
    console.log(storage)
    const storageRef = firebase.ref(storage, 'clients/' + file.name)
    console.log(storageRef)

    uploadBytes(storageRef, file)
      .then(() => {
        console.log('Файл успешно загружен!')

        getDownloadURL(storageRef)
          .then((downloadURL) => {
            newClient.value.image = downloadURL
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
    client,
    clientList,
    loading,
    newClient,
    createContent,
    getAllContent,
    getContentById,
    addContent,
    deleteContent
  }
}
