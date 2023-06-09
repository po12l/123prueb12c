// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfiwEe6lZ0XTTC7RGVhZvliTTdZ-BQHa0",
  authDomain: "database3-2450c.firebaseapp.com",
  projectId: "database3-2450c",
  storageBucket: "database3-2450c.appspot.com",
  messagingSenderId: "325463243039",
  appId: "1:325463243039:web:87d45f15354c5b208ed82a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} Correo 
 * @param {string} Contraseña
 * 
 */
export const saveTask = (Correo, Contraseña) =>
  addDoc(collection(db, "Usuarios"), { Correo, Contraseña});

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "Usuarios"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "Usuarios", id));

export const getTask = (id) => getDoc(doc(db, "Usuarios", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "Usuarios", id), newFields);

export const getTasks = () => getDocs(collection(db, "Usuarios"));



