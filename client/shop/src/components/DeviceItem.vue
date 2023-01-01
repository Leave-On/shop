<template>
  <v-col cols="3" :style="{position: 'relative'}">
    <router-link :to="{name: 'devicePage', params: {id: device.id}}">
      <v-card max-width="150" class="mx-auto mt-5">
      <v-img
      cover
      height="200"
      :src="'http://localhost:5000/' + device.img"
    ></v-img>
      <div class="d-flex justify-space-between pa-2 align-center">
        <h6 class="text-grey">{{ deviceBrand }}</h6>
        <div class="d-flex justify-flex-between" style="{position: relative;}">
          <p>{{ device.rating }}</p>
          <img src="/star.png" style="{width: 20px; height: 18px; margin-left: 0.5em;}" alt="star"/>
          <!-- <RatingStar :rating="device.rating"/> -->
        </div>
      </div>
    <h4 class="ml-2 pb-2">{{ device.name }}</h4>
    </v-card>
    </router-link>
    <v-btn  
      @click="userStore.addToUserCart(device)"
      variant="outlined"
      class="cart__btn"
      ></v-btn>
  </v-col>
</template>

<script setup>
import { useUserStore } from '../stores/userStore';
import { useDeviceStore } from '../stores/deviceStore';

const deviceStore = useDeviceStore()
const userStore = useUserStore()
const props = defineProps({
  device: {
    type: Object,
    required: true
  }
})

const deviceBrand =  deviceStore.brands.filter(b => b.id === props.device.brandId).map(b => b.name).toString()


</script>

<style>
.cart__btn {
      background-image: url(/add-cart.png) !important;
      background-size: 30px !important;
      background-color: transparent !important;
      background-position: center !important;
      background-repeat: no-repeat !important;
      position: absolute !important;
      top: 40px !important;
      right: 40px !important;
}

</style>
