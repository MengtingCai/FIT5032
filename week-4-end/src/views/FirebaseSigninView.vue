<template>
    <h1>Sign in</h1>
    <p><input type="text" placeholder="Email" v-model="email"></p>
    <p><input type="password" placeholder="Password" v-model="password"></p>
    <p><button @click="signin">Sign in via Firebase</button></p>    
</template>

<script setup>
import { ref } from "vue"
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import {useRouter} from "vue-router"
const email = ref("")
const password = ref("")
const router = useRouter()
const auth = getAuth()
const adminEmail = "admin@admin.com"
const signin = () => {
    signInWithEmailAndPassword(getAuth(), email.value,password.value)
    .then((data) =>{
        if(data == adminEmail)
        {
            alert("you have signed in as admin.")
        }else{
            alert("Login Successful!")
        }
        router.push("/")
        console.log(auth.currentUser)
    }).catch((error) =>{
        console.log(error.code)
        alert("Login failed!")
    })
}
</script>

<style>
</style>