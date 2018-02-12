import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    contact: 'Contact',
    language: 'Language',
    english: 'English',
    spanish: 'Spanish'
  },
  es: {
    contact: 'Contacto',
    language: 'Lenguaje',
    english: 'Inglés',
    spanish: 'Español'
  }
}

const i18n = new VueI18n({
  messages,
  locale: 'en'
})

export default i18n
