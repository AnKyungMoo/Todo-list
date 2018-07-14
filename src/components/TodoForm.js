import React, { Component } from 'react'
import './TodoForm.css'

class TodoForm extends Component {
    
    render() {
        const { input, onInsert, onChange } = this.props

        return(
            <div>
                <div className='title'>Todo-List</div>
                <input value={ input } onChange={ onChange }/>
                <button onClick={onInsert}>+</button>
            </div>
        )
    }
}


export default TodoForm