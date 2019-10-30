import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {

};

firebase.initializeApp(config);

const db = firebase.firestore(); //Database export.

// Enable offline persistence
db.enablePersistence({experimentalTabSynchronization:true})

export default db;
