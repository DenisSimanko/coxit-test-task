<template>
  <div class="composition-item">
    <div>
      <CompositionPoster :src="composition.imageUrl" class="composition-item__item-poster" />
    </div>
    <div class="composition-item__composition-info">
      <span class="composition-info__composition-title">{{ composition.title }}</span>
      <span>{{ composition.artist }}</span>
      <!-- todo: add i18n -->
      <span>{{ `Duration: ${composition.duration}` }}</span>
      <span>{{ `Played at: ${startTime}` }}</span>
      <CompositionProgressBar
        v-if="isShowProgress"
        :duration="composition.duration"
        :start-time="composition.time"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import CompositionPoster from './CompositionPoster.vue';
import CompositionProgressBar from './CompositionProgressBar.vue';

export type Composition = {
  artist: string;
  duration: string;
  iTunesTrackUrl: string;
  imageUrl: string;
  status: 'playing' | 'history';
  time: string;
  title: string;
};

const props = defineProps<{ composition: Composition }>();

// TODO: add moment.js for handy manipulations
const startTime = computed<string>(() => {
  let date = new Date(props.composition.time);

  return date.toLocaleTimeString();
});

const isShowProgress = computed<boolean>(() => {
  return props.composition.status === 'playing';
});
</script>

<style lang="scss">
$border-radius: 1rem;
.composition-item {
  display: flex;
  padding: 1rem;
  border-radius: $border-radius;
  background-color: #3b37374d;

  &__item-poster {
    width: 5rem;
    height: 5rem;
    border-radius: $border-radius;
  }

  &__composition-info {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  }
}

.composition-info {
  &__composition-title {
    font-weight: bold;
  }
}
</style>
