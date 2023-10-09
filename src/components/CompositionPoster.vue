<template>
  <img :src="imageSrc" @error="onImgError" />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Ref } from 'vue';

const props = defineProps<{ src?: string }>();

const placeholderSrc: Ref<string> = ref('/image-placeholder.jpg');
const isAnyError: Ref<boolean> = ref(false);

const imageSrc = computed<string>(() => {
  return isAnyError.value || !props.src ? placeholderSrc.value : props.src;
});

function onImgError(): void {
  isAnyError.value = true;
}
</script>
