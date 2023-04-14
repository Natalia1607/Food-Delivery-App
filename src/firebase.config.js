import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCXKL4XTTA7CmnzOz40Tw5FBiA9z1X_gew",
    authDomain: "restaurantapp-ba0ca.firebaseapp.com",
    databaseURL: "https://restaurantapp-ba0ca-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-ba0ca",
    storageBucket: "restaurantapp-ba0ca.appspot.com",
    messagingSenderId: "1079195330361",
    appId: "1:1079195330361:web:40aaddfe29e4cb736ceae8"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
