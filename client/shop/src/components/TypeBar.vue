<template>
  <v-container class="mt-4">
    <v-list>
      <v-list-subheader>Product type</v-list-subheader>
      <v-list-item
      class="mb-1"
        v-for="(type) in deviceStore.types"
        :key="type.id"
        :value="type.name"
        active-color="primary"
        variant="tonal"
        @click="setType(type)"
      >
        {{type.name}}
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup>
import { useDeviceStore } from '../stores/deviceStore'
import { fetchDevices } from '../http/deviceApi';

const deviceStore = useDeviceStore()

deviceStore.setSelectedType
const setType = type => {
  if (deviceStore.selectedType) {
    fetchDevices(null, null, 1, 8).then(data => { 
      deviceStore.setDevices(data.rows)
    })
}
    deviceStore.setSelectedType(type)
}

</script>

