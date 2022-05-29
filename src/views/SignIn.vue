<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <p><input type="text" placeholder="enter email" v-model="email"></p>
  <p><input type="password" placeholder="enter password" v-model="password"></p>
  <p v-if="err_mssg">{{err_mssg}}</p>
  <p><button @click="signIn()">Submit</button></p>
  <p><button @click="signInWithGoogle()">signIn</button></p>

</template>


<script setup >
import {ref} from 'vue';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { useRouter } from 'vue-router'
const router =useRouter()
const email = ref("");
const password = ref("");
const err_mssg = ref("");
const signIn = () => {
signInWithEmailAndPassword(getAuth(), email.value, password.value)
.then((data) => {
    console.log("succes Sign-In");
    console.log(data);
    console.log(getAuth().currentUser);
    router.push('/feed')//redirect to /feed
}).catch((error) => {
            switch (error.code) {
              case "auth/invalid-email":
                err_mssg.value="Invalid-email";
                break;
              case "auth/user-not-found":
                err_mssg.value="no account with that email was found";
                break;
              case "auth/wrong-password":
                err_mssg.value="wrong-password";
                break;
              default:
                err_mssg.value="Email or password was incorrect";
            }
 })
};
const signInWithGoogle = () => {
 console.log("succes Registered")
}
</script>