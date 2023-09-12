import { LocaleMessages } from '@nuxtjs/i18n/dist/runtime/composables'

function loadMessages(){
  const locales: {[key: string]: LocaleMessages<{}>} = import.meta.glob('./locales/*.json', {eager: true})
  const messages: {[key: string]: LocaleMessages<{}>} = {}
  Object.keys(locales).forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales[key].default
    }
  })
  return messages
}

export default defineI18nConfig(()=> ({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: loadMessages()
}))