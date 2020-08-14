import React, { Component } from 'react'
import Todo from './Todo'
import AddTodo from './AddTodo';
class Todos extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => res.json())
        .then(data => this.setState({
            todos: data
        }))
    }

    addTodo = (title) => {
        const newTodo={
            title: title,
            completed: false
        }

        fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'Post',
            headers: {
                'content-type': 'application/json' 
            }, 
            body: JSON.stringify(newTodo)
        })
        .then(res => res.json())
        .then(data => {
            const todo = {
                id: this.state.todos.length + 1,
                title: data.title,
                completed: false
            }
            this.setState({
                todos: [...this.state.todos, todo]
            })
        })
        
        
    }

    deleteTodo = (id) => {
        let todoId = id
        if(id > 200){
            todoId = 201
        }
        fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
            method: 'Delete'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({
                todos: this.state.todos.filter(todo => todo.id !== id)
            })
        })
    }

    render() {
        const TodoItems = this.state.todos.map(todo =>
            <Todo key={todo.id} todo={todo} deleteTodo={this.deleteTodo}/>
        )
        return (
            <div>
                <AddTodo addTodo={this.addTodo}/>
                <div>
                    <h1>Todo Items</h1>
                    <legend>
                        <span>
                            <span className="completed">Completed</span>
                        </span>
                        <span>
                            <span className="not-completed">Not completed</span>
                        </span>
                    </legend>
                    <h2>Double click to complete a todo</h2>
                    <div>
                        {TodoItems}
                    </div>
                </div>
            </div>
        )
    }
}

export default Todos