<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import carta from './components/carta.vue'
</script>

<template id="cardPropia">
  <p class="hw-text">hola</p>
  <p class="hw-text">como</p>
  <p class="hw-text">estas</p>
  <carta></carta>
</template>
<style>
  p {
  text-align: center;
  font-weight: normal;
  padding: 0.5em;
  margin: 1px 0;
  color:black;
  background-color: #eee;
  border: 1px solid #666;
  }
  body{
    background-color: white;
  }
  #app{
    display: block;
  }
  </style>
