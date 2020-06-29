import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    articlePlatzi2Title: 'Document your API with Postman',
    articlePlatzi2Subtitle: 'October - 2019'
  },
  es: {
    articlePlatzi2Title: 'Documenta tu API con Postman',
    articlePlatzi2Subtitle: 'Octubre - 2019'
  }
}

const i18n = new VueI18n({
  messages,
  locale: 'en'
})

export default i18n
