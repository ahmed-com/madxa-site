<template>
  <nuxt-link to="/" class="text-text text-decoration-none">
    {{ t("brand") }}</nuxt-link
  >
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
