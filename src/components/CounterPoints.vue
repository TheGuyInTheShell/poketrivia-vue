<template>
  <h2 class="text-yellow-500 text-center text-3xl font-bold">Points: {{ props.pointsRender }}</h2>
</template>

<script setup>
const props = defineProps(['pointsRender'])
</script>
