import Vue from "vue";

import HelloWorld from "./request/HelloWorld.vue";
import HttpRequest from "./request/HttpRequest";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

const app: HTMLDivElement = document.createElement('div');
const service = new HttpRequest().service;
Vue.prototype.$service = service;
Vue.use(ElementUI);
Vue.config.productionTip = false;

app.id = "app";
document.body.appendChild(app);
let v = new Vue({
    el: "#app",
    render: h => h(HelloWorld)
});