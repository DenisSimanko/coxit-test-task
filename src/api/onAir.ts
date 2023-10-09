import { httpClient } from '@/lib/http-client/';
import type { Composition } from '@/components/CompositionItem.vue';

export const getAllCompositions = async (): { nowplaying: Composition[] } => {
  const { data } = await httpClient.get('/compositions');

  return data;
};
