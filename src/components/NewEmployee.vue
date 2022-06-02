<template>
  <div id="new-employee">
    <h3> you can Create a new-employee</h3>
      <div class="row user-inputs-new">
          <form class="col s12" @submit.prevent="addUser" :style="[this.alert.length==0?'':'border:1px solid red']" style="
                                                                                                                        border-radius: 10px;
                                                                                                                        display: grid;
                                                                                                                        padding: 11px;">  
              <div class="input-field inline">
                <input id="name" type="text" class="validate" v-model="name">
                <label for="name">Name</label>
              </div>
                <div class="input-field inline">
                <input id="password" type="password" class="validate" v-model="password">
                <label for="password">Password</label>
              </div>
                <div class="input-field inline">
                <input id="email" type="email" class="validate" v-model="email">
                <label for="email">Email</label>
              </div>
                <div class="input-field inline">
                  <input id="uderId_inline" type="number" class="validate" v-model="user_id">
                  <label for="uderId_inline">user_id</label>
                  <span class="helper-text" data-error="wrong" data-success="right" style="color:red">{{alert}}</span>
                </div>
                <button type="submit" class="btn black" :disabled="this.alert.length>0">Add New User</button>
          </form>
      </div>
  </div>
</template>
<script>
import {db} from '@/db'
import { collection, getDocs, addDoc } from "firebase/firestore";
export default{
  name: 'new-employee',
  data(){
    return{
      name:null,
      email:null,
      password:null,
      user_id:null,
      alert:""
    }
  },
  methods: {
    async addUser(){
      await addDoc(collection(db, 'users'),{ name :this.name,password: this.password,email:this.email,user_id:this.user_id} );
      console.log("I finally understand how collection() works and what is its purpose");
      this.name='';
      this.email='';
      this.password='';
      this.user_id='';
      this.$router.back();
      }
  },
  watch:{
     user_id: async function(userId){
       this.alert='';
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
            //find the mac user_id for 
            const curr_mac_user_id = parseInt(doc.data().user_id);
            if(userId == curr_mac_user_id){
              this.alert=doc.data().user_id+" this user_id aleady used"
              }
    })
    }
  }
}
</script>
