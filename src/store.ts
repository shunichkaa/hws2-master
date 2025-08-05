import {combineReducers, createStore} from 'redux'
import {themeReducer} from "./s2-homeworks/hw12/bll/themeReducer";

const rootReducer = combineReducers({
    theme: themeReducer,
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>