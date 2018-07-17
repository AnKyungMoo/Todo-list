import React, { Component } from 'react'
import './TodoForm.css'

class TodoForm extends Component {
    
    handleEnter = (e) => {
        if(e.keyCode === 13) {
            this.props.onInsert();
        }
    }

    render() {
        const { value, onInsert, onChange } = this.props

        return(
            <div className='title'>
                <div>Todo-List</div>
                <input value={ value } onChange={ onChange } onKeyDown={ this.handleEnter }/>
                <button onClick={ onInsert }>+</button>
            </div>
        )
    }
}


export default TodoForm