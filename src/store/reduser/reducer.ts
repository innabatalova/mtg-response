import { IInitialState, IAction } from './interfaces'

const initialState: IInitialState = {
  language: 'ru',
  theme: "light"
}

const allReducer = (state = initialState, action: IAction): IInitialState => {
  switch (action.type) {
    case "toogleRu":
      return { ...state, language: state.language = 'ru' }
    case "toogleEn":
      return { ...state, language: state.language = 'en' }
    case "themeLight":
      return { ...state, theme: state.theme = 'light' }
    case "themeDark":
      return { ...state, theme: state.theme = 'dark' }
    default:
      return state
  }
};

export default allReducer