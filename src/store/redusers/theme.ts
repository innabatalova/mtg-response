import { IInitialStateTheme, IActionTheme } from './interfaces'

const initialState: IInitialStateTheme = {
  theme: "light"
}

const themeReducer = (state = initialState, action: IActionTheme): IInitialStateTheme => {
  switch (action.type) {
    case "themeLight":
      return { ...state, theme: state.theme = 'light' }
    case "themeDark":
      return { ...state, theme: state.theme = 'dark' }
    default:
      return state
  }
};

export default themeReducer