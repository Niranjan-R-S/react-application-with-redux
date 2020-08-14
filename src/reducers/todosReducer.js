import { FETCH_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../actions/types'

const initialState = {
    todos: [],
    todo: {},
    id: 0,
    updatedTodo: {},
    actionType: ''
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_TODOS:
            return {
                ...state,
                todos: action.payload,
                actionType: FETCH_TODOS
            }
        case ADD_TODO:
            return {
                ...state,
                todo: action.payload,
                actionType: ADD_TODO
            }
        case DELETE_TODO:
            return {
                ...state,
                id: action.payload,
                actionType: DELETE_TODO
            }
        case UPDATE_TODO:
            return {
                ...state,
                updatedTodo: action.payload,
                actionType: UPDATE_TODO
            }
        default:
            return state;
    }
}