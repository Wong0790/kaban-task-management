<script lang="ts" setup>
import { useAppStore } from "@/stores/app";

const store = useAppStore();
</script>

<template>
  <q-card
    class="column-card add-new-column-card"
    flat
    @click="
      store.editBoardDialog = true;
      store.boardDialog = true;
    "
  >
    <q-card-section class="new-column-card-text"> + New Column </q-card-section>
  </q-card>
</template>
