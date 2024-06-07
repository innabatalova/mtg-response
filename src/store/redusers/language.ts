import { IInitialStateLanguage, IActionLanguage } from './interfaces'

const initialState: IInitialStateLanguage = {
  language: 'ru'
}

const languageReducer = (state = initialState, action: IActionLanguage): IInitialStateLanguage => {
  switch (action.type) {
    case "toogleRu":
      return { ...state, language: state.language = 'ru' }
    case "toogleEn":
      return { ...state, language: state.language = 'en' }
    default:
      return state
  }
};

export default languageReducer