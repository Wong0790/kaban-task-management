<script lang="ts" setup></script>

<template>
  <q-btn flat round dense class="q-mx-sm">
    <IconMenuOptions />
    <q-menu :offset="[0, 20]" class="menu-wrapper min-w-[12rem]">
      <q-list>
        <q-item clickable v-close-popup class="menu-wrapper-item body-large">
          <q-item-section>Edit Board</q-item-section>
        </q-item>
        <q-item
          clickable
          v-close-popup
          class="menu-wrapper-item body-large text-negative"
        >
          <q-item-section>Delete Board</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>
