<template>
  <div id="edit-employee">
      <h3> you can edit-employee</h3>
      <div class="row user-inputs-new">
          <form class="col s12" @submit.prevent="updateUser">  
              <div class="input-field inline">
                <input placeholder="Placeholder" id="name" type="text" class="validate" v-model="name">
                <label for="name">Name</label>
              </div>
                <div class="input-field inline">
                <input placeholder="Placeholder" id="password" type="password" class="validate" v-model="password">
                <label for="password">Password</label>
              </div>
                <div class="input-field inline">
                <input placeholder="Placeholder" id="email" type="email" class="validate" v-model="email">
                <label for="email">Email</label>
              </div>
                <div class="input-field inline">
                  <input placeholder="Placeholder" id="uderId_inline" type="number" class="validate" v-model="user_id" disabled>
                </div>
                <button type="submit" class="btn black">Add New User</button>
          </form>
      </div>
  </div>
</template>
<script>
import {db} from '@/db'
import { collection, getDocs, updateDoc } from "firebase/firestore";

export default{
  name: 'edit-employee',
  data () {
    return {
      name:null,
      email:null,
      password:null,
      user_id:null,
    }
  },
  async created () {
           const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
              if(doc.data().user_id == this.$route.params.employee_id){
                    this.user_id=doc.data().user_id;
                    this.email=doc.data().email;
                    this.password=doc.data().password;
                    this.name=doc.data().name;
                  }
            });
  },
  methods: {
    async updateUser(){
      const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
              
              if(doc.data().user_id == this.$route.params.employee_id){
                console.log("hiiii")
                 updateDoc(doc.ref,{name : this.name, password: this.password, email:this.email,user_id:this.user_id});
                this.$router.back();
                  }
            });
     }
  }
}
</script>
