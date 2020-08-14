import { FETCH_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO } from './types';

export const fetchTodos = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => res.json())
    .then(todos => dispatch({
        type: FETCH_TODOS,
        payload: todos
    }))
}

export const addTodo = (newTodo) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'Post',
            headers: {
                'content-type': 'application/json' 
            }, 
            body: JSON.stringify(newTodo)
    })
    .then(res => res.json())
    .then(todo => dispatch({
        type: ADD_TODO,
        payload: todo
    }))
}

export const deleteTodo = (id) => dispatch => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'Delete'
    })
    .then(res => res.json())
    .then(dispatch({
        type: DELETE_TODO,
        payload: id
    }))
}

export const updateTodo = (updatedTodo, todoId) => dispatch => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
        method: 'Put',
        headers: {
            'content-type': 'application/json'
        },
        updatedTodo
    })
    .then(res => res.json())
    .then(
        dispatch({
            type: UPDATE_TODO,
            payload: updatedTodo
        }))
}