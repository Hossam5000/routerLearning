// imports
// imports---styles
import './assets/main.css'

// imports---from vue
import App from './App.vue'
import { createApp } from 'vue'

// imports---other
import router from "./router";

// cons & vars
const app = createApp(App);

// code

app.use(router).mount('#app');
