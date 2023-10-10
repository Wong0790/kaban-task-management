<script lang="ts" setup>
import { useAppStore } from "@/stores/app";
import { IconLogoDark, IconLogoLight } from "#components";

const $q = useQuasar();
const leftDrawerOpen = ref(true);
const store = useAppStore();

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>

<template>
  <q-layout view="lHh lpR fFf">
    <q-header bordered class="header-wrapper">
      <q-toolbar class="my-auto">
        <div
          class="header-logo-wrapper"
          :class="leftDrawerOpen ? 'hidden' : 'flex'"
        >
          <component
            :is="store.theme === 'light' ? IconLogoDark : IconLogoLight"
          ></component>
        </div>

        <q-toolbar-title>
          <h1>Platform Launch</h1>
          <BaseLayoutMenu />
        </q-toolbar-title>
        <q-btn
          color="primary"
          rounded
          no-caps
          @click="toggleLeftDrawer"
          disabled
        >
          <span v-if="$q.screen.width > 640">+ Add New Task</span>
          <IconAddTask v-else />
        </q-btn>
        <q-btn flat round dense class="q-mx-sm">
          <IconMenuOptions />
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      :bordered="store.theme === 'light'"
      class="dark:bg-dark-grey"
    >
      <q-item v-ripple class="h-24">
        <q-item-section avatar>
          <component
            :is="store.theme === 'light' ? IconLogoDark : IconLogoLight"
          ></component>
        </q-item-section>
      </q-item>
      <BaseLayoutDrawer @toggleLeftDrawer="toggleLeftDrawer" />
    </q-drawer>
    <div class="show-sidebar-wrapper" @click="toggleLeftDrawer">
      <IconShowSidebar />
    </div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
