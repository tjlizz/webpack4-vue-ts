import Vue from 'vue'
const app = document.createElement('div')
app.textContent='{{message}}'
app.id = "app"
document.body.appendChild(app)
new Vue({
    el: '#app',
    data(){
        return{ 
            message:'hi vue'
        }
    }
})