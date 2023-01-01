<template>
  <v-container class="mt-10 pt-0">
    <v-row>
      <v-col cols="3">
        <TypeBar />
      </v-col>
      <v-col cols="9" mt="5">
        <BrandBar/>
        <DeviceList/>
        <v-pagination
        class="mt-12"
          v-model="page"
          :length="deviceStore.pageCount"
          @click="setPage(page)"
        ></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import TypeBar from '../components/TypeBar.vue'
import BrandBar from '../components/BrandBar.vue'
import DeviceList from '../components/DeviceList.vue'
import { useDeviceStore } from '../stores/deviceStore';
import { onMounted, watch } from 'vue';
import { fetchTypes, fetchBrands, fetchDevices } from '../http/deviceApi';


const route = useRoute()
const deviceStore = useDeviceStore()
const page = ref(1)

const setPage = page => {
  deviceStore.setPage(page)
  console.log(page);
}

watch([page, () => deviceStore.selectedBrand, () => deviceStore.selectedType], () => {
  fetchDevices(deviceStore.selectedType.id, deviceStore.selectedBrand.id, page.value, 4).then(data => {
    deviceStore.setDevices(data.rows)
    deviceStore.setTotalCount(data.count)
  }).then(() => {
    deviceStore.pageCount = Math.ceil(deviceStore.totalCount / deviceStore.limit)
  })
})

onMounted(() => {
  fetchTypes().then(data => deviceStore.setTypes(data))
  fetchBrands().then(data => deviceStore.setBrands(data))
  fetchDevices(null, null, 1, 8).then(data => {
    deviceStore.setDevices(data.rows)
    deviceStore.setTotalCount(data.count)
    deviceStore.setLimit(8)
  }).then(() => {
    deviceStore.pageCount = Math.ceil(deviceStore.totalCount / deviceStore.limit)
  })
})


</script>

<style >

</style>