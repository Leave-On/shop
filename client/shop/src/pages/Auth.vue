<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-card text="" variant="tonal" class="text-center h-40 w-50 pa-5" >
      <v-card-title v-if="route.name === 'login'">Autorization</v-card-title>
      <v-card-title v-else>Registration</v-card-title>
      <v-form>
        <v-container class="d-flex flex-column">
          <v-text-field v-model="email"  
            label="E-mail" required></v-text-field>
          <v-text-field 
            v-model="password" 
            :counter="8" label="Password"
            required
            type="password"
            @keyup.enter="enter"
            ></v-text-field>
          <div class="d-flex justify-space-between">
            <div v-if="route.name === 'login'" class="align-self-center">
              No account? 
              <router-link to="registration" >Sign up</router-link>
            </div>
            <div v-if="route.name === 'registration'" class="align-self-center">
              Already have account? 
              <router-link to="login" >Sign in</router-link>
            </div>
            <v-btn @click = enter>Enter</v-btn>
          </div>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { login, registration } from '../http/userApi';
import { useUserStore } from '../stores/userStore'

const email = ref('')
const password = ref('')
const isLogin = ref(true)

const userStore = useUserStore()
const router = useRouter()
const route = useRoute()

const enter = async () => {
  let user;
  try {
    if (isLogin.value === false) {
    const response = await registration(email.value, password.value)
  } else {
    const response = await login(email.value, password.value)
    router.push('/')
  } 
  userStore.setUser(user)
  userStore.setIsAuth(true)
  } 
  catch (e) {
    alert(e.response.data.message)
  }
} 

</script>

<style lang="scss" scoped>

</style>