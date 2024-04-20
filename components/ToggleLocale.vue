<template>
  <v-menu>
    <template v-slot:activator="{ props: menu }">
      <v-tooltip location="top">
        <template v-slot:activator="{ props: tooltip }">
          <v-btn icon="mdi-translate" v-bind="mergeProps(menu, tooltip)">
          </v-btn>
        </template>
        <span>{{ t("language") }}</span>
      </v-tooltip>
    </template>
    <v-list @update:selected="updateLocale">
      <v-list-item
        v-for="l in availableLocales"
        :key="l"
        :active="locale == l"
        :value="l"
        color="primary"
      >
        <v-list-item-title>{{ t(`locales.${l}`) }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { mergeProps } from "vue";

const { locale, availableLocales, t } = useI18n();

const updateLocale = (l) => (locale.value = l[0]);
</script>

<style scoped></style>
