import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoList from './../components/TodoList'
import { bindActionCreators } from 'redux';
import * as todoActions from './../store/modules/todoModule';

class TodoContainer extends Component {
    
    handleChange = (e) => {
        const { TodoActions } = this.props
        TodoActions.changeInput(e.target.value)
    }

    handleInsert = () => {
        const { input, TodoActions } = this.props
        TodoActions.insert(input)
        TodoActions.changeInput('') 
    }

    handleToggle = (id) => {
        const { TodoActions } = this.props
        TodoActions.toggle(id)
    }

    handleRemove = (id) => {
        const { TodoActions } = this.props
        TodoActions.remove(id)
    }

    render() {
        const { handleChange, handleInsert, handleToggle, handleRemove } = this
        const { input, todos } = this.props

        return (
            <TodoList 
                input={ input }
                todos={ todos }
                onChange={ handleChange }
                onInsert={ handleInsert }
                onToggle={ handleToggle }
                onRemove={ handleRemove }
            />
        )
    }
}

export default connect(
    ({ todo }) => ({
        input: todo.get('input'),
        todos: todo.get('todos')
    }),
    (dispatch) => ({
        TodoActions: bindActionCreators(todoActions, dispatch)
    })
)(TodoContainer)