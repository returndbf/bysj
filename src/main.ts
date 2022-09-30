import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Router from "./router";
import {createPinia} from "pinia";
const pinia = createPinia()

createApp(App).use(Router).use(Antd).use(pinia).mount('#app')
