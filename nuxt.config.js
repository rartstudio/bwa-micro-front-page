export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'front-page',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~plugins/vue-js-modal.js'},
    //enable client mode cause it not support ssr
    { src: '~plugins/vue-badger-accordion.js', mode: 'client'}
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
    ['vue-currency-filter/nuxt', {
      symbol: '',
      thousandsSeparator: '.',
      fractionCount: 0,
      fractionSeparator: '.',
      symbolPosition: 'front',
      symbolSpacing: true,
      avoidEmptyDecimals: undefined,
    }]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    //fixing error runtime vue
    extend(config, ctx) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common'},
    //we need to transpile it cause it has sass
    transpile: ['vue-badger-accordion'],
  },

  messages: {
    loading: 'Loading...',
    error_404: 'This page could not be found',
    server_error: 'Server error',
    back_to_home: 'Back to the home page',
    server_error_details:
      'An error occurred in the application and your page could not be served. If you are the application owner, check your logs for details.',
    client_error: 'Error',
    client_error_details:
      'An error occurred while rendering the page. Check developer tools console for details.'
  },

  server: {
    port: 3001
  },

  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },

  //loading-bar
  loading: { 
    color: '#ed8936',
    height: '5px' 
  },
}
