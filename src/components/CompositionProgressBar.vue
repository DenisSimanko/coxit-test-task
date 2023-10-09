<template>
  <progress :value="currentProgress" :max="durationSeconds"></progress>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import type { Ref } from 'vue';
import moment from 'moment';

const props = defineProps<{ startTime: string; duration: string }>();

const currentProgress: Ref<number> = ref(0);
const intervalId: Ref<null | number> = ref(null);

const durationSeconds = computed<number>(() => {
  let duration = moment.duration(props.duration);

  return duration.as('seconds');
});

function getCurrentProgress(): void {
  let now = moment();
  let startTime = moment(props.startTime);

  currentProgress.value = moment.duration(now.diff(startTime)).as('seconds');
}

onMounted(() => {
  intervalId.value = setInterval(getCurrentProgress, 1000);
});

onBeforeUnmount(() => {
  clearInterval(intervalId.value as number);
});
</script>
