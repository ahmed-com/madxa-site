<script setup>
import { useI18n } from 'vue-i18n'
const { locale, t } = useI18n()
</script>

<template>
  <div>
    <form>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="ar">ar</option>
      </select>
    </form>
    <h1>{{ t('brand') }}</h1>
  </div>
</template>
