import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component{
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }

    // //this.props will be undefined without '= (e) =>' 
    // //otherwise you must use this.marComplete.bind() to make this.props accessable
    // markComplete = (e) => {

    // }

    render(){
        //destructuring props
        const { id, title } = this.props.todo;
        //binding the id of the todo item to
        return(
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind
                        (this, id)} /> {' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

//borderRadius 50% makes a round button
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

//defining the data type of the properties being passed in to this class from Todos.js render()
//The todo tag in Todos.js has these three props in it
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
  }

export default TodoItem