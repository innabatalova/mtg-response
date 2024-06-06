export interface IProps {
  language: 'ru' | 'en',
  theme: 'light' | 'dark',
  toogleRu: () => void,
  toogleEn: () => void
}

export interface IToogleLanguage {
  type: "toogleRu" | "toogleEn",
  language: 'ru' | 'en'
}