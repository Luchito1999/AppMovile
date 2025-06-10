// /services/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence
} from "firebase/auth";
import { getDatabase } from "firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSGPAqpZHugDmFXtP7CI4fVEX43kMd9v4",
  authDomain: "ecommercemovile.firebaseapp.com",
  databaseURL: "https://ecommercemovile-default-rtdb.firebaseio.com", 
  projectId: "ecommercemovile",
  storageBucket: "ecommercemovile.appspot.com", 
  messagingSenderId: "713316817955",
  appId: "1:713316817955:web:42d0556994b1d4ea336596",
  measurementId: "G-10SZ595YD5"
};

const app = initializeApp(firebaseConfig);

// AUT CON PERSISTENCIA LOCAL
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// BASE DE DATOS EN TIEMPO REAL
const db = getDatabase(app);

export { auth, db };
