export interface IProps {
  theme: {
    theme: 'light' | 'dark'
  },
  themeLight: () => void,
  themeDark: () => void
}

export interface IToogleTheme {
  type: "themeLight" | "themeDark",
  theme: 'light' | 'dark',
}