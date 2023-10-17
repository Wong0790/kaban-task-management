import { LazyQSlideItem } from "#build/components";
import { Board, Task } from "@/types/app";

export const useAppStore = defineStore("app", () => {
  const colorMode = useColorMode();
  const theme = ref<string>(colorMode.preference);

  const boardDialog = ref<boolean>(false);
  const editBoardDialog = ref<boolean>(false);

  const taskDialog = ref<boolean>(false);
  const editTaskDialog = ref<boolean>(false);

  const boards = ref<Board[]>([]);

  const activeMenu = computed<Board | undefined>(() =>
    boards.value.find((board) => board.active)
  );

  function onClick() {
    return (colorMode.preference = theme.value === "light" ? "light" : "dark");
  }

  function addBoard(item: Board) {
    item.id = boards.value.length + 1;
    item.columns = item.columns.filter((column) => column.name !== "");
    boards.value.push(item);
  }

  function updateBoard(item: Board) {
    const index = boards.value.findIndex((board) => board.id === item.id);
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
      item.id = boards.value[index].tasks.length + 1;
      boards.value[index].tasks.push(item);
    }
  }

  return {
    colorMode,
    theme,
    boardDialog,
    editBoardDialog,
    taskDialog,
    editTaskDialog,
    boards,
    activeMenu,
    onClick,
    addBoard,
    updateBoard,
    removeBoard,
    addTask,
  };
});
