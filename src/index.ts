import Vue from "vue";

import HelloWorld from "./utils/HelloWorld.vue";
import {service} from './utils/request.ts';

const app: HTMLDivElement = document.createElement('div');
Vue.prototype.service = service;
Vue.config.productionTip = false;
declare module 'Vue/types/vue' {
    interface Vue {
        service: service
    }
}
app.id = "app";
document.body.appendChild(app);
let v = new Vue({
    el: "#app",
    render: h => h(HelloWorld)
});