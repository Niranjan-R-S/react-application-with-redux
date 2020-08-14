import React, { Component } from 'react'
import Todo from './Todo'
import AddTodo from './AddTodo';
import { connect } from 'react-redux';
import { fetchTodos, addTodo, deleteTodo, updateTodo } from '../actions/todosAction';
import { FETCH_TODOS, ADD_TODO, DELETE_TODO } from '../actions/types';

class Todos extends Component {
    componentDidMount(){
        this.props.fetchTodos();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.actionType === ADD_TODO){
            const newTodo = {
                id: this.props.todos.length + 1,
                title: nextProps.todo.title,
                completed: false
            };

            this.props.todos.push(newTodo);
        }else if(nextProps.actionType === DELETE_TODO){
            let index;
            this.props.todos.forEach(element => {
                if(element.id === nextProps.id){
                    index = this.props.todos.indexOf(element)
                }
            });

            this.props.todos.splice(index, 1);
        }else{
            console.log(FETCH_TODOS);
        }
    }

    addTodo = (title) => {
        const newTodo={
            title: title,
            completed: false
        }

        this.props.addTodo(newTodo);
    }

    deleteTodo = (id) => {
        let todoId = id
        if(id > 200){
            todoId = 201
        }
        this.props.deleteTodo(todoId);
    }

    updateTodo = (updatedTodo, todoId) => {
        this.props.updateTodo(updatedTodo, todoId);
    }

    render() {
        const TodoItems = this.props.todos.map(todo =>
            <Todo key={todo.id} todo={todo} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo}/>
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

const mapStateToProps = state => ({
    todos: state.todos.todos,
    todo: state.todos.todo,
    id: state.todos.id,
    updatedTodo: state.todos.updatedTodo,
    actionType: state.todos.actionType
});

export default connect(mapStateToProps, { fetchTodos, addTodo, deleteTodo, updateTodo })(Todos);