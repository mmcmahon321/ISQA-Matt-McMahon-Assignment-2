import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyANIG_MaKw38JE4pIJbgMpWhsMyixg5bT0',
  authDomain: 'mcmahon-assign-2-test.firebaseapp.com',
  projectId: 'mcmahon-assign-2-test',
  storageBucket: 'mcmahon-assign-2-test.appspot.com',
  messagingSenderId: '192760558630',
  appId: '1:192760558630:web:ee7cb4449c65a7b94722e7'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
