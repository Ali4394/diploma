import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCiBHWwt8mP_x1avBuGUQS2TXXAnK2t6To',
  authDomain: 'diploma-ca615.firebaseapp.com',
  projectId: 'diploma-ca615',
  storageBucket: 'diploma-ca615.appspot.com',
  messagingSenderId: '156400392439',
  appId: '1:156400392439:web:e0b131079cc908cc509bf2'
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }
