<template>
  <div id="view-employee" class="with-header">
      <h3>view-employee</h3>
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Name: {{name}}</h4>
      </li>
      <li class="collection-item blue">E-mail: {{email}}</li>
      <li class="collection-item grey">Pass: {{password}}</li>
      <li class="collection-item red">User_id: {{user_id}}</li>
    </ul>
    <router-link to="/" class="btn grey"> Go Back</router-link>
    <button @click="deleteUser()" class="btn red">Delete</button>
  </div>
</template>
<script>
import {db} from '@/db'
import { collection,deleteDoc, getDocs  } from "firebase/firestore";
export default{
  name: 'view-employee',
  data () {
    return {
      name:null,
      email:null,
      password:null,
      user_id:null
    }
  },
  async created(){//get return Promise
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
              if(doc.data().user_id == this.$route.params.employee_id){         
                   console.log(doc.name, " => ", doc.data().name);
                  this.name=doc.data().name
                  this.password=doc.data().password;
                  this.email=doc.data().email;
                  this.user_id=doc.data().user_id;
            }else{
              console.log('user not found')
            }
            });
  }, methods:{
   async deleteUser(){
       const querySnapshot = await getDocs(collection(db, "users"));
       if(confirm('Are You Sure You Need To Delete '+this.name)){
            querySnapshot.forEach((doc) => {
              if(doc.data().user_id == this.$route.params.employee_id){
                deleteDoc(doc.ref);
                this.$router.back();
                  }
            });
       }else{
              console.log('user not found')
            }
     },
   }
  }
  //  watch: {
  //    '$route':fetchData
  //  },
  // methods:{
  //   fetchData(){
  //     db.collection('users').where('user_id','==',this.$route.params.user_id).get()
  //     .then(querySnapshot=>{
  //     querySnapshot.forEach(doc => {
  //         this.user_id=doc.data().user_id
  //         this.name=doc.data().name
  //         this.email=doc.data().email
  //         this.password=doc.data().password
  //     })
  //   })
  //   }


</script>



<!-- important 
import { collection, getDocs } from "firebase/firestore"
const books = collection(db, 'books')

class BooksService {
  getAll () {
    return getDocs(books).then(qSnap => {
        return qSnap.docs.map(d => ({id: d.id, ...d.data()}))
    })
  }
} -->