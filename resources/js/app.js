import Vue from 'vue';
import router from './router';

/**
 * Import Components
 */
import App from './components/App';


require('./bootstrap');



const app = new Vue({
    el: '#app',
    components: {
        App
    },
    router
});
