// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { getStorage, ref, uploadBytes,getDownloadURL  } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-storage.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABtkU4hDjkZE84TmhTfKMfrBjLGn5kSr4",
  authDomain: "proyectomoviles-9e9ab.firebaseapp.com",
  projectId: "proyectomoviles-9e9ab",
  storageBucket: "proyectomoviles-9e9ab.appspot.com",
  messagingSenderId: "139336372275",
  appId: "1:139336372275:web:6fc68e6ce3a0dcdad91346",
  measurementId: "G-XFQ5B6H7HR"
};

// Initialize Firebase
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const storage = getStorage(firebaseApp);
  const firestore = getFirestore(firebaseApp);




export const registroDocumento =async (file,uid)=>{
  const filename = file.name
  const tipoArchivo = file.type

  let newName = ''
  let ext = ''

  //crear nuevo archivo para cambiar nombre
  const blob = file.slice(0, file.size, tipoArchivo)
  //guardar extension de archivo
  ext = filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2)
  // renombrar
  newName = filename + '.' + ext

  const storageRef = ref(storage, `${uid}/` + newName)

  const newFile = new File([blob], newName, { type: tipoArchivo })

  await uploadBytes(storageRef, newFile)

  return getDownloadURL(storageRef)
  
}

export const registrarUsuarioDocumento = (cedula,documento)=>{
  addDoc(collection(firestore, "documentos"), {cedula,documento});
}