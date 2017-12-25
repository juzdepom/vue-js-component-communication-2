<template>
    <li class="list-group-item">
        <button @click="showDetails">Server #{{server.server.id}}</button>
    </li>

</template>

<script>
  import { eventBus } from '../../main';

  export default {
    props: {
      server: {
        required: true,
      }
    },
    methods: {
      showDetails(){
        eventBus.showDetails(this.server)
      }
      
    }
  }

</script>
