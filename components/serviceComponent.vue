<template>
  <div v-for="service in services" :key="service.id">
    <v-card class="mx-auto" max-width="344">
    <v-img :src="service.img" height="200px" cover></v-img>

    <v-card-title> {{ service.title }} </v-card-title>

    <v-card-subtitle>{{ service.subtitle }}  </v-card-subtitle>

    <v-card-actions>
      <nuxt-link :to=" `/services/${service.id}`">Explore more </nuxt-link>
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
  
</template>
<script setup>
const {data: services} =await useFetch('http://localhost:3000/services')
</script>