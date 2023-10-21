<script lang="ts" setup>
import { Subtask, Column } from "@/types/app";
import { useAppStore } from "@/stores/app";

defineEmits(["updateChild", "removeChild"]);

const props = defineProps<{
  child: Subtask | Column;
}>();

const store = useAppStore();
const subchild = ref("");
const subchildRef = ref<HTMLInputElement | null>(null);

onMounted(() => {
  subchild.value = props.child.name;
  subchildRef.value?.focus();
});
</script>

<template>
  <div class="columns-input-wrapper">
    <q-input
      outlined
      dense
      :dark="store.colorMode.preference === 'dark'"
      v-model="subchild"
      class="w-10/12 sm:w-11/12"
      @blur="$emit('updateChild', child.id, subchild)"
      ref="subchildRef"
    />
    <q-btn flat round dense @click="$emit('removeChild', child.id)">
      <IconCross />
    </q-btn>
  </div>
</template>
