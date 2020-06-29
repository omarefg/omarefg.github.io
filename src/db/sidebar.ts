import { Sidebar } from '../schemas/interfaces'

interface InnerInterface {
  en: Sidebar;
  es: Sidebar;
}

const sidebar:InnerInterface = {
  en: {
    home: 'Home',
    contact: 'Contact',
    language: 'Language',
    english: 'English',
    spanish: 'Spanish',
    about: 'About',
    projects: 'Projects'
  },
  es: {
    home: 'Inicio',
    contact: 'Contacto',
    language: 'Lenguaje',
    english: 'Inglés',
    spanish: 'Español',
    about: 'Sobre mi',
    projects: 'Proyectos'
  }
}

export default sidebar
