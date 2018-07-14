import React, { Component } from 'react'
import { Map, List } from 'immutable'
import './Todo.css'

class Todo extends Component {
    
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
        return(
            <form className='template'>
                <div className='title'>Todo-List</div>
                <input />
                <button >+</button>
                <div>{this.props.todos}</div>
            </form>
        )
    }
}


export default Todo