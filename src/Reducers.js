import { ADD_TODO, EDIT_TODO, TOGGLE_TODO } from './Actions'
import _ from 'lodash'
//import {combineReducers} from 'redux'
const initialState = { todo: [] };

export const TodoApp = (state = initialState, action) => {
    let t = _.clone(state.todo);
    switch (action.type) {
        case ADD_TODO:
            return { todo: [...t, { id: action.id, text: action.text, completed: false }] }
        case TOGGLE_TODO:
            return {
                todo: t.map((todo, index) => {
                    if (index === action.id) {
                        return Object.assign({}, todo, { completed: !todo.completed })
                    }
                    return todo
                })
            }
        case EDIT_TODO:
            if (action.text === '') {
                t.splice(action.id, 1);
            } else {
                t[action.id].text = action.text;
            }
            return { todo: t }
        default:
            return state
    }
}