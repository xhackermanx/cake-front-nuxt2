export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cake-front-nuxt2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    // '@nuxtjs/pwa',
    ['@nuxtjs/firebase',
    {
      config: {
        onFirebaseHosting: false,
        apiKey: "AIzaSyCH3SlNAwAOiE5PzUoxMNCmbumBDxosINw",
        authDomain: "cake-cafe-ca54f.firebaseapp.com",
        projectId: "cake-cafe-ca54f",
        storageBucket: "cake-cafe-ca54f.appspot.com",
        messagingSenderId: "6290115743",
        appId: "1:6290115743:web:2bd8792819d44900dae6aa"
      },
      services: {
        // auth: true, // Just as example. Can be any other service.
        messaging: true,
      }
    }]
  ],
  messaging: {
    createServiceWorker: true,
    actions: [
      {
        action: '123',
        url: 'https://go.nuxtjs.dev/config-axios'
      }
    ],
    fcmPublicVapidKey: 'BJmpLFMCL1u3z776sQmGKRxenW9Twmc4KgQCSAyrGhY-bwUM5kfXJ730fjUTefvF4zrG-JwbxvkB3S7ysc8y7Fs' // OPTIONAL : Sets vapid key for FCM after initialization
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
