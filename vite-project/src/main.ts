// import './assets/main.css'
import App from './App.vue'
import router from './router'
import 'nprogress/nprogress.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

const app = createApp(App)
// let x = 'hhhh'
// console.log(x)

app.use(createPinia())
app.use(router)

app.mount('#app')
