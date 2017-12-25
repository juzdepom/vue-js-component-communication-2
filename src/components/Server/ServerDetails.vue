<template>
    <div class="col-xs-12 col-sm-6">
        <div v-if="serverSelected">
          <p>Server Status: {{status}}</p>
          <button @click="revertStatus">Revert Status</button>
        </div>
        <p v-else>Server Details are currently not updated</p>

    </div>

</template>

<script>
  import { eventBus } from '../../main';

  export default {
    props: ['server','status'],
    data: function (){
      return {
        serverSelected: false,
      }
    },
    methods: {
      revertStatus(){
        this.status = "Normal"
        this.server.server.status = "Normal"
      }
    },
    created(){
      eventBus.$on('showDetails',(server) => {
       this.server = server;
       this.status = server.server.status;
       this.serverSelected = true;
      });
    }
  }
</script>

<style>

</style>
