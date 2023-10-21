<script lang="ts" setup>
import { useAppStore } from "@/stores/app";

const store = useAppStore();

const onClick = () => {
  store.viewTaskDialog = false;
  store.editTaskDialog = true;
  store.taskDialog = true;
};

const onDelete = () => {
  store.viewTaskDialog = false;
  store.deleteTask = true;
};
</script>

<template>
  <q-btn flat round dense class="q-mx-sm">
    <IconMenuOptions />
    <q-menu :offset="[0, 20]" class="menu-wrapper min-w-[12rem]">
      <q-list>
        <q-item
          clickable
          v-close-popup
          class="menu-wrapper-item body-large"
          @click="onClick"
        >
          <q-item-section>Edit Task</q-item-section>
        </q-item>
        <q-item
          clickable
          v-close-popup
          class="menu-wrapper-item body-large text-negative"
          @click="onDelete"
        >
          <q-item-section>Delete Task</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>
