// NOTE
// Please use your own firebase details below. For more details visit: https:/parteners.tripcarte.asia/


import firebase from 'firebase/app'

// Initialize Firebase
var config = {
    apiKey: "YOUR_API_KEY",
    authDomain: "AUTH_DOMAIN",
    databaseURL: "DATABASE_URL",
    projectId: "PROJECT_NAME",
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "ID"
};

firebase.initializeApp(config);
