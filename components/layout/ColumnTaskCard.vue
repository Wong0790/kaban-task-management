<script lang="ts" setup>
defineProps({
  title: String,
  subtasks: { default: 0, type: Number },
  completed: { default: 0, type: Number },
});
</script>

<template>
  <q-card
    class="column-task-card"
    style="
      border-radius: 0.5rem;
      box-shadow: 0px 4px 6px 0px rgba(54, 78, 126, 0.1);
    "
  >
    <q-card-section>
      <h3>{{ title }}</h3>
      <div class="body-medium mt-2 text-medium-grey">
        {{ completed }} of {{ subtasks }} substasks
      </div>
    </q-card-section>
  </q-card>
</template>
