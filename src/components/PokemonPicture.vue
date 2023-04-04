<template>
  <img
    :class="{ active: wasAnswered, 'brightness-100': wasAnswered, 'brightness-0': !wasAnswered }"
    class="max-h-96 ease-in transition-all duration-200 pointer-events-none"
    :src="imgSrc"
    alt="pokemon"
  />
</template>

<script setup>
import { computed, onUpdated } from 'vue'
import { ref } from 'vue'

const props = defineProps(['pokeId', 'wasAnswered'])

const id = ref(props.pokeId)

const imgSrc = computed(
  () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id.value}.svg`
)

const wasAnswered = ref(props.wasAnswered)

onUpdated(() => {
  wasAnswered.value = props.wasAnswered
})
</script>
