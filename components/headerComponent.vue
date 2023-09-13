<script setup>
import { useTheme } from "vuetify";

const { locale, t } = useI18n();

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "Light" : "Dark";
}
</script>
<template>
    <v-app>
      <v-row class="d-sm-block d-md-none">
        <v-col cols="12">
          <v-card height="200px">
            <v-card-title class="bg-primary">
              <span class="text-h5">{{ t('brand') }}</span>
              <v-spacer></v-spacer>
              <v-menu >
                <template v-slot:activator="{ props }">
                  <v-btn class="bg-primary secondary"  icon="mdi-menu-down" v-bind="props"></v-btn>
                  <select style="margin-left: 20px;" v-model="locale" class="bg-secondary">
                    <option value="en">en</option>
                    <option value="ar">ar</option>
                  </select>
                  <v-btn @click="toggleTheme" class="bg-secondary" style="margin-left: 50px;">{{ t("theme") }}</v-btn>

                </template>
                <v-list class="bg-secondary">
                  <v-list-item-title>{{ t('home') }}</v-list-item-title>
                  <v-list-item-title>{{ t('request') }}</v-list-item-title>
                  <v-list-item-title>{{ t('theme') }}</v-list-item-title>
                  <v-list-item-title>{{ t('service') }}</v-list-item-title>
                  <v-list-item-title>{{ t('blogs') }}</v-list-item-title>
                  <v-list-item-title>{{ t('about') }}</v-list-item-title>
                </v-list>
              </v-menu>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
  
      <v-layout class="d-none d-md-flex">
        <v-app-bar color="primary" :elevation="0">
          <v-app-bar-title>{{ t("brand") }}</v-app-bar-title>
          <v-spacer></v-spacer>
          <v-row>
            <v-col>
              <v-btn @click="toggleTheme" style="color: white">{{ t("theme") }}</v-btn>
              <select style="color: white" v-model="locale">
                <option value="en">en</option>
                <option value="ar">ar</option>
              </select>
              <v-btn>{{ t("home") }}</v-btn>
              <v-btn>{{ t("create account") }}</v-btn>
              <v-btn>{{ t("service") }}</v-btn>
              <v-btn>{{ t("blogs") }}</v-btn>
              <v-btn>{{ t("about") }}</v-btn>
              <v-btn color="secondary" variant="flat">{{ t("request") }}</v-btn>
            </v-col>
          </v-row>
        </v-app-bar>
      </v-layout>
    </v-app>
  </template>
  

<script>
export default {
  name: "HeaderComponent",
};
</script>
