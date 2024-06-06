interface IInitialState {
  language: "ru" | "en"
}

interface IAction {
  type: string,
  language: "ru" | "en"
}

const initialState: IInitialState = {
  language: 'ru'
}

const languageReducer = (state = initialState, action: IAction): IInitialState => {
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