import React, { Component } from 'react';
import shortid from 'shortid';

export class TodoForm extends Component {

    state = {
        text: ''
    }

    handleChange = event => {
        this.setState({
            // looks for the the name value in object of state
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        // Prevent the page from reloading
        event.preventDefault()
        this.props.addTodo({
            id: shortid.generate(),
            text: this.state.text,
            compete: false
        })

    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input name="text" value={this.state.text} onChange={this.handleChange} placeholder="todo..." />
                <button onSubmit={this.handleSubmit}>Add Todo</button>
            </form>
        )
    }

}

export default TodoForm