


<template>
    <v-layout>
          <div class="chat">Hola desde chat</div>
    </v-layout>
</template>

<script>
  export default {
      name : 'chat',
    data () {
      return {
        chatTest: "test"
      }
    }
  }
</script>

<style>
  .chat{
    position: fixed;
    right: 100px;
    bottom: 100px;
    background: red;
  }
</style>