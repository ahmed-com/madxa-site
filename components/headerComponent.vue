<script setup>
import { useI18n } from "vue-i18n";
import { useTheme } from "vuetify";

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "Light" : "Dark";
}
const route = useRoute();

const { locale, t } = useI18n();

const menuItems = ["home", "request", "services", "blogs", "about"];
</script>

<template>
  <v-app-bar color="primary" :elevation="0">
    <nuxt-link to="/home">
      <v-img
        :width="50"
        :height="50"
        src="data:image/jpeg;base64,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"
      ></v-img>
    </nuxt-link>

    <!--modify the background make it make it dynamic -->
    <v-app-bar-title>
      <nuxt-link to="/home" class=" text-text background">
        {{ t("brand") }}</nuxt-link
      ></v-app-bar-title
    >
    <v-spacer></v-spacer>
    <v-row>
      <v-col>
        <ToggleTheme @toggle-theme="toggleTheme"></ToggleTheme>

        <select class="text-text" v-model="locale">
          <option value="en">en</option>
          <option value="ar">ar</option>
        </select>

        <v-btn  v-for="item in menuItems" :key="item" >
          <nuxt-link class="text-text background"
            :to="`/${item}`"

            :class="{ 'background active-link': route.path === `/${item}` }"
            >{{ t(item) }}</nuxt-link
          >
        </v-btn>
        <v-btn color="secondary" variant="flat"
          ><router-link to="/" class="text-text background"
            >{{ t("request") }}
          </router-link></v-btn
        >
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<style scoped>
.background {
  text-decoration: none;
}
.background.active-link {
  text-decoration: underline;
}
.small-select .v-select__selection {
  font-size: 12px; /* You can adjust the font size as needed */
}
</style>
