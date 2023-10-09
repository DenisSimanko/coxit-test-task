<template>
  <div class="composition-list">
    <TransitionGroup
      v-if="isListVisible"
      name="fade"
      tag="div"
      class="composition-list__list-container"
    >
      <CompositionItem
        v-for="composition in sortedCompositionList"
        :key="composition.time"
        :composition="composition"
        class="composition-list__list-item"
      />
    </TransitionGroup>
    <h2 v-else class="list-empty-state">{{ emptyStateMessage }}</h2>
  </div>
</template>

<script setup lang="ts">
// TODO: add virtual scroll and check for differenties before assigning new array
import { ref, onMounted, computed, onBeforeUnmount } from 'vue';
import type { Ref } from 'vue';
import type { Composition } from '@/components/CompositionItem.vue';
import CompositionItem from '@/components/CompositionItem.vue';
import { getAllCompositions } from '@/api/onAir';

let compositionList: Ref<Composition[]> = ref([]);
let timeoutId: Ref<number | null> = ref(null);
let isInited: Ref<boolean> = ref(false);

async function getCompositionList(): Promise<void> {
  try {
    let { nowplaying } = await getAllCompositions();

    compositionList.value = nowplaying;
  } catch (error) {
    // Add error handling
    console.log(error);
    return;
  }

  timeoutId.value = setTimeout(getCompositionList, 2000);
}

const isListVisible = computed<boolean>(() => {
  return !isInited.value || !!compositionList.value.length;
});

// TODO: Add i18n
const emptyStateMessage = computed<string>(() => {
  return 'The list is empty';
});

const sortedCompositionList = computed(() => {
  return compositionList.value.sort((c1, c2) => {
    return Date.parse(c2.time) - Date.parse(c1.time);
  });
});

onMounted(async () => {
  try {
    await getCompositionList();
    isInited.value = true;
  } catch (error) {
    // TODO: add error handling
    console.log(error);
  }
});

onBeforeUnmount(() => {
  clearTimeout(timeoutId.value as number);
});
</script>

<style lang="scss">
.composition-list {
  &__list-item {
    margin-bottom: 0.5rem;
  }

  &__list-container {
    position: relative;
    max-width: 1400px;
    margin: 0 auto;
  }
}

.list-empty-state {
  text-align: center;
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

.fade-leave-active {
  position: absolute;
}
</style>
