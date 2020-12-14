import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase, googleAuthProvider, database as default };

//   // child_removed
//   database.ref('expenses').on('child_removed', (snapshot) => {
//       console.log(snapshot.key, snapshot.val());
//   });

//   // child_changed
//   database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
//   database.ref('expenses').on('child_added', (snapshot) => {
//       console.log(snapshot.key, snapshot.val())
//   })

// //     database.ref('expenses').on('value', (snapshot) => {
// //             const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });
// //     console.log(expenses)
// //   });


// //   database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });
// //     console.log(expenses)
// //   });

// // database.ref('expenses').push({
// //     description: 'Mortgage',
// //     note: '',
// //     amount: 123000,
// //     createdAt: 2309847
// // });


// //   database.ref('notes/-MOI_DKjydXH9Xl34o02').remove();

// //   database.ref('notes').push({
// //       title: 'Course Topics',
// //       body: 'React, React-Native, Node.js'
// //   });

// //   const firebaseNotes = {
// //       notes: {

// //       }
// //   }

// //   const notes = [{
// //       id: '12',
// //       title: 'First note!',
// //       body: 'This is my note'
// //     },{
// //         id: '761ase',
// //         title: 'Another note!',
// //         body: 'This is my note'
// //   }];

// //   database.ref('notes').set(notes);
// //   database.ref('notes/12')

// //   database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// //   })

// //   database.ref().set({
// //     name: 'Nick Rose',
// //     age: 34,
// //     stressLevel: 8,
// //     job: {
// //         title: 'Tour Manager',
// //         company: 'Freelance'
// //     },
// //     location: {
// //         city: 'Albuquerque',
// //         country: 'USA'
// //     }
// //   }).then(() => {
// //       console.log('Data is saved')
// //   }).catch((error) => {
// //     console.log('This failed.', error)
// //   });

// //   database.ref().update({
// //     stressLevel: 10,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle'
// //   });

// // const removeIsSingle = database.ref();

// // removeIsSingle.remove().then(() => {
// //     console.log('remove success')
// // }).catch((e) => {
// //     console.log('no success', e)
// // })