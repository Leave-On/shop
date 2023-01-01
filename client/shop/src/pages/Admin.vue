<template>
  <v-container class="mt-16 d-flex flex-column ">
    <CreateType />
    <CreateBrand />
    <CreateDevice />
  </v-container>

</template>

<script setup>
import CreateBrand from '../components/modals/createBrand.vue';
import CreateDevice from '../components/modals/createDevice.vue';
import CreateType from '../components/modals/createType.vue';

</script>

