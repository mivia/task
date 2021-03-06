import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import store from './store';

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  created() {
    this.$store.dispatch('getIssues');
  }
})
