<script lang="ts" setup>
import { useQuasar } from "quasar";
import { useAppStore } from "@/stores/app";

const $q = useQuasar();
const store = useAppStore();

const disable = computed<boolean>(() => store.activeMenu === undefined);

const onClick = () => {
  store.editBoardDialog = true;
  store.boardDialog = true;
};

const onDelete = () => {
  $q.notify({
    message: "Are you sure you want to remove the selected board?",
    icon: "error",
    color: "warning",
    textColor: "black",
    position: "top-right",
    actions: [
      {
        label: "Yes",
        color: "negative",
        handler: () => store.removeBoard(),
      },
      {
        label: "Cancel",
        color: "white",
      },
    ],
  });
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
