
const ADD_TODO = 'ADD_TODO'
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
const TOGGLE_TODO = 'TOGGLE_TODO'

let idx = 0;

const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: idx++,
        text
    }
}

const setFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

export { toggleTodo, addTodo, setFilter }