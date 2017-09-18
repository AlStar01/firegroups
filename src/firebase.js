import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB8VPYRMmRqdfyhImckhYIYWLTvazqCo9s",
  authDomain: "firegroups-a39d9.firebaseapp.com",
  databaseURL: "https://firegroups-a39d9.firebaseio.com",
  projectId: "firegroups-a39d9",
  storageBucket: "firegroups-a39d9.appspot.com",
  messagingSenderId: "675435276681"
};
firebase.initializeApp(config);

export default firebase;
