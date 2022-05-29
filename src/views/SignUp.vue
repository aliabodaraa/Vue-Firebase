<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <p><input type="text" placeholder="enter email" v-model="email"></p>
  <p><input type="password" placeholder="enter password" v-model="password"></p>
  <p><button @click="signUp()">Submit</button></p>
  <p><button @click="signInWithGoogle()">signIn</button></p>

</template>


<script setup>
import {ref} from 'vue';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { useRouter } from 'vue-router';
const router =useRouter();
const email = ref("");
const password = ref("");
const signUp = () => {
createUserWithEmailAndPassword(getAuth(), email.value, password.value)
.then((data) => {
    //console.log("succes Registered");
    console.log(data);
    //console.log(getAuth().currentUser);
    router.push('/feed');//redirect to /feed
}).catch((error) => {
     console.log(error.code)
     alert(error.message)
 })
};
const signInWithGoogle = () => {
 console.log("succes Registered")
}
</script>