<script lang="ts" setup>
import { useAppStore } from "@/stores/app";

const store = useAppStore();
</script>

<template>
  <q-dialog v-model="store.deleteTask">
    <q-card class="dialog-card">
      <q-card-section>
        <h2 class="text-[#EA5555]">Delete this task?</h2>
      </q-card-section>
      <q-card-section>
        <p class="body-large text-medium-grey" style="max-width: 30rem">
          Are you sure you want to delete the '{{ store.selectedTask?.title }}'
          task and its subtasks? This action cannot be reversed.
        </p>
      </q-card-section>
      <q-card-actions align="center">
        <q-btn
          label="Delete"
          color="negative"
          no-caps
          v-close-popup
          rounded
          padding="sm xl"
          class="w-5/12"
          @click="store.removeTask"
        />
        <q-btn
          label="Cancel"
          class="bg-transparent-purple w-5/12"
          padding="sm xl"
          no-caps
          v-close-popup
          rounded
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
