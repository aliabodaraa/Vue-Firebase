import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA3pSGioVejv_BCnJmJ9fxrgFACnfTazSw",
    authDomain: "auth-user-32b78.firebaseapp.com",
    projectId: "auth-user-32b78",
    storageBucket: "auth-user-32b78.appspot.com",
    messagingSenderId: "1038428117036",
    appId: "1:1038428117036:web:50dc9892c6e02428791989"
};

initializeApp(firebaseConfig);
const db = getFirestore();






//const usersCollection = db;
//add user to users' collection
// export const createUser = (person) => {
//     return usersCollection.add(person);
// }
export { db };


// export const createUser = () => {
//         let person = { name: 'ali', email: 'afdsf' };
//         return usersCollection.add(person);
//     }
//return spesific user via id if it exists
// export const getPerson = async id => {
//     const person = await usersCollection.doc(id).get()
//     return person.exists ? person.data() : null;
// }

// //update
// export const updatePerson = async(id, person) => {
//     return usersCollection.doc(id).update(person);
// }

// //delete
// export const deletePerson = async(id) => {
//     return usersCollection.doc(id).delete();
// }

// //composition hook ref to array of users in db
// export const useLoadusers = () => {
//     const users = ref([]);
//     const close = usersCollection.onSnapshot(snapshot => { // added listner to users collection in db wharas wheneve changes user collectio are detected
//         users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
//     })
//     onUnmounted(close)
//     return users
// }



//important
// export const CreateDbUser = (id, username, email) => {
//     firebase.database().ref(`users/${id}`).set({
//         username: username,
//         email: email
//     })
// }