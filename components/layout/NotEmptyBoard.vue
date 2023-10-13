<script lang="ts" setup>
import { useAppStore } from "@/stores/app";

const store = useAppStore();
</script>

<template>
  <div class="flex flex-nowrap gap-6">
    <q-card
      class="column-card"
      v-for="column in store.activeMenu?.columns"
      :key="column.id"
    >
      <q-card-section class="uppercase">
        <h4>{{ column.name }} (4)</h4>
      </q-card-section>

      <LayoutColumnTaskCard />
      <LayoutColumnTaskCard />
    </q-card>
    <BaseAddNewColumn />
  </div>
</template>
