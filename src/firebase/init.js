import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCjZfk31-wy0JTBfNhyBDL5beEHAl3erug",
  authDomain: "vue-firebase-chat-app-66fb8.firebaseapp.com",
  databaseURL: "https://vue-firebase-chat-app-66fb8.firebaseio.com",
  projectId: "vue-firebase-chat-app-66fb8",
  storageBucket: "vue-firebase-chat-app-66fb8.appspot.com",
  messagingSenderId: "311929969584",
  appId: "1:311929969584:web:fdcfa93fbd2da1c0469475",
  measurementId: "G-NTV3X4MRF3"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore();
