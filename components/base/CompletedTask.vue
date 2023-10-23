<script lang="ts" setup>
import { Subtask } from "@/types/app";
import { useAppStore } from "@/stores/app";

defineProps<{
  subtask: Subtask;
}>();

const store = useAppStore();
</script>

<template>
  <div
    class="completed-task-wrapper"
    :class="subtask.completed ? 'line-through' : ''"
  >
    <q-checkbox v-model="subtask.completed" size="xs" :dark="store.isDark" />
    <p style="max-width: 27rem" :class="!subtask.completed ? 'test' : ''">
      {{ subtask.name }}
    </p>
  </div>
</template>
