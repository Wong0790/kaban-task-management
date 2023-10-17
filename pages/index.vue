<script lang="ts" setup>
import { useAppStore } from "@/stores/app";

const store = useAppStore();
</script>

<template>
  <div class="body-wrapper">
    <LayoutEmptyBoard
      v-if="
        store.activeMenu !== undefined && store.activeMenu.columns.length === 0
      "
    />
    <q-scroll-area
      style="height: calc(100vh - 8rem); width: 100vw"
      v-else-if="store.activeMenu !== undefined"
    >
      <LayoutNotEmptyBoard />
    </q-scroll-area>
    <DialogBoard />
    <DialogTask />
  </div>
</template>
