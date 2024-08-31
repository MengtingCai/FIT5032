<script setup>
import { ref } from 'vue'
import router from '../router'
import { ifAuthenticate } from '../router/authentication'

const hardCodeName = 'admin'
const hardCodePassword = '123456'
const { isAuthenticated }= ifAuthenticate()

const formData = ref({
    username: '',
    password: '',
})

const submitForm = () => {
    if (formData.value.username === hardCodeName
    && formData.value.password == hardCodePassword) {
        alert("login success")
        isAuthenticated.value = true 
        router.push({ name: 'About' })
    }
}

const errors = ref({
    username: null,
    password: null,
})

</script>

<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <h1 class="text-center">Please login</h1>
                <form @submit.prevent="submitForm">
                    <div class="row mb-3 justify-content-center">
                        <div class="col-md-6 col-sm-6">
                            <label for="username" class="form-label">Username</label>
                            <input
                                type="text"
                                class="form-control"
                                id="username"
                                @blur="() => validateName(true)"
                                @input="() => validateName(false)"
                                v-model="formData.username"
                            />  
                            <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
                        </div>
                    </div>
                    <div class="row mb-3 justify-content-center">
                        <div class="col-md-6 col-sm-6">
                            <label for="password" class="form-label">Password</label>
                            <input
                                type="password"
                                class="form-control"
                                id="password"
                                @blur="() => validatePassword(true)"
                                @input="() => validatePassword(false)"
                                v-model="formData.password"
                            />
                            <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
                        </div>
                    </div>
                    <div class="text-center" style="margin-bottom: 500px;">
                        <button class="btn btn-primary me-2">Login</button>
                        <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
