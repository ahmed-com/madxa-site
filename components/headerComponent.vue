<script setup>
import { useI18n } from 'vue-i18n';
import { useTheme } from 'vuetify';

const { locale, t } = useI18n();
const theme = useTheme();

const menuItems = ['home', 'request', 'service', 'blogs', 'about'];

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "Light" : "Dark";

}
</script>


<template>
  <v-app dir="rtl">
    <v-row class="d-sm-block d-md-none">
      <v-col cols="12">
        <v-card height="200px">
          <v-card-title class="bg-primary">
            <span class="text-h5">{{ t('brand') }}</span>
            <v-spacer></v-spacer>
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn class="bg-secondary primary" icon="mdi-menu-down" v-bind="props"></v-btn>
                <select style="margin-left: 20px;" v-model="locale" class="bg-secondary">
                  <option value="en">en</option>
                  <option value="ar">ar</option>
                </select>
                <v-btn @click="toggleTheme" class="bg-secondary" style="margin-left: 50px;">{{ t("theme") }}</v-btn>
              </template>
              <v-btn v-for="item in menuItems" :key="item">{{ t(item) }}</v-btn>

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
            <v-btn v-for="item in menuItems" :key="item">{{ t(item) }}</v-btn>
            <v-btn color="secondary" variant="flat">{{ t("request") }}</v-btn>
          </v-col>
        </v-row>
      </v-app-bar>
    </v-layout>
  </v-app>
</template>

