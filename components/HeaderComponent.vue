<template>
  <v-app-bar color="primary" :elevation="0">
    <nuxt-link to="/">
      <Logo></Logo>
    </nuxt-link>

    <v-app-bar-title>
      <Brand></Brand>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-row>
      <v-col>
        <ToggleTheme></ToggleTheme>
        <ToggleLocale></ToggleLocale>
        <HeaderNavigation v-if="!$vuetify.display.mobile"></HeaderNavigation>
      </v-col>
    </v-row>
    <v-app-bar-nav-icon
      v-if="$vuetify.display.mobile"
      variant="text"
      @click="toggleDrawer"
    ></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script setup>
import { useDrawerStore } from "../stores/drawer"
const { toggleDrawer } = useDrawerStore();
</script>

<style scoped></style>
