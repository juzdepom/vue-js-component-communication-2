import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    showDetails(server){
      this.$emit('showDetails',server);
    },
    setStatus(status){
      this.$emit('setStatus', status);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
