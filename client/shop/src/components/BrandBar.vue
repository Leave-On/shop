<template>
  <v-container class="pa-0 mt-6">
    <v-list class="pa-0 d-flex flex-wrap" density="compact" lines="0">
      <v-list-item 
      class=" mr-1  py-0 rounded" 
      v-for="brand in deviceStore.brands"
      :key="brand.id" 
      :value="brand.id" 
      active-color="primary" 
      variant="outlined"
      @click="setBrand(brand)" 
      rounded="lg"
      >
        {{ brand.name }}
      </v-list-item>
    </v-list>

  </v-container>
</template>

<script setup>
import { useDeviceStore } from '../stores/deviceStore';
import { fetchDevices } from '../http/deviceApi';

const deviceStore = useDeviceStore()

const setBrand = brand => {
  if (deviceStore.selectedBrand) {
    fetchDevices(null, null, 1, 8).then(data => { 
      deviceStore.setDevices(data.rows)
    })
}
    deviceStore.setSelectedBrand(brand)
}


</script>
