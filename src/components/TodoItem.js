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
            <div className='item'>
                <div 
                    style={{
                        textDecoration: checked ? 'line-through' : 'none'
                    }} >
                    <input type='checkbox' checked={ checked } onChange={() => this.props.onToggle(id)} />
                    { text }
                    <button className='removeButton' onClick={() => onRemove(id)}>delete</button>
                </div>
            </div>
        )
    }
}

export default TodoItem