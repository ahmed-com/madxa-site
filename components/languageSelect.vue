<template>
    <div class="select-with-icon" @click="toggleDropdown">
      <v-icon>mdi-translate</v-icon>
      <select v-model="selectedLocale" @change="changeLocale" :class="{ 'hidden': !showDropdown }">
        <option v-for="locale in locales" :key="locale" :value="locale">{{ locale }}</option>
      </select>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  
  const { locale, availableLocales } = useI18n();
  
  const selectedLocale = ref(locale);
  
  const locales = availableLocales;
  const showDropdown = ref(false);
  
  const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value;
  };
  </script>
  
  <style scoped>
  .select-with-icon {
    display: inline;
    align-items: center;
    position: relative;
    cursor: pointer;
  }
  
  /* Hide the select when showDropdown is false */
  .hidden {
    display: none;
  }
  </style>
  