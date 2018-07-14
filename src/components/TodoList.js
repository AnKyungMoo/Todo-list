import React, { Component } from 'react'
import { Map, List } from 'immutable'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

class TodoList extends Component {
    
    static defaultProps = {
        todos: List([
            Map({
                id: 0,
                text: 'default0',
                checked: false
            }),
            Map({
                id: 1,
                text: 'default1',
                checked: true
            })
        ]),
        input: ''
    }

    render()
    {
        const { todos, input, onInsert, onToggle, onRemove, onChange } = this.props
        const list = todos.map(
            todo => {
                const { id, text, checked } = todo.toJS()
                return (
                    <TodoItem
                        id={ id }
                        text={ text }
                        checked={ checked }
                        onToggle={ onToggle }
                        onRemove={ onRemove }
                        key={ id }
                    />
                )
            }
        )

        return (
            <div>
                <TodoForm 
                    value={ input } 
                    onInsert={ onInsert }
                    onChange={ onChange }
                />
                { list }
            </div>
        )
    }

}

export default TodoList