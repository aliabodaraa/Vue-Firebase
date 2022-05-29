import * as firebase from 'firebase/app';
import 'firebase/firestore';
//import { ref, onUnmounted } from 'vue'

import { initializeApp } from "@firebase/app";
import getFirestore from '@firebase/firestore/lite';

const config = {
    apiKey: "AIzaSyCYUTqAwplpFLa6LqpFm-2OIJDDxOJnhcU",
    authDomain: "hello-44073.firebaseapp.com",
    projectId: "hello-44073",
    storageBucket: "hello-44073.appspot.com",
    messagingSenderId: "257709843931",
    appId: "1:257709843931:web:a7129d558511aca78933fe",
    measurementId: "G-E45DJ7QRNB"
};

const firebaseApp = firebase.initializeApp(config)


export default initializeApp.getFirestore()














//const db = firebaseApp.firestore();
//const personscollection = db.collection('persons')

// export const createPerson = person => {
//     return personscollection.add(person)
// }

// export const getPerson = async id => {
//     const person = await personscollection.doc(id).get()
//     return person.exists ? person.data() : null
// }

// //updata
// export const updatePerson = async(id, person) => {
//     return personscollection.doc(id).update(person)
// }

// //delete
// export const deletePerson = async(id) => {
//     return personscollection.doc(id).delete()
// }

// //composition hook ref to array of persons in db
// export const useLoadPersons = () => {
//     const persons = ref([]);
//     const close = personscollection.onSnapshot(snapshot => { //added listner to persons collection in db wharas wheneve changes user collectio are detected
//         persons.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
//     })
//     onUnmounted(close)
//     return persons
// }