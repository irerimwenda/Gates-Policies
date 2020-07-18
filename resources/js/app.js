
require('./bootstrap');

window.Vue = require('vue');

// Sweet Modal
import SweetModal from 'sweet-modal-vue/src/plugin.js'
Vue.use(SweetModal)

// V-Form
import { Form, HasError, AlertError } from 'vform'
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

// Vue Loading
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.use(Loading, {
    // props
    loader: 'bars',
    color: '#333333',
    width: 400,
    Height: 400

}, {
    // slots
});

// Vue Gravatar
import Gravatar from 'vue-gravatar';
Vue.component('v-gravatar', Gravatar);

// Vue Moments Ago
import VueMomentsAgo from 'vue-moments-ago'
Vue.component('vue-moments-ago', VueMomentsAgo);

// Vue Router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Vue Router Routes
const routes = [
    { 
        path: '/blog/:id',
        name: 'blog',
        component: require('./components/SingleBlog.vue').default,
        props: true
    },
  ]

const router = new VueRouter({
    mode: 'history',
    routes 
})

// Vue Filters
Vue.filter('filterUsername', (value)=> {
    if(!value) return ''
    value = value.toString()
    return value.split("@")[0]
})

// New Vue Instance
let Fire = new Vue()
window.Fire = Fire



// Components
Vue.component('blog-component', require('./components/BlogComponent.vue').default);




// Vue Instance
const app = new Vue({
    el: '#app',
    router,
});
