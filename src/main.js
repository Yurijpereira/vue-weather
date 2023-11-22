import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faDroplet, faLocationDot, faMagnifyingGlass, faUserSecret, faWind } from '@fortawesome/free-solid-svg-icons'

library.add(faMagnifyingGlass, faLocationDot, faWind, faDroplet)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
