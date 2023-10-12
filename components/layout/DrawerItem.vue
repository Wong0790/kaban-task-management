<script lang="ts" setup>
const emit = defineEmits(["onClickItem"]);

const props = defineProps({
  id: Number,
  active: Boolean,
  title: String,
});

const onClick = () => {
  emit("onClickItem", props.id);
};
</script>

<template>
  <q-item
    :active="active"
    clickable
    v-ripple
    class="text-medium-grey"
    active-class="active-item-menu"
    @click="onClick"
  >
    <q-item-section avatar>
      <IconBoard :active="active" />
    </q-item-section>
    <q-item-section
      ><h3>{{ title }}</h3></q-item-section
    >
  </q-item>
</template>
