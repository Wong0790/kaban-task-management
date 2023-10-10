export const useAppStore = defineStore("app", () => {
  const colorMode = useColorMode();
  const theme = ref(colorMode.preference);

  function onClick() {
    return (colorMode.preference = theme.value === "light" ? "light" : "dark");
  }

  return { colorMode, theme, onClick };
});
