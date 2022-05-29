<template>
  <div id="dashboard">
    <h3>Dashboard</h3>
    <!-- <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large red"><i class="fa fa-plus"></i></router-link>
    </div> -->
    <nav>
  <div class="nav-warpper green">
    <div class="container">
      <!-- <router-link to="/" class="brand-logo">Employee Manager</router-link> | -->
      <router-link to="/feed"> Feed </router-link> |
      <router-link to="/sign-up"> Register </router-link> |
      <router-link to="/sign-in"> Login </router-link> |
      <button @click="handleSignOut" v-if="isLoggedIn">SignOut</button>
    </div>
    <!-- <router-view /> -->
  </div>
</nav>
    <router-view />
  </div>
</template>
<script>
//import * as firebase from "firebase/app";
//import {reactive} from 'vue'
export default{
  name: 'dashboard-f',
  data () {
    return {
      employees:[],
    }
  },
   setup(){
        // console.log(firebase.name);
   },
    created () {
        // console.log(firebase);
      }
}
</script>
<script setup>
import { ref,onMounted} from 'vue';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from 'vue-router';// import router
const router = useRouter();// get a reference to our vue router
let auth;
const isLoggedIn=ref(false);
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if(user){
      isLoggedIn.value = true;
    }else{
      isLoggedIn.value = false;
    }
  })
})
const handleSignOut= () => {
signOut(auth).then(()=>{
  router.push("/")
})
};
</script>