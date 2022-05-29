<template>
  <div id="app">
    <!-- <Navbar /> -->
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
//import Navbar from './components/Navbar.vue'
 //import firebase from "./firebaseInit"
export default {
  methods: {
//      readEmployees() {
// const db = firebase.firestore();
//       let employeesData = [];
//       db.collection("employees")
//         .get()
//         .then((querySnapshot) => {
//           querySnapshot.forEach((doc) => {
//            employeesData.push({
//               id: doc.id,
//               name: doc.data().name,
//               date: doc.data().date,
//             });
//             console.log(doc.id, " => ", doc.data());
//           });
//           return employeesData
//         })
//         .catch((error) => {
//           console.log("Error getting documents: ", error);
//         });
//     }
  },
  name: 'App',
  components:{
   // Navbar
    }

  }
</script>
