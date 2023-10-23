<script lang="ts" setup>
import { Subtask } from "@/types/app";
import { useAppStore } from "@/stores/app";

const store = useAppStore();

const completedTotal = computed(
  () => store.selectedTask?.subtasks.filter((x: Subtask) => x.completed).length
);
</script>

<template>
  <q-dialog v-model="store.viewTaskDialog">
    <q-card class="dialog-card">
      <q-card-section class="view-task-title">
        <h2 style="max-width: 27rem">
          {{ store.selectedTask?.title }}
        </h2>
        <MenuTaskOptions />
      </q-card-section>

      <q-card-section class="mt-6">
        <p class="body-large text-medium-grey" style="max-width: 30rem">
          {{ store.selectedTask?.description }}
        </p>

        <div class="body-medium text-medium-grey mt-6">
          <div class="mb-4">
            Subtasks ({{ completedTotal }} of
            {{ store.selectedTask?.subtasks.length }})
          </div>
          <BaseCompletedTask
            v-for="subtask in store.selectedTask?.subtasks"
            :key="subtask.id"
            :subtask="subtask"
          />
        </div>

        <div class="body-medium text-medium-grey mt-6">
          <div class="mb-2">Current Status</div>
          <q-select
            outlined
            dense
            v-model="store.selectedTask.columnId"
            :dark="store.isDark"
            :options="store.activeMenu?.columns"
            option-value="id"
            option-label="name"
            emit-value
            map-options
          />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
