import { DefaultTheme } from "styled-components";

const LightTheme: DefaultTheme = {
  label: "light",
  backgroundColor: "#e6e6e6",
  fontColor: "#111931",
};

const DarkTheme: DefaultTheme = {
  label: "dark",
  backgroundColor: "#111931",
  fontColor: "#e6e6e6",
};

const themes = new Map<string, DefaultTheme>([
  ["light", LightTheme],
  ["dark", DarkTheme],
]);

export const getTheme = (name: string): DefaultTheme => themes.get(name) ?? DarkTheme;

export default themes;
