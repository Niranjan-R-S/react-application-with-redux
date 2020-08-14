import React, { Component } from 'react'

class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state={
            title: ''
        }
    }

    handleChange = (event) =>{
        this.setState({
            title: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(event.target["title"].value);
        this.setState({
            title: ''
        })
    }

    render() {
        return (
            <div>
                <h1>Add Todo</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                            name="title"
                            placeholder="Add todo..."
                            onChange={this.handleChange}
                            value={this.state.title}
                    />
                    <input type="submit" value="Submit"/> 
                </form>
            </div>
        )
    }
}

export default AddTodo