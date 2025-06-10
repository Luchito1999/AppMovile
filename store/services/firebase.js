// services/firebase.js
import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDSGPAqpZHugDmFXtP7CI4fVEX43kMd9v4",
  authDomain: "ecommercemovile.firebaseapp.com",
  projectId: "ecommercemovile",
  storageBucket: "ecommercemovile.appspot.com",
  messagingSenderId: "713316817955",
  appId: "1:713316817955:web:42d0556994b1d4ea336596",
  measurementId: "G-10SZ595YD5"
};

// Inicializar app
const app = initializeApp(firebaseConfig);

// Inicializar Auth con persistencia
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Inicializar Database
const db = getDatabase(app);

export { app, auth, db };
