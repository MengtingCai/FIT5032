// import './assets/main.css'
// import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
// import DataTable from 'primevue/datatable'
// import Column from 'primevue/Column'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQd3yQtCgebdBRoa69UaHlomZ0vZ5v5yY",
  authDomain: "week7-mengting.firebaseapp.com",
  projectId: "week7-mengting",
  storageBucket: "week7-mengting.appspot.com",
  messagingSenderId: "1007601834702",
  appId: "1:1007601834702:web:902befd0208b295723ce9f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

// app.component('DataTable', DataTable)
// app.component('Column', Column)

app.mount('#app')