<script lang="ts" setup>
import { useAppStore } from "@/stores/app";

const store = useAppStore();

const disable = computed<boolean>(() => store.activeMenu === undefined);

const onClick = () => {
  store.editBoardDialog = true;
  store.boardDialog = true;
};

const onDelete = () => {
  store.deleteBoard = true;
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
          :disable="disable"
          class="menu-wrapper-item body-large"
          @click="onClick"
        >
          <q-item-section>Edit Board</q-item-section>
        </q-item>
        <q-item
          clickable
          v-close-popup
          :disable="disable"
          class="menu-wrapper-item body-large text-negative"
          @click="onDelete"
        >
          <q-item-section>Delete Board</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>
