import React, { Component } from 'react'

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.todo.id,
            title: this.props.todo.title,
            completed: this.props.todo.completed
        }
    }

    deleteTodo = () => {
        this.props.deleteTodo(this.state.id)
    }

    updateTodo = () => {
        this.setState({
            completed: !this.state.completed
        })
    }

    render() {
        return (
            <div onDoubleClick={this.updateTodo}>
                <h3 className={this.state.completed? "todo-title" : "non-completed-todo"}>{this.state.title}
                <button className="btn" onClick={this.deleteTodo}>X</button>
                </h3>
            </div>
        )
    }
}

export default Todo