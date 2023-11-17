<template>
  <div v-for="blog in blogs" :key="blog.id">
    <v-card class="mx-auto" max-width="344">
    <v-img :src="blog.img" height="200px" cover></v-img>

    <v-card-title> {{ blog.title }} </v-card-title>

    <v-card-subtitle>{{ blog.subtitle }}  </v-card-subtitle>

    <v-card-actions>
      <nuxt-link :to="`/blogdetail/${blog.id}`">{{t('explore')}}</nuxt-link>
      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>  {{ blog.description }}    </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </div>
  
</template>
<script setup>
const {data: blogs} =await useFetch('http://localhost:3000/blogs')
import { useI18n } from "vue-i18n";

const { locale, t } = useI18n();

</script>