export declare type Theme = {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  };
};
export const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: "#2e7d32",
    background: "#111",
    card: "#222",
    text: "#fff",
    border: "#333",
    notification: "#2e7d32",
  },
};
export const LightTheme: Theme = {
  dark: false,
  colors: {
    primary: "#2e7d32",
    background: "#eee",
    card: "#fff",
    text: "#111",
    border: "#ccc",
    notification: "#2e7d32",
  },
};
