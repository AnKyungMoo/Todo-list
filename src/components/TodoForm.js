import React, { Component } from 'react'
import './TodoForm.css'

class TodoForm extends Component {
    
    render() {
        const { value, onInsert, onChange } = this.props

        return(
            <div className='title'>
                <div>Todo-List</div>
                <input value={ value } onChange={ onChange }/>
                <button onClick={ onInsert }>+</button>
            </div>
        )
    }
}


export default TodoForm