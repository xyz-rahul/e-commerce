import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: 'AIzaSyDgvvWtEqRhep6FlhrB0GvY7tdCdskVe1M',
    authDomain: 'blog-app-89743.firebaseapp.com',
    projectId: 'blog-app-89743',
    storageBucket: 'blog-app-89743.appspot.com',
    messagingSenderId: '335346200164',
    appId: '1:335346200164:web:7128fc503800dc503fb971',
}

const firebaseApp = initializeApp(firebaseConfig)
export { firebaseApp }
