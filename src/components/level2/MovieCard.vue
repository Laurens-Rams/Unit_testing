<script setup>
import { computed, toRef } from 'vue';
import MoonRating from './Rating.vue';
const props = defineProps(['movie', 'favoriteMovie']);
const emit = defineEmits(['favorite-selected']);
const favoriteMovieRef = toRef(props, 'favoriteMovie');

const isFavorite = computed(
  {
    // getter
    get() {
      return props.movie.id == favoriteMovieRef.value ? '😍' : '';
    },
    set() {
      emit('favorite-selected', props.movie.id);
    },
  },
  { deep: true }
);
</script>

<template>
  <div class="movie-container">
    <img :src="movie.picture" class="movie-poster" />
    <div class="movie-title">{{ isFavorite }} {{ movie.title }}</div>
    <div>Rating: {{ movie.score }}%</div>
    <div><MoonRating :score="Number(movie.score)" /></div>
    <div>
      <button
        :disabled="movie.id == favoriteMovieRef"
        @click="isFavorite = movie.id"
      >
        Set as Favorite
      </button>
    </div>
  </div>
</template>

<style>
.movie-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.movie-poster {
  height: 120px;
}

.movie-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 150px;
  font-weight: bold;
}
</style>
