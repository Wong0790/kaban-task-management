<script lang="ts" setup>
import { useAppStore } from "@/stores/app";

defineEmits(["toggleLeftDrawer"]);

const store = useAppStore();
const menuItems = ref(store.boards);

const allBoards = computed(() => store.boards.length - 1);

const onClick = (id: number) => {
  const index = menuItems.value.findIndex((x) => x.id === id);
  switch (id) {
    case 0:
      store.newBoard = true;
      break;

    default:
      const activeIndex = menuItems.value.findIndex((x) => x.active);
      menuItems.value[activeIndex].active = false;
      menuItems.value[index].active = true;
      break;
  }
};
</script>

<template>
  <div class="drawer-menu">
    <div>
      <h4 class="all-boards">All boards ({{ allBoards }})</h4>
      <q-list padding class="menu-list">
        <LayoutDrawerItem
          v-for="item in menuItems"
          :key="item.id"
          :id="item.id"
          :active="item.active"
          :title="item.title"
          @onClickItem="onClick"
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
