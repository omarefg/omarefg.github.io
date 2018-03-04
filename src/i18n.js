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
    about2: 'Developer using Vue.js to create amazing aplications.',
    about3: "I believe websites are an indispensable tool for any industry, sometimes it's the first experience customers get, and I enjoy building software that make that experience really positive.",
    about4: "I combine HTML, CSS & Javascript, always using the best practices to build fully functional and responsive websites, if you're interested in working with me don't hesitate to",
    about5: 'get in touch',
    readMore: 'Read more',
    article1Title: 'Why do everyone should have a website?',
    article1Subtitle: 'October - 2017',
    article1Content: 'In the world we live in, when we need a service, the first thing we do is go to',
    article1Content1: 'Google',
    article1Content2: ', either to find information about it, prices, or see if we can buy it from the comfort of our home.',
    article1Content3: 'Nowadays, a business model that exists without Internet presence is unthinkable. ',
    article1Content4: 'A well-implemented website, social network and digital marketing strategy ensure that you reach the audience you are looking for and generate a better impact.',
    article1Content5: 'Even this does not only apply to the commercial sector, but also to human talent. ',
    article1Content6: 'Currently, with a globalized labor market, who has better opportunities is the professional who best knows how to sell their knowledge and skills. Good preparation should always go hand in hand with a good Internet presence and a well-executed digital marketing strategy.',
    article1Content7: 'Every day there are more professionals who have a personal website where they show their work triumphs and become more sought after by the best companies.',
    article1Content8: 'It is a fact that whoever does it will have a greater reach, will generate more confidence and therefore will have access to better job offers.'
  },
  es: {
    contact: 'Contacto',
    language: 'Lenguaje',
    english: 'Inglés',
    spanish: 'Español',
    about: 'Sobre mi',
    latestPosts: 'Artículos recientes',
    about1: '¡Hola, mi nombre es Omar! Soy un desarrollador',
    about2: 'que utiliza Vue.js para crear aplicaciones increíbles.',
    about3: 'Creo que los sitios web son una heramiento indispensable para cualquier industria, a veces es el primer contacto que el usuario experimenta con la empresa, y disfruto construir software para que esa experiencia sea realmente positiva.',
    about4: 'Combino HTML, CSS y JavaScript, siempre utilizando las mejores practicas para construir sitios completamente funcionales y con responsive design, si estás interesado en trabajar conmigo no dudes en',
    about5: 'ponerte en contacto',
    readMore: 'Leer más',
    article1Title: '¿Por qué todos deberíamos tener una página web?',
    article1Subtitle: 'Octubre - 2017',
    article1Content: 'En el mundo en el que vivimos, cuando necesitamos un servicio lo primero que hacemos es acudir a',
    article1Content1: 'Google',
    article1Content2: ', ya sea para buscar información al respecto, precios, o ver si podemos adquirirlo desde la comodidad de nuestro hogar.',
    article1Content3: 'Hoy en día es impensable un modelo de negocio que exista sin presencia en Internet.',
    article1Content4: 'Una página web, redes sociales  y una estrategia de marketing digital bien ejecutada garantizan poder llegar a la audiencia a la que se desea y generar un mejor impacto.',
    article1Content5: 'Incluso, ésto no sólo aplica para el sector comercial, también para el talento humano.',
    article1Content6: 'Actualmente, con un mercado laboral globalizado, quien tiene mejores oportunidades es el profesional que mejor sabe vender sus conocimientos y habilidades. Una buena preparación siempre debe ir de la mano de buena presencia en Internet y una estrategia de marketing digital bien ejecutada.',
    article1Content7: 'Cada día son más los profesionales que tienen una página web personal donde exhiben sus triunfos laborales y se vuelven más cotizados por las mejores empresas.',
    article1Content8: 'Es un hecho que quien lo haga va a tener un mayor alcance, va a generar más confianza y por ende tendrá acceso a mejores ofertas laborales.'
  }
}

const i18n = new VueI18n({
  messages,
  locale: 'en'
})

export default i18n
