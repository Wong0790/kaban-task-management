<script lang="ts" setup>
import { IconLogoDark, IconLogoLight } from "#components";

const leftDrawerOpen = ref(true);
const colorMode = useColorMode();
const theme = ref(colorMode.preference);

const onClick = () =>
  (colorMode.preference = theme.value === "light" ? "light" : "dark");

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
            :is="theme === 'light' ? IconLogoDark : IconLogoLight"
          ></component>
        </div>

        <q-toolbar-title>
          <h1>Platform Launch</h1>
        </q-toolbar-title>
        <q-btn
          color="primary"
          rounded
          no-caps
          @click="toggleLeftDrawer"
          disabled
        >
          + Add New Task
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
      :bordered="theme === 'light'"
      class="dark:bg-dark-grey"
    >
      <q-item v-ripple class="h-24">
        <q-item-section avatar>
          <component
            :is="theme === 'light' ? IconLogoDark : IconLogoLight"
          ></component>
        </q-item-section>
      </q-item>
      <div class="drawer-menu">
        <div>
          <h4 class="all-boards">All boards (3)</h4>
          <q-list padding class="menu-list">
            <q-item clickable v-ripple class="text-medium-grey">
              <q-item-section avatar>
                <IconBoard />
              </q-item-section>
              <q-item-section><h3>Platform Launch</h3></q-item-section>
            </q-item>

            <q-item
              active
              clickable
              v-ripple
              class="text-medium-grey"
              active-class="active-item-menu"
            >
              <q-item-section avatar>
                <IconBoard :active="true" />
              </q-item-section>
              <q-item-section><h3>Marketing Plan</h3></q-item-section>
            </q-item>

            <q-item clickable v-ripple class="text-medium-grey">
              <q-item-section avatar>
                <IconBoard />
              </q-item-section>
              <q-item-section><h3>Roadmap</h3></q-item-section>
            </q-item>

            <q-item clickable v-ripple class="text-primary">
              <q-item-section avatar>
                <IconBoard :primary="true" />
              </q-item-section>
              <q-item-section><h3>+ Create New Board</h3></q-item-section>
            </q-item>
          </q-list>
        </div>
        <div>
          <div class="modes-wrapper-outside">
            <div class="modes-wrapper-inside">
              <IconLightTheme />
              <q-toggle
                v-model="theme"
                true-value="dark"
                false-value="light"
                @click="onClick"
              ></q-toggle>
              <IconDarkTheme />
            </div>
          </div>
          <div flat class="hide-sidebar-wrapper" @click="toggleLeftDrawer">
            <IconHideSidebar />
            <h3>Hide Sidebar</h3>
          </div>
        </div>
      </div>
    </q-drawer>
    <div class="show-sidebar-wrapper" @click="toggleLeftDrawer">
      <IconShowSidebar />
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
