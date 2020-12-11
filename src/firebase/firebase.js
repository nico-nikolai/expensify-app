import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC0VcMfQIZ05UKvpdbv9jR6hdrC5lbPgX0",
    authDomain: "expensify-3466a.firebaseapp.com",
    databaseURL: "https://expensify-3466a-default-rtdb.firebaseio.com",
    projectId: "expensify-3466a",
    storageBucket: "expensify-3466a.appspot.com",
    messagingSenderId: "571823190239",
    appId: "1:571823190239:web:655a726718a281aaffb96a",
    measurementId: "G-VPKWZ3D56T"
  };

  firebase.initializeApp(firebaseConfig);

  firebase.database().ref().set({
    name: 'Nick Rose'
  });