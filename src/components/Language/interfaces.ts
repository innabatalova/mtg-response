export interface IProps {
  language: {
    language: 'ru' | 'en',
  },
  theme: {
    theme: 'light' | 'dark'
  },
  toogleRu: () => void,
  toogleEn: () => void
}

export interface IToogleLanguage {
  type: "toogleRu" | "toogleEn",
  language: 'ru' | 'en'
}