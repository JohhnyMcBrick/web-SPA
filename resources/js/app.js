/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';
Vue.component(
    "list-posts", 
    require ("/Components/PostListComponent.vue").default
);

Vue.component(
    "modal-post", 
    require ("/Components/PostModalComponent.vue").default
);

Vue.component(
    "post-list-default",
    require ("./Components/PostListDefaultComponent.vue").default
);

const app = new Vue({
    el: "#app",
    data: {
        message: "Curso frameworks MVC"
    }
});



