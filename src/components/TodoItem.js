import React, { Component } from 'react'
import { Map, List } from 'immutable'

class TodoItem extends Component {

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

    render() {
        const { id, text, checked } = this.props.todo.toJS()

        return(
            <div>
                { id }
                { text }
                { checked }
                <button>delete</button>
            </div>
        )
    }
}

export default TodoItem