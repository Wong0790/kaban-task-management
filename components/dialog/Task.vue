<script lang="ts" setup>
import { Task, Subtask } from "@/types/app";
import { useAppStore } from "@/stores/app";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

const store = useAppStore();
const form = ref<Task>({
  id: undefined,
  title: "",
  description: "",
  subtasks: [],
  boardId: store.activeMenu?.id,
  columnId: 0,
});

const rules = {
  title: { required },
};

const v$ = useVuelidate(rules, form);

const addSubtask = () => {
  form.value.subtasks.push({
    id: form.value.subtasks.length,
    name: "",
    completed: false,
  });
};

const updateSubtask = (id: number, column: string) => {
  const index = form.value.subtasks.findIndex((x: Subtask) => x.id === id);
  form.value.subtasks[index].name = column;
};

const removeSubtask = (id: number) => {
  form.value.subtasks = form.value.subtasks.filter((x: Subtask) => x.id !== id);
};

const onSubmit = async () => {
  if (await v$.value.$validate()) {
    if (form.value.id === undefined) {
      store.addTask({ ...form.value });
    } else {
      store.updateTask({ ...form.value });
    }
    store.taskDialog = false;
    onReset();
  }
};

const onReset = () => {
  v$.value.$reset();
  form.value.id = undefined;
  form.value.title = "";
  form.value.description = "";
  form.value.subtasks = [];
  form.value.boardId = store.activeMenu?.id;
  form.value.columnId = store.activeMenu?.columns[0].id;
};

onUpdated(() => {
  if (store.editTaskDialog && store.selectedTask) {
    form.value = { ...store.selectedTask };
    store.editTaskDialog = false;
  } else if (!store.editTaskDialog) {
    onReset();
  }
});
</script>

<template>
  <q-dialog v-model="store.taskDialog">
    <q-card class="dialog-card">
      <q-card-section>
        <h2>{{ form.id === undefined ? "Add New Task" : "Edit Task" }}</h2>
      </q-card-section>

      <q-card-section class="mt-6">
        <q-form @submit="onSubmit" class="q-gutter-md">
          <div class="body-medium text-medium-grey">
            <div class="mb-2">Title</div>
            <q-input
              outlined
              dense
              v-model="form.title"
              :error="v$.title.$error"
              no-error-icon
              hide-bottom-space
              placeholder="e.g. Take coffee break"
              error-message="Field required"
              :dark="store.colorMode.preference === 'dark'"
              @input="v$.title.$touch"
              @blur="v$.title.$touch"
            />
          </div>
          <div class="body-medium text-medium-grey">
            <div class="mb-2">Description</div>
            <q-input
              outlined
              dense
              type="textarea"
              v-model="form.description"
              hide-bottom-space
              placeholder="e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little."
              :dark="store.colorMode.preference === 'dark'"
            />
          </div>

          <div class="body-medium text-medium-grey">
            <div class="mb-2">Subtasks</div>
            <BaseSubchild
              v-for="subtask in form.subtasks"
              :key="subtask.id"
              :child="subtask"
              @updateChild="updateSubtask"
              @removeChild="removeSubtask"
            />
            <q-btn
              unelevated
              label="+ Add New Subtask"
              no-caps
              rounded
              class="w-full bg-transparent-purple"
              @click="addSubtask"
            />
          </div>

          <div class="body-medium text-medium-grey mt-6">
            <div class="mb-2">Status</div>
            <q-select
              outlined
              dense
              v-model="form.columnId"
              :dark="store.colorMode.preference === 'dark'"
              :options="store.activeMenu?.columns"
              option-value="id"
              option-label="name"
              emit-value
              map-options
            />
          </div>

          <div>
            <q-btn
              unelevated
              :label="form.id === undefined ? 'Create Task' : 'Save Changes'"
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
