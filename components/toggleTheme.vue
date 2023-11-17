
<template>
    <v-btn @click="toggleTheme" icon>
      <v-icon dark>mdi-theme-light-dark</v-icon>
    </v-btn>
  </template>
  
  <script>
  export default {
    methods: {
      toggleTheme() {
        this.$emit('toggle-theme');
      },
    },
  };
  </script>
  