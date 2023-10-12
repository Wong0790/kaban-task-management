<script lang="ts" setup>
import { useAppStore } from "@/stores/app";

const store = useAppStore();

const isBoardEmpty = computed(
  () => store.activeMenu !== undefined && store.activeMenu.columns.length === 0
);
</script>

<template>
  <div class="body-wrapper">
    <LayoutEmptyBoard v-if="isBoardEmpty" />
    <LayoutNotEmptyBoard v-else />
    <DialogBoard />
  </div>
</template>
