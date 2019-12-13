/**
 * All Vue Routes will get handled here ...
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

/**
 * Import Components for Router usage
 */
import ExampleComponent from './components/ExampleComponent';

Vue.use(VueRouter);


export default new VueRouter({
    routes: [
        { path: '/', component: ExampleComponent }
    ],

    // Turns off backwards compatabilty for older browsers
    mode: 'history',
    
})