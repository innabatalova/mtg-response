export interface IInitialState {
  language: "ru" | "en",
  theme: 'light' | 'dark'
}

export interface IAction {
  type: string,
  language: "ru" | "en"
}