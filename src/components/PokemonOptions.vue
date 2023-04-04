<template>
  <div class="flex justify-center">
    <ul class="w-96">
      <li
        :class="{
          active: wasAnswered,
          'bg-red-400': secretId !== option.id && wasAnswered,
          'hover:bg-emerald-300': !wasAnswered,
          'cursor-pointer': !wasAnswered
        }"
        class="p-1 px-4 w-full my-2 bg-emerald-100 rounded-md"
        v-for="option in options"
        :key="option.id"
        @click="$emit('optionSelected', option.id)"
      >
        {{ option.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onUpdated } from 'vue'

const props = defineProps(['options', 'wasAnswered', 'id'])
const wasAnswered = ref(props.wasAnswered)
const secretId = ref(props.id)
const options = computed(() => props.options)

onUpdated(() => {
  wasAnswered.value = props.wasAnswered
})
</script>
