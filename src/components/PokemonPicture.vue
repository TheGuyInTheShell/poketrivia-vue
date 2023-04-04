<template>
  <img
    :class="{ active: props.wasAnswered, 'brightness-100': props.wasAnswered, 'brightness-0': !props.wasAnswered }"
    class="max-h-96 ease-in transition-all duration-200 pointer-events-none"
    :src="imgSrc"
    alt="pokemon"
  />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(['pokeId', 'wasAnswered'])

const imgSrc = computed(
  () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokeId}.svg`
)

</script>
