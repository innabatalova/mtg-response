export interface IInitialStateLanguage {
  language: "ru" | "en"
}

export interface IActionLanguage {
  type: string,
  language: "ru" | "en"
}

export interface IInitialStateTheme {
  theme: "light" | "dark"
}

export interface IActionTheme {
  type: string,
  theme: "light" | "dark"
}