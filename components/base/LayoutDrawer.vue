<script lang="ts" setup>
import { useAppStore } from "@/stores/app";

defineEmits(["toggleLeftDrawer"]);

const store = useAppStore();
const menuItems = [
  {
    id: 1,
    active: false,
    primary: false,
    title: "Platform Launch",
  },
  {
    id: 2,
    active: true,
    primary: false,
    title: "Marketing Plan",
  },
  {
    id: 3,
    active: false,
    primary: false,
    title: "Roadmap",
  },
  {
    id: 4,
    active: false,
    primary: true,
    title: "+ Create New Board",
  },
];
</script>

<template>
  <div class="drawer-menu">
    <div>
      <h4 class="all-boards">All boards (3)</h4>
      <q-list padding class="menu-list">
        <BaseLayoutMenuItem
          v-for="item in menuItems"
          :key="item.id"
          :active="item.active"
          :primary="item.primary"
          :title="item.title"
        />
      </q-list>
    </div>
    <div>
      <div class="modes-wrapper-outside">
        <div class="modes-wrapper-inside">
          <IconLightTheme />
          <q-toggle
            v-model="store.theme"
            true-value="dark"
            false-value="light"
            @click="store.onClick"
          ></q-toggle>
          <IconDarkTheme />
        </div>
      </div>
      <div flat class="hide-sidebar-wrapper" @click="$emit('toggleLeftDrawer')">
        <IconHideSidebar />
        <h3>Hide Sidebar</h3>
      </div>
    </div>
  </div>
</template>
