/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'

import '../public/assets/main.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faBars,
faFire,
faHouseUser,
faScrewdriverWrench
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret);
library.add(faBars);
library.add(faHouseUser);
library.add(faFire);
library.add(faScrewdriverWrench);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
