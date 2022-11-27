<script setup>
import { computed } from 'vue';
import { getMoonScore } from './utils/moonScore';
const props = defineProps({
  score: Number,
});
const viz = computed(() => getMoonScore(props.score));
</script>
<template>
  {{ viz }}
  {{ props.score }}
</template>
