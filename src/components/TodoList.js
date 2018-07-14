import React, { Component } from 'react'
import { Map, List } from 'immutable'
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
        ])
    }

    render()
    {
        const list = this.props.todos.map(
            todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                />
            )
        )

        return (
            <div>
                { list }
            </div>
        )
    }

}

export default TodoList