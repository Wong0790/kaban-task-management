<script lang="ts" setup>
import { Subchild } from "@/types/app";
import { useAppStore } from "@/stores/app";

defineEmits(["updateColumn", "removeColumn"]);

const props = defineProps<{
  child: Subchild;
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
      @blur="$emit('updateColumn', child.id, subchild)"
      ref="columnRef"
    />
    <q-btn flat round dense @click="$emit('removeColumn', child.id)">
      <IconCross />
    </q-btn>
  </div>
</template>
