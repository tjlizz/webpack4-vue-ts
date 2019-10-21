import Vue from 'vue'
import HelloWorld from './hello-world'
const app = document.createElement('div')
app.id = "app"
document.body.appendChild(app)
new Vue({
    el: '#app',
    render: h => h(HelloWorld)
})