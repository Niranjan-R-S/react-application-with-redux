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
        this.setState({
            todos: [{
                id: 1,
                title: "Todo one",
                completed: false
            }, {
                id: 2,
                title: "Todo two",
                completed: true
            },{
                id: 3,
                title: "Todo three",
                completed: false
            }]
        })
    }

    addTodo = (title) => {
        const newTodo={
            id: this.state.todos.length + 1,
            title: title,
            completed: false
        }

        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    deleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
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