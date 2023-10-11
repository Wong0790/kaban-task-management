<script lang="ts" setup>
const emit = defineEmits(["onClickItem"]);

const props = defineProps({
  id: Number,
  active: Boolean,
  title: String,
});

const isPrimary = computed(() => props.id === 0);

const onClick = () => {
  console.log("id", props.id);
  emit("onClickItem", props.id);
};
</script>

<template>
  <q-item
    :active="active"
    clickable
    v-ripple
    :class="isPrimary ? 'text-primary' : 'text-medium-grey'"
    active-class="active-item-menu"
    @click="onClick"
  >
    <q-item-section avatar>
      <IconBoard :active="active" :primary="isPrimary" />
    </q-item-section>
    <q-item-section
      ><h3>{{ title }}</h3></q-item-section
    >
  </q-item>
</template>
