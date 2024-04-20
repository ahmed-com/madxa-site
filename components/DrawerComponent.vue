<template>
  <v-navigation-drawer temporary v-model="store.drawer" location="right">
    <v-list > 
        
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { useDrawerStore } from "../stores/drawer";
const store = useDrawerStore();

</script>
