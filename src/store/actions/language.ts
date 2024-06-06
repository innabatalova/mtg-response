interface IToogleLanguage {
  type: "toogleRu" | "toogleEn",
  language: 'ru' | 'en'
}

const toogleRu: IToogleLanguage = {
  type: "toogleRu",
  language: 'ru'
}

const toogleEn: IToogleLanguage = {
  type: "toogleEn",
  language: 'en'
}

export { toogleRu, toogleEn }