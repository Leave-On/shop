<template>
  <v-row >
    <DeviceItem
    v-for="item in deviceStore.devices"
    :key="item.id"
    :device="item"
    />
  </v-row>
</template>

<script setup>
import { useDeviceStore } from '../stores/deviceStore';
import DeviceItem from './DeviceItem.vue';

const deviceStore = useDeviceStore()
  

</script>

