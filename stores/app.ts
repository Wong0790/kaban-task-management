import { Board } from "@/types/app";

export const useAppStore = defineStore("app", () => {
  const colorMode = useColorMode();
  const theme = ref<string>(colorMode.preference);
  const newBoard = ref<boolean>(false);

  const boards = ref<Board[]>([
    {
      id: 0,
      active: false,
      title: "+ Create New Board",
      columns: [],
    },
  ]);

  function onClick() {
    return (colorMode.preference = theme.value === "light" ? "light" : "dark");
  }

  function addBoard(item: Board) {
    boards.value.unshift(item);
  }

  return {
    colorMode,
    theme,
    newBoard,
    boards,
    onClick,
    addBoard,
  };
});
