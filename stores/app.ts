import { Board, Task, Column, Subtask } from "@/types/app";

export const useAppStore = defineStore("app", () => {
  const isDark = useDark({
    selector: "body",
    attribute: "color-scheme",
    valueDark: "dark",
    valueLight: "light",
  });
  const toggleDark = useToggle(isDark);
  const colorMode = useColorMode();
  const theme = ref(isDark.value ? "dark" : "light");

  const boardDialog = ref<boolean>(false);
  const editBoardDialog = ref<boolean>(false);
  const deleteBoard = ref<boolean>(false);

  const taskDialog = ref<boolean>(false);
  const editTaskDialog = ref<boolean>(false);
  const viewTaskDialog = ref<boolean>(false);
  const selectedTask = ref<Task | undefined>(undefined);
  const deleteTask = ref<boolean>(false);

  const boards = ref<Board[]>([]);

  const activeMenu = computed<Board | undefined>(() =>
    boards.value.find((board) => board.active)
  );

  const changeColorMode = () => {
    colorMode.preference = isDark.value ? "dark" : "light";
    theme.value = colorMode.preference;
  };

  function addBoard(item: Board) {
    item.id = boards.value.length + 1;
    item.columns = item.columns.filter((column) => column.name !== "");
    boards.value.push(item);
  }

  function updateBoard(item: Board) {
    const index = boards.value.findIndex(
      (board: Board) => board.id === item.id
    );
    item.columns = item.columns.filter((column) => column.name !== "");
    boards.value[index] = item;
  }

  function removeBoard() {
    const index = boards.value.findIndex(
      (board) => board.id === activeMenu.value?.id
    );
    boards.value.splice(index, 1);
  }

  function addTask(item: Task) {
    const index = boards.value.findIndex(
      (x: Board) => x.id === activeMenu.value?.id
    );
    if (index !== -1) {
      item.subtasks = item.subtasks.filter(
        (subtask: Subtask) => subtask.name !== ""
      );
      item.id = boards.value[index].tasks.length + 1;
      boards.value[index].tasks.push(item);
    }
  }

  function updateTask(item: Task) {
    const boardIndex = boards.value.findIndex(
      (board: Board) => board.id === item.boardId
    );
    const taskIndex = boards.value[boardIndex].tasks.findIndex(
      (task: Task) => task.id === item.id
    );
    item.subtasks = item.subtasks.filter(
      (subtask: Subtask) => subtask.name !== ""
    );
    boards.value[boardIndex].tasks[taskIndex] = item;
  }

  function removeTask() {
    const boardIndex = boards.value.findIndex(
      (board: Board) => board.id === selectedTask.value?.boardId
    );
    const taskIndex = boards.value[boardIndex].tasks.findIndex(
      (task: Task) => task.id === selectedTask.value?.id
    );
    boards.value[boardIndex].tasks.splice(taskIndex, 1);
  }

  return {
    isDark,
    toggleDark,
    theme,
    colorMode,
    boardDialog,
    editBoardDialog,
    deleteBoard,
    taskDialog,
    editTaskDialog,
    viewTaskDialog,
    selectedTask,
    deleteTask,
    boards,
    activeMenu,
    changeColorMode,
    addBoard,
    updateBoard,
    removeBoard,
    addTask,
    updateTask,
    removeTask,
  };
});
