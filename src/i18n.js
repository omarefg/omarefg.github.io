import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    contact: 'Contact',
    language: 'Language',
    english: 'English',
    spanish: 'Spanish',
    about: 'About',
    latestPosts: 'Latest posts',
    about1: "Hi, I'm Omar! I'm a",
    about2: 'Developer passionate about making web projects a reality.',
    about3: "I believe websites are an indispensable tool for any industry, sometimes it's the first experience customers get, and I enjoy building software that make that experience really positive.",
    about4: "I combine HTML, CSS & Javascript, always using the best practices to build fully functional and responsive websites, if you're interested in working with me don't hesitate to",
    about5: 'get in touch',
    readMore: 'Read more'
  },
  es: {
    contact: 'Contacto',
    language: 'Lenguaje',
    english: 'Inglés',
    spanish: 'Español',
    about: 'Sobre mi',
    latestPosts: 'Artículos recientes',
    about1: '¡Hola, mi nombre es Omar! Soy un desarrollador',
    about2: 'apasionado por hacer proyectos web realidad.',
    about3: 'Creo que los sitios web son una heramiento indispensable para cualquier industria, a veces es el primer contacto que el usuario experimenta con la empresa, y disfruto construir software para que esa experiencia sea realmente positiva.',
    about4: 'Combino HTML, CSS y JavaScript, siempre utilizando las mejores practicas para construir sitios completamente funcionales y con responsive design, si estás interesado en trabajar conmigo no dudes en',
    about5: 'ponerte en contacto',
    readMore: 'Leer más'
  }
}

const i18n = new VueI18n({
  messages,
  locale: 'en'
})

export default i18n
