<script lang="ts" setup>
import { useAppStore } from "@/stores/app";

const store = useAppStore();
</script>

<template>
  <div class="w-full my-auto mx-auto text-center">
    <h2 class="text-medium-grey">
      This board is empty. Create a new column to get started.
    </h2>
    <q-btn
      color="primary"
      rounded
      no-caps
      size="md"
      class="mt-8"
      @click="
        store.editBoardDialog = true;
        store.boardDialog = true;
      "
    >
      + Add New Column
    </q-btn>
  </div>
</template>
