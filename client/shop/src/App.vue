<template>
  <v-app id="inspire" :theme="theme" >
    <Navbar @themeToggled="toggleTheme" :theme="theme"/>
    <RouterView  />
    <div v-if="loading">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue';
import { useUserStore } from './stores/userStore';
import { check } from './http/userAPI';

const theme = ref('light')
const userStore = useUserStore()
const loading = ref(false)

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

onMounted(() => {
  if (localStorage.getItem('token')) {
    check().then(() => {
    userStore.setUser(true)
    userStore.setIsAuth(true)
  }).finally(() => {
    loading.value = false
  })
  }
  
})

</script>


<style >
a {
  text-decoration: none;
}


</style>
