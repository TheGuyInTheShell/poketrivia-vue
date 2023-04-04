<template>
  <h1 class="text-3xl font-bold">¿Quien es este pokemon?</h1>
  <h2 v-if="!secretPokemonId">Cargando...</h2>
  <section v-else class="flex flex-col my-4">
    <PokemonPicture :pokeId="secretPokemonId" :wasAnswered="answered" />
    <PokemonOptions
      :options="pokeOptions"
      :wasAnswered="answered"
      :id="secretPokemonId"
      @option-selected="checkAnswer($event)"
    />
    <CounterPoints :pointsRender="points" />
  </section>
  <section v-if="answered">
    <ButtonNext @next-round="reload()" />
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import PokemonPicture from '@/components/PokemonPicture.vue'
import CounterPoints from '@/components/CounterPoints.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import ButtonNext from '@/components/ButtonNext.vue'
import getPokemonsNames from '@/helpers/getPokeOptions.js'

const pokeOptions = ref([])
const secretPokemonId = ref(0)
const answered = ref(false)
const points = ref(0)

async function mixPokemon() {
  pokeOptions.value = await getPokemonsNames()
  secretPokemonId.value = pokeOptions.value[(Math.random() * 3) << 0].id
}

function checkAnswer(id) {
  if (secretPokemonId.value === id) {
    points.value += 1
  }
  answered.value = true
}

function reload() {
  answered.value = false
  secretPokemonId.value = 0
  pokeOptions.value = []
  mixPokemon()
}

onMounted(() => {
  mixPokemon()
})
</script>
