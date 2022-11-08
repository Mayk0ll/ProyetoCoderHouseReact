// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJRBi3TGn8flrG9cBzMjIusksVzq37S7Q",
    authDomain: "reactcoderhouseprojectmichaelv.firebaseapp.com",
    projectId: "reactcoderhouseprojectmichaelv",
    storageBucket: "reactcoderhouseprojectmichaelv.appspot.com",
    messagingSenderId: "472933286696",
    appId: "1:472933286696:web:23b989bcd90286e960861d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//creando instancia de la base de datos
export const db = getFirestore(app)