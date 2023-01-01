<template>
  <div class="text-center"> 
    <v-pagination
          v-model="page"
          :length="deviceStore.pageCount"
          @click="setPage(page)"
    ></v-pagination>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useDeviceStore } from '../stores/deviceStore';

const deviceStore = useDeviceStore()
const page = ref(1)

const setPage = page => {
  deviceStore.setPage(page)
  console.log(page);
}

watch([page, () => deviceStore.selectedBrand, () => deviceStore.selectedType], () => {
  fetchDevices(deviceStore.selectedType.id, deviceStore.selectedBrand.id, page.value, 2).then(data => {
    deviceStore.setDevices(data.rows)
    deviceStore.setTotalCount(data.count)
    
  })
})
</script>

<style scoped>

</style>