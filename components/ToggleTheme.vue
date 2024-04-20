<template>
  <v-tooltip location="top">
    <template v-slot:activator="{ props: tooltip }">
      <v-btn @click="toggleTheme" icon v-bind="tooltip">
        <v-icon dark>mdi-theme-light-dark</v-icon>
      </v-btn>
    </template>
    <span>{{ t("theme") }}</span>
  </v-tooltip>
</template>

<script setup>
import { useTheme } from "vuetify";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "Light" : "Dark";
}
</script>
