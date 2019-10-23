import Vue from "vue";

import HelloWorld from "./HelloWorld.vue";

const app: HTMLDivElement = document.createElement('div');
app.id = "app";
document.body.appendChild(app);
let v = new Vue({
    el: "#app",
    render: h => h(HelloWorld)
});