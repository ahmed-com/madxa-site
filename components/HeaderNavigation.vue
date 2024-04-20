<template>
  <v-btn-toggle rounded="0" variant="text">
    <v-btn
      v-for="(v, k) in menuItems"
      :key="k"
      :to="v"
      class="bg-primary text-text text-decoration-none"
      :class="{
        'active-link': route.path === v,
      }"
      >{{ t(`navigation.${k}`) }}</v-btn
    >
  </v-btn-toggle>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

const route = useRoute();

const { t } = useI18n();

const menuItems = {
  home: "/",
  about: "/about",
  blogs: "/blogs",
  services: "/services",
  ask: "/ask",
  request: "/request",
};
</script>
