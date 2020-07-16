
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

// New Vue Instance
let Fire = new Vue()
window.Fire = Fire



// Components
Vue.component('blog-component', require('./components/BlogComponent.vue').default);




// Vue Instance
const app = new Vue({
    el: '#app',
});
