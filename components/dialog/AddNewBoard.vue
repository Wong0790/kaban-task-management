<script lang="ts" setup>
import { Board, Column } from "@/types/app";
import { useAppStore } from "@/stores/app";

const store = useAppStore();
const form = ref<Board>({
  id: store.boards.length + 1,
  active: false,
  title: "",
  columns: [{ id: 0, name: "" }],
});

const addColumn = () => {
  form.value.columns.push({
    id: form.value.columns.length,
    name: "",
  });
};

const updateColumn = (id: number, column: string) => {
  const index = form.value.columns.findIndex((x: Column) => x.id === id);
  form.value.columns[index].name = column;
};

const removeColumn = (id: number) => {
  form.value.columns = form.value.columns.filter((x: Column) => x.id !== id);
};

const onSubmit = () => {
  store.addBoard({ ...form.value });
  store.newBoard = false;
  onReset();
};

const onReset = () => {
  form.value.id = undefined;
  form.value.title = "";
  form.value.columns = [{ id: 0, name: "" }];
};
</script>

<template>
  <q-dialog v-model="store.newBoard">
    <q-card class="dialog-card">
      <q-card-section>
        <h2>Add New Board</h2>
      </q-card-section>

      <q-card-section class="mt-6">
        <q-form @submit="onSubmit" class="q-gutter-md">
          <div class="body-medium text-medium-grey">
            <div class="mb-2">Name</div>
            <q-input
              outlined
              dense
              v-model="form.title"
              placeholder="e.g. Web Design"
              :dark="store.colorMode.preference === 'dark'"
            />
          </div>

          <div class="body-medium text-medium-grey">
            <div class="mb-2">Columns</div>
            <BaseColumn
              v-for="col in form.columns"
              :key="col.id"
              :column="col"
              @updateColumn="updateColumn"
              @removeColumn="removeColumn"
            />
          </div>

          <div>
            <q-btn
              unelevated
              label="+ Add New Column"
              no-caps
              rounded
              class="w-full bg-transparent-purple"
              @click="addColumn"
            />
            <q-btn
              unelevated
              label="Create New Board"
              type="submit"
              color="primary"
              no-caps
              rounded
              class="w-full mt-6"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
