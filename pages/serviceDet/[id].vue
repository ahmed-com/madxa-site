<template>
  <v-app>
    <v-card class="mx-auto" width="400">
      <v-img
      class="align-end text-white"
      height="200" :src="service.img" cover></v-img> 
      <v-card-title> {{ service.title }} </v-card-title>
      <v-card-subtitle class="pt-4">{{ service.subtitle }} </v-card-subtitle>
      <v-card-text>
      <div>{{ t("description") }} <br> {{ service.description }}</div> <br>
      <div>{{ t("content") }} : <br> {{ service.content }}</div> <br>

      <div>{{ t("timings") }}  <br>
        <div v-for="time in service.availabilities" :key="time.id">
    <p>{{ time }}</p></div> </div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary-darken-1" variant="0">
        {{ t("request service") }} 
      </v-btn>
    </v-card-actions>
    </v-card>

  </v-app>
</template>

<script setup>
const {id} = useRoute().params
const url = 'http://localhost:3000/services/' + id

const {data: service} = useFetch(url)
import { useI18n } from "vue-i18n";

const { locale, t } = useI18n();
</script>