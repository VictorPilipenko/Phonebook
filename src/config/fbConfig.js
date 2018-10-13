import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyAe5v-NEAWhCZHBOwVvjV8DiK06lc6EeJA",
    authDomain: "phonebook-2471d.firebaseapp.com",
    databaseURL: "https://phonebook-2471d.firebaseio.com",
    projectId: "phonebook-2471d",
    storageBucket: "phonebook-2471d.appspot.com",
    messagingSenderId: "77144267154"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase