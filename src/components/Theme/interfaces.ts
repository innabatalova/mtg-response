export interface IProps {
  theme: 'light' | 'dark',
  themeLight: () => void,
  themeDark: () => void
}

export interface IToogleTheme {
  type: "themeLight" | "themeDark",
  theme: 'light' | 'dark',
}