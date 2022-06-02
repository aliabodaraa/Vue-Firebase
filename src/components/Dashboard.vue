<template>

  <div id="dashboard">
    <!-- <h1>the max user_id stored is :{{max}}</h1> -->
    <nav>
      <div class="nav-warpper green">
        <div class="container">
          <router-link to="/feed"> Feed </router-link> |
          <router-link to="/sign-up"> Register </router-link> |
          <router-link to="/sign-in"> Login </router-link>
          <button @click="handleSignOut" v-if="isLoggedIn" class="btn blue"> | SignOut</button>
          <span class="chip">{{userCurr}}</span>
        </div>
      </div>
    </nav>
  <div class="alert card green lighten-4 green-text text-darken-4" v-show="showAlertAddNewUser">
      <div class="card-content">
        <p><i class="material-icons">Create A New User Successfully</i></p>
      </div>
	</div> 
    <ul class="collection with-header">
      <li class="collection-header"><h4>Users</h4></li>
      <li v-for="user in users" :key="user.user_id">
      <div class="chip red">{{user.user_id}}</div>
          <div class="chip green">{{user.name}}</div>
          <div class="chip grey">{{user.email}}</div>
          <router-link class="secondary-content" :to="{ path: '/'+user.user_id ,params: {employee_id:user.user_id} }">
              <i class="fa fa-eye"></i>
          </router-link>
                    <router-link class="secondary-content" :to="{ path: '/edit/'+user.user_id ,params: {employee_id:user.user_id} }">
              <i class="fa fa-edit"></i>
          </router-link>
      </li>
    </ul>
    <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large red"><i class="fa fa-plus"></i></router-link>
    </div>
    <!-- <router-link to="/" class="brand-logo">Employee Manager</router-link> | -->
  </div>
 <!-- <button @click="addUser" class="btn black">add User</button> -->
    <router-view /> 
</template>
<script>
//import{reactive} from 'vue'
import {db} from '@/db'
import { collection, getDocs } from "firebase/firestore";
export default{
  methods: {
  //  async addUser(){
  //   await addDoc(collection(db, 'users'),{ name : "doc made using collRef and addDoc() function",password: "asdsdasd",email:"sdfsdfsdf@gmail.com",user_id:1} );
  //   console.log("I finally understand how collection() works and what is its purpose");
  //   }
  },
  name: 'dashboard-f',
  data () {
    return {
      users:[],
      userCurr: 'no user',
      showAlertAddNewUser:false,
     // max:0
    }
  },
     async mounted(){
      console.log("Hi Aloshee")  
        let maxSoFar = 0;
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
            console.log(doc.name, " => ", doc.data());
            this.users.push(doc.data());


        //find the mac user_id for 
            const curr_mac_user_id = parseInt(doc.data().user_id);
            if(curr_mac_user_id > maxSoFar){
              maxSoFar = curr_mac_user_id; 
              this.max = maxSoFar;
              }
    })
    },
     updated () {
         console.log("updarted");
          let auth = getAuth()
          if(auth !=null)
           this.userCurr=auth.currentUser.displayName+" connected";
           else
           this.userCurr='No User Difined'
       },
      deleted(){
        console.log("deleteed");
      }
}
</script>
<script setup>
import { ref, onMounted} from 'vue';
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
  });
});

const handleSignOut= () => {
signOut(auth).then(()=>{
  router.push("/")
})
};
</script>