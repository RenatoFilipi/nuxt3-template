<script setup lang="ts">
import { useMouse } from "@vueuse/core";
import Counter from "~~/components/Counter.vue";
const fact = useFact();

definePageMeta({
  layout: "custom",
});
const { x, y } = useMouse();
</script>

<template>
  <div class="flex justify-center items-center h-screen font-karla">
    <div class="flex flex-col gap-6 justify-center items-center">
      <Counter />
      <div>pos: {{ x }}, {{ y }}</div>
      <ClientOnly>{{ fact }}</ClientOnly>
    </div>
  </div>
</template>
