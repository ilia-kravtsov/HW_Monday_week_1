import {combineReducers, legacy_createStore} from "redux";

const initState = {
    themeId: 1,
}

type actionType = {
    type: 'SET_THEME_ID',
    id: number
}

export type stateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: actionType): stateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): actionType => ({ type: 'SET_THEME_ID', id }) // fix any



