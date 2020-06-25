import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyBbihU4AMX66KHqfCUmcIEFNp07kcFJ8QE",
  authDomain: "quote-of-day-6d506.firebaseapp.com",
  databaseURL: "https://quote-of-day-6d506.firebaseio.com",
  projectId: "quote-of-day-6d506",
  storageBucket: "quote-of-day-6d506.appspot.com",
  messagingSenderId: "766171397095",
  appId: "1:766171397095:web:2f1d7c654aa3b09353db42"
};

// Initialize Firebase
try {
	firebase.initializeApp(firebaseConfig);
	firebase.firestore();
	console.log("Firebase Initialized");
} catch (err) {
	console.log("Error Initializing Firebase");
}

export default firebase;
