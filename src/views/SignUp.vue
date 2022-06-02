<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <p><input type="text" placeholder="enter email" v-model="email"></p>
  <p><input type="password" placeholder="enter password" v-model="password"></p>
  <p><button @click="signUp()">Submit</button></p>
  <p><button @click="signInWithGoogle()">signIn</button></p>
<div v-for="user in users" :key="user">
    <div class="email">user-mail: {{user.email}}</div>
    <div class="password">user-pass: {{user.password}}</div>
</div>
</template>

<script>
import {db} from '@/db'
import { collection, getDocs } from "firebase/firestore";
export default {
    data(){
        return{
            users:[],
        }
    },
    async created(){
      console.log("Hi Aloshee")  
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
            console.log(doc.name, " => ", doc.data());
            this.users.push(doc.data())
            });
    },
}
</script>

<script setup>
//import {createUser} from '@/db'
import {ref} from 'vue';
import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { useRouter } from 'vue-router';
const router =useRouter();
const email = ref("");
const password = ref("");
//console.log(usersCollection)
const signUp = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value).then((data) => {
        console.log(data);
        //console.log(getAuth().currentUser);
        //console.log(db);
        //await db.collection('users').add(data)
        router.push('/feed');//redirect to /feed
    }).catch((error) => {
        console.log(error.code)
        alert(error.message)
    });
//add the user to the dataStore
// const onSubmit = async ()=>{
//     await createUser(...{email,password})
// }
//console.log(onSubmit)
};
const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider).then((result) => {
        console.log(result.user);
        router.push("/feed");
    }).catch((error) => {
        console.log(error.code);
        alert(error.message)
    })
}
</script>