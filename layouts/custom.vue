<script lang="ts" setup>
import { useAppStore } from "@/stores/app";

const $q = useQuasar();
const leftDrawerOpen = ref(false);
const store = useAppStore();

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

onMounted(() => {
  store.changeColorMode();
});
</script>

<template>
  <q-layout view="lHh lpR fFf">
    <q-header bordered class="header-wrapper">
      <q-toolbar class="my-auto">
        <div
          class="header-logo-wrapper"
          :class="leftDrawerOpen ? 'hidden' : 'flex'"
        >
          <IconLogo :color="store.isDark ? '#FFF' : '#000112'" />
        </div>

        <q-toolbar-title>
          <h1>{{ store.activeMenu?.title }}</h1>
          <MenuDrawer />
        </q-toolbar-title>
        <q-btn
          color="primary"
          rounded
          no-caps
          @click="store.taskDialog = true"
          :disabled="
            store.activeMenu === undefined || !store.activeMenu.columns.length
          "
        >
          <span v-if="$q.screen.width > 640">+ Add New Task</span>
          <IconAddTask v-else />
        </q-btn>
        <MenuBoardOptions />
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      :bordered="!store.isDark"
      class="dark:bg-dark-grey"
    >
      <q-item v-ripple class="h-24">
        <q-item-section avatar>
          <IconLogo :color="store.isDark ? '#FFF' : '#000112'" />
        </q-item-section>
      </q-item>
      <LayoutDrawer @toggleLeftDrawer="toggleLeftDrawer" />
    </q-drawer>
    <div class="show-sidebar-wrapper" @click="toggleLeftDrawer">
      <IconShowSidebar />
    </div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
