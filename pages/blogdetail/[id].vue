
<template>
  <v-app>
    <v-card class="mx-auto" width="400">
      <v-img
      class="align-end text-white"
      height="200" :src="blog.img" cover></v-img> 
      <v-card-title> {{ blog.title }} </v-card-title>
      <v-card-subtitle class="pt-4">{{ blog.subtitle }} </v-card-subtitle>
      <v-card-text>
      <div>{{ t("description") }} <br> {{ blog.description }}</div> <br>
      <div>{{ t("content") }} : <br> {{ blog.content }}</div> <br>
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary-darken-1" variant="0">
        {{ t("comment") }}  
      </v-btn>
    </v-card-actions>
    </v-card>

  </v-app>
</template>



<script setup>
const params = useRoute().params
const url = computed(() => `http://localhost:3000/blogs/${params.id}`)

const blog = useFetch(url).data
import { useI18n } from "vue-i18n";

const { locale, t } = useI18n();
import { useTheme } from "vuetify";
const theme = useTheme();


</script>