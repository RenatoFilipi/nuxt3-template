<script setup lang="ts">
import { useCounterStore } from "~~/stores/Counter";
const counter = useCounterStore();
</script>

<template>
  <div class="flex justify-between items-center gap-4">
    <button
      @click="counter.increment"
      class="bg-green-500 p-2 hover:bg-green-600 text-white"
    >
      increment
    </button>
    <span>{{ counter.getCount }}</span>
    <button
      @click="counter.decrement"
      class="bg-green-500 p-2 hover:bg-green-600 text-white"
    >
      decrement
    </button>
  </div>
</template>
