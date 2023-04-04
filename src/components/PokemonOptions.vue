<template>
  <div class="flex justify-center">
    <ul class="w-96">
      <li
        :class="{
          active: props.wasAnswered,
          'bg-red-400': props.id !== option.id && props.wasAnswered,
          'hover:bg-emerald-300': !props.wasAnswered,
          'cursor-pointer': !props.wasAnswered
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
import { computed } from 'vue'

const props = defineProps(['options', 'wasAnswered', 'id'])
const options = computed(() => props.options)

</script>
