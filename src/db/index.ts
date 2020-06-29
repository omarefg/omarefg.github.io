import { language } from '../schemas/types'
import { Languages, DB } from '../schemas/interfaces'

import sidebar from './sidebar'
import whyShouldEveryoneHaveAWebsite from './posts/why-should-everyone-have-a-website'
import accessDomElementsUsingRefsInVue from './posts/access-dom-elements-using-refs-in-vue'
import documentYourApiWithPostman from './posts/document-your-api-with-postman'

function getLanguage ():language {
  const lang = localStorage.getItem('lang')
  switch (lang) {
    case 'es': return 'es'
    default: return 'en'
  }
}

const languages: Languages = {
  en: {
    sidebar: {
      ...sidebar.en
    },
    posts: {
      'why-should-everyone-have-a-website': {
        ...whyShouldEveryoneHaveAWebsite.en
      },
      'access-dom-elements-using-refs-in-vue': {
        ...accessDomElementsUsingRefsInVue.en
      },
      'document-your-api-with-postman': {
        ...documentYourApiWithPostman.en
      }
    }
  },
  es: {
    sidebar: {
      ...sidebar.es
    },
    posts: {
      'why-should-everyone-have-a-website': {
        ...whyShouldEveryoneHaveAWebsite.es
      },
      'access-dom-elements-using-refs-in-vue': {
        ...accessDomElementsUsingRefsInVue.es
      },
      'document-your-api-with-postman': {
        ...documentYourApiWithPostman.es
      }
    }
  }
}

export default function getData ():DB {
  return languages[getLanguage()]
}
