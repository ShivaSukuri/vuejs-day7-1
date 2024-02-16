import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createStore} from 'vuex';
const store= createStore({
    state(){
        return{
            counter:3
        }
    },
    mutations:{
        increment(state,payload){
            state.counter+=payload;
        }
    },
    getters:{
        getCounter(state){
            return state.counter
        }
    },
    actions:{
        increment(context,payload){
            if(this.state.counter<=50){
                context.commit('increment',payload);
            }
        }
    }
})

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
