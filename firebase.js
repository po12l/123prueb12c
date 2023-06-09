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
  apiKey: "AIzaSyBQ-dfHKT0JsonK-DKxfrDpc0DZlngLGAE",
  authDomain: "database2-ee82c.firebaseapp.com",
  projectId: "database2-ee82c",
  storageBucket: "database2-ee82c.appspot.com",
  messagingSenderId: "171220044743",
  appId: "1:171220044743:web:6e0203f2c9af37569ae7e2",
  measurementId: "G-KXZSZMCXN5"
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



