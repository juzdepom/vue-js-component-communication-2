import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    showDetails(server){
      this.$emit('showDetails',server);
    },
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
