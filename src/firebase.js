// Import the functions you need from the SDKs you need
import firebase from '@firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB6jkwUbc_y_HKYlAyqv-BTrhbdYylRoSY",
    authDomain: "instant-message-2c318.firebaseapp.com",
    projectId: "instant-message-2c318",
    storageBucket: "instant-message-2c318.appspot.com",
    messagingSenderId: "1093972712950",
    appId: "1:1093972712950:web:a9476dc9c1ae12946c3bd7",
    measurementId: "G-TH7HMP6EPH"
})

// Initialize Fireba
const db = firebaseApp.firestore()

export default db