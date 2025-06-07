// /services/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getDatabase } from "firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSGPAqpZHugDmFXtP7CI4fVEX43kMd9v4",
  authDomain: "ecommercemovile.firebaseapp.com",
  projectId: "ecommercemovile",
  storageBucket: "ecommercemovile.firebasestorage.app",
  messagingSenderId: "713316817955",
  appId: "1:713316817955:web:42d0556994b1d4ea336596",
  measurementId: "G-10SZ595YD5"
};
const app = initializeApp(firebaseConfig);

// CONFIGURAR PERSISTENCIA CORRECTAMENTE
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const db = getDatabase(app);

export { auth, db };
