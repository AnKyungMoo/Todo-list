import React, { Component } from 'react'
import { List } from 'immutable'
import './TodoItem.css'

class TodoItem extends Component {

    static defaultProps = {
        todo: List(),
        input: ''
    }

    render() {
        const id = this.props.id
        const text = this.props.text
        const checked = this.props.checked
        const onRemove = this.props.onRemove

        return(
            <div>
                <ul
                    style={{
                        textDecoration: checked ? 'line-through' : 'none'
                    }} 
                    onClick={() => this.props.onToggle(id)}>
                    { text }
                </ul>
                <button className='insertButton' onClick={() => onRemove(id)}>delete</button>
            </div>
        )
    }
}

export default TodoItem