import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDJGWdlF1LoQUAHJuHkKq8kBpd9kjmkRhM",
  authDomain: "pussychat-6b1f1.firebaseapp.com",
  databaseURL: "https://pussychat-6b1f1.firebaseio.com",
  projectId: "pussychat-6b1f1",
  storageBucket: "pussychat-6b1f1.appspot.com",
  messagingSenderId: "849794017584"
};

firebase.initializeApp(config);

const db = firebase.firestore(); //Database export.

// Enable offline persistence
db.enablePersistence({experimentalTabSynchronization:true})

export default db;
