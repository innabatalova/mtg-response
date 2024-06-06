import { legacy_createStore as createStore } from 'redux'
import allReducer from './reduser/reducer'

import { IInitialState, IAction } from './interfaces'

const store = createStore<IInitialState, IAction>(allReducer)

export default store