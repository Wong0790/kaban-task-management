<script lang="ts" setup>
defineProps({
  active: Boolean,
  primary: Boolean,
  title: String,
});
</script>

<template>
  <q-item
    :active="active"
    clickable
    v-ripple
    :class="!primary ? 'text-medium-grey' : 'text-primary'"
    active-class="active-item-menu"
  >
    <q-item-section avatar>
      <IconBoard :active="active" :primary="primary" />
    </q-item-section>
    <q-item-section
      ><h3>{{ title }}</h3></q-item-section
    >
  </q-item>
</template>
