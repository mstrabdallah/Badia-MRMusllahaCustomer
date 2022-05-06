export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  // mode :'universal',
   ssr:false,
  head: {
    title: 'Mr.Musllaha',
    htmlAttrs: {
      lang: 'ar',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~assets/css/main.scss',

  ],
  script: [
    {

    }
  ],
   
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.js',
    //  '~/plugins/vuetify.js',
    { src: '~/plugins/vuetify.js', mode: 'server' },

    '~/plugins/fontawesome.js',
    '~/plugins/VuePhoneNumberInput.js',
    '~/plugins/validation-rules.js',
    '~/plugins/CxltToastr.js'

  ],
  router: {
    middleware: ['auth'],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // With options
    ['@nuxtjs/vuetify', {
      theme: {
          light: true,
          themes: {
              light: {
                primary: '#2b4749',
                secondary: '#2b4749',
                accent: '#2b4749',
  
              }
          }
      }

     }]

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/style-resources',
    
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  i18n: {
    defaultLocale: 'en',
    seo:true,
    locales:
    [
      { code: 'en',name: 'الانجليزية',  iso: 'en', file: 'en.json', dir: 'ltr' },
      { code: 'ar',name: 'Arabic', iso: 'ar', file: 'ar.json', dir: 'rtl' },
    ],
    
    langDir: 'lang/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    }
  },

  styleResources: {
    scss: [
      '~assets/scss/mixins.scss',
      '~assets/scss/variables.scss'
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: {
      ignoreOrder: false
    }
   }
   
}
