import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyA3pSGioVejv_BCnJmJ9fxrgFACnfTazSw",
    authDomain: "auth-user-32b78.firebaseapp.com",
    projectId: "auth-user-32b78",
    storageBucket: "auth-user-32b78.appspot.com",
    messagingSenderId: "1038428117036",
    appId: "1:1038428117036:web:50dc9892c6e02428791989"
};
// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);
//  .use(store)
app.use(router)
app.mount('#app')