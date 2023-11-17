<template>
  <div class="card-container">
    <div v-for="service in services" :key="service.id">
    <v-card class="mx-auto" max-width="344">
    <v-img :src="service.img" height="200px" cover></v-img>

    <v-card-title> {{ service.title }} </v-card-title>

    <v-card-subtitle>{{ service.subtitle }}  </v-card-subtitle>

    <v-card-actions>
      <nuxt-link :to=" `/serviceDet/${service.id}`">{{ t('explore') }}</nuxt-link>
      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>  {{ service.description }}    </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </div>
  
  </div>

</template>
<script setup>
const {data: services} =await useFetch('http://localhost:3000/services')
import { useI18n } from "vue-i18n";

const { locale, t } = useI18n();

</script>
<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Distributes space evenly between cards */
  gap: 10px; /* Adjust the gap between cards as needed */
  width: 200px;
  height: 400px;
}


</style>