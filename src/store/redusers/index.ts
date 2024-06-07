import { combineReducers } from "redux"
import languageReducer from "./language"
import themeReducer from "./theme"

export default combineReducers({
  language: languageReducer,
  theme: themeReducer
})