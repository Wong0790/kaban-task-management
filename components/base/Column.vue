<script lang="ts" setup>
import { Column } from "@/types/app";
import { useAppStore } from "@/stores/app";

defineEmits(["updateColumn", "removeColumn"]);

const props = defineProps<{
  column: Column;
}>();

const store = useAppStore();
const col = ref("");

onMounted(() => {
  col.value = props.column.name;
});
</script>

<template>
  <div class="columns-input-wrapper">
    <q-input
      outlined
      dense
      :dark="store.colorMode.preference === 'dark'"
      v-model="col"
      placeholder="e.g. Todo"
      class="w-10/12 sm:w-11/12"
      @blur="$emit('updateColumn', column.id, col)"
    />
    <q-btn flat round dense @click="$emit('removeColumn', column.id)">
      <IconCross />
    </q-btn>
  </div>
</template>
