<template>
  <v-layout>
    <HeaderComponent></HeaderComponent>
    <DrawerComponent></DrawerComponent>
    <slot />
    <FooterComponent></FooterComponent>
  </v-layout>
</template>
<style scoped>
.custom-color {
  background-color: "#2eab79";
}
</style>
