import fb from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/messaging'
import 'firebase/storage'
import 'firebase/auth'

if (!fb.apps.length) {
    fb.initializeApp({
        apiKey: "AIzaSyAAV3J0g03gcWSyqCNMn-NFTLhVvxvthBk",
        authDomain: "honey-s.firebaseapp.com",
        databaseURL: "https://honey-s.firebaseio.com",
        projectId: "honey-s",
        storageBucket: "honey-s.appspot.com",
        messagingSenderId: "498558906948",
        appId: "1:498558906948:web:116a5eb16bed492f"
    })
}