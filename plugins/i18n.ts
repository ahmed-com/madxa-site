import { createI18n } from "vue-i18n";
import { type LocaleMessages } from "@nuxtjs/i18n/dist/runtime/composables";

function loadMessages() {
  const locales: { [key: string]: LocaleMessages<{}> } = import.meta.glob(
    "./locales/*.json",
    { eager: true }
  );
  const messages: { [key: string]: LocaleMessages<{}> } = {};
  Object.keys(locales).forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales[key].default;
    }
  });
  return messages;
}

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: import.meta.env.VITE_I18N_LOCALE || "en",
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || "en",
    messages: loadMessages(),
});

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(i18n);
});
