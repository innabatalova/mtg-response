import { legacy_createStore as createStore } from 'redux'
import languageReducer from './redusers/languageReducer'

interface IInitialState {
  language: "ru" | "en"
}

interface IAction {
  type: string,
  language: "ru" | "en"
}

const store = createStore<IInitialState, IAction>(languageReducer)

export default store