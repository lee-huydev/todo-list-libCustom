import storage from "./until/storage.js"
const { get, set } = storage
const initState ={
    todos: get('todos'),
    filter: {type: 'all'},
    filters: {
        all: todo => todo,
        active: todo => !todo.completed,
        completed: todo => todo.completed
    }
}
const actions = {
    add({todos}, args) {
        todos.push({title: args, completed: false, edit: false})
        set('todos', todos)
    },
    switchChecked({todos}, index) {
        todos[index].completed = !todos[index].completed
        set('todos', todos)
    },
    checkedAll({todos}, completed) {
        todos.forEach(elem => elem.completed = completed)
        set('todos', todos)
    },
    del({todos}, index){
        todos.splice(index,1)
        set('todos', todos)
    },
    filter({ filter }, type){
        filter.type = type
    },
    clear({todos}){
        todos.forEach(todo => todo.completed = false)
        set('todos', todos)
    },
    edit({todos}, index) {
        todos[index].edit = true
        set('todos', todos)
    },
    editValue({todos}, [index, value]){
        todos[index].title = value
        todos[index].edit = false
        set('todos', todos)
    }
}
export default function reducer(state = initState, action, args) {
    actions[action] && actions[action](state, args)
    return state
}