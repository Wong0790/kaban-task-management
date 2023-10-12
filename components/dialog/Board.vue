<script lang="ts" setup>
import { Board, Column } from "@/types/app";
import { useAppStore } from "@/stores/app";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

const store = useAppStore();
const form = ref<Board>({
  id: undefined,
  active: false,
  title: "",
  columns: [{ id: 0, name: "" }],
});

const rules = {
  title: { required },
};

const v$ = useVuelidate(rules, form);

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

const onSubmit = async () => {
  if (await v$.value.$validate()) {
    if (form.value.id === undefined) {
      store.addBoard({ ...form.value });
    } else {
      store.updateBoard({ ...form.value });
    }
    store.boardDialog = false;
    onReset();
  }
};

const onReset = () => {
  v$.value.$reset();
  form.value.id = undefined;
  form.value.title = "";
  form.value.columns = [{ id: 0, name: "" }];
};

onUpdated(() => {
  if (store.editBoardDialog && store.activeMenu) {
    form.value = { ...store.activeMenu };
    store.editBoardDialog = false;
  } else if (!store.editBoardDialog) {
    onReset();
  }
});
</script>

<template>
  <q-dialog v-model="store.boardDialog">
    <q-card class="dialog-card">
      <q-card-section>
        <h2>{{ form.id === undefined ? "Add New Board" : "Edit Board" }}</h2>
      </q-card-section>

      <q-card-section class="mt-6">
        <q-form @submit="onSubmit" class="q-gutter-md">
          <div class="body-medium text-medium-grey">
            <div class="mb-2">Name</div>
            <q-input
              outlined
              dense
              v-model="form.title"
              :error="v$.title.$error"
              no-error-icon
              hide-bottom-space
              placeholder="e.g. Web Design"
              error-message="Field required"
              :dark="store.colorMode.preference === 'dark'"
              @input="v$.title.$touch"
              @blur="v$.title.$touch"
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
              :label="
                form.id === undefined ? 'Create New Board' : 'Save Changes'
              "
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
