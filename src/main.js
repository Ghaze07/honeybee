import { createApp } from 'vue'
import './styles/app.css';
import App from './App.vue'

import router from './routes'


createApp(App).use(router).mount('#app')
