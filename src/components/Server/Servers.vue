<template>
    <div class="col-xs-12 col-sm-6">
      <ul class="list-group">
          <single-server v-for="server in servers" :server="{server}" ></single-server>
      </ul>
    </div>
</template>

<script>
  import SingleServer from './SingleServer.vue'
  import { eventBus } from '../../main'

  export default {
    data: function () {
      return {
        servers: [
          {id: 1, status: 'Normal'},
          {id: 2, status: 'Critical'},
          {id: 3, status: 'Unknown'},
          {id: 4, status: 'Normal'},
        ]
      }
    },
    components: {
      SingleServer,
    },
    methods: {

    }
    
  }
</script>

<style>

</style>
