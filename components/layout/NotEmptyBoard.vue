<script lang="ts" setup>
import { useAppStore } from "@/stores/app";
import { Task } from "@/types/app";

const store = useAppStore();

const totalTasks = (col?: number) => {
  return store.activeMenu?.tasks.filter((x: Task) => x.columnId === col).length;
};

const openTask = (task: Task) => {
  store.selectedTask = task;
  store.viewTaskDialog = true;
};
</script>

<template>
  <div class="flex flex-nowrap gap-6">
    <q-card
      class="column-card"
      v-for="column in store.activeMenu?.columns"
      :key="column.id"
    >
      <q-card-section class="uppercase">
        <h4>{{ column.name }} ({{ totalTasks(column.id) }})</h4>
      </q-card-section>

      <LayoutColumnTaskCard
        v-for="task in store.activeMenu?.tasks.filter((x: Task) => x.columnId === column.id)"
        :task="task"
        @openTask="openTask(task)"
      />
    </q-card>
    <BaseAddNewColumn />
  </div>
</template>
