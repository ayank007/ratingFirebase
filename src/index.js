import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js'
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js'

// ()

// web app's Firebase configuration ~ Rating
const firebaseConfig = {
    apiKey: "AIzaSyA4LlUOlxge2sHKvaKU_r5wWhku9kplhi8",
    authDomain: "rating-43397.firebaseapp.com",
    projectId: "rating-43397",
    storageBucket: "rating-43397.appspot.com",
    messagingSenderId: "874372273696",
    appId: "1:874372273696:web:0eac65c01c54fd64968e45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

// detect auth state
onAuthStateChanged(auth, user => {
    if(user!=null){
        console.log('logged in!');
    }
    else{
        console.log('no user');
    }
})

const signinBtn = document.getElementsByClassName(".signinBtn")[0]
const signoutBtn = document.getElementsByClassName(".signoutBtn")[0]