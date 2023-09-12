<template>
    <v-app>
      <v-btn @click="toggleTheme">toggle theme</v-btn>
      <h1 class="bg-primary"> hello world </h1>
    </v-app>
  </template>
  
  <script setup>
  import { useTheme } from 'vuetify'
  
  const theme = useTheme()
  
  function toggleTheme () {
    theme.global.name.value = theme.global.current.value.dark ? 'Light' : 'Dark'
  }
  </script>
  