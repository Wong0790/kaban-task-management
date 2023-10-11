<script lang="ts" setup>
const open = ref(false);
</script>

<template>
  <div class="layout-menu">
    <q-btn
      flat
      padding="16px 0"
      label="Platform Launch"
      no-caps
      class="platform-btn-header"
      @click="open = !open"
    >
      <q-icon
        :name="!open ? 'expand_more' : 'expand_less'"
        color="primary"
        size="sm"
      />
      <q-menu
        :offset="[0, 30]"
        @show="open = true"
        @hide="open = false"
        class="menu-wrapper"
      >
        <div class="row no-wrap rounded-2xl">
          <BaseLayoutDrawer />
        </div>
      </q-menu>
    </q-btn>
  </div>
</template>
