<script lang="ts" setup>
import { Task, Subtask } from "@/types/app";

const props = defineProps<{
  task: Task;
}>();

const completed = computed(
  () => props.task.subtasks.filter((x: Subtask) => x.completed).length
);
</script>

<template>
  <q-card
    class="column-task-card"
    style="
      border-radius: 0.5rem;
      box-shadow: 0px 4px 6px 0px rgba(54, 78, 126, 0.1);
    "
    @click="$emit('openTask', task)"
  >
    <q-card-section>
      <h3>{{ task.title }}</h3>
      <div class="body-medium mt-2 text-medium-grey">
        {{ completed }} of {{ task.subtasks.length }} substasks
      </div>
    </q-card-section>
  </q-card>
</template>
