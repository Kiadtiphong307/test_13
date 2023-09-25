<template>
  <div class="about">
    <h1>This is an about page </h1>
    <h1> Current Count: {{ counter.count }}</h1>
    <h1> double Count: {{ counter.doubleCount }}</h1>
  </div>

  
</template>



<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
 

</script>
