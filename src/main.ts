import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Vant from 'vant';

import App from './App.vue';
import router from './router';

import './css/app.scss';
import 'vant/lib/index.css';

const app = createApp(App);

app.use(createPinia());
app.use(Vant);
app.use(router);

app.mount('#app');
