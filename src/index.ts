import Vue from "vue";

import HelloComponent from "./Hello.vue";
const app: HTMLDivElement = document.createElement('div');
app.id = "app";
 document.body.appendChild(app);
let v = new Vue({
    el: "#app",
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <hello-component :name="name" :initialEnthusiasm="5" />
    </div>
    `,
    data: { name: "World" },
    components: {
        HelloComponent
    }
});