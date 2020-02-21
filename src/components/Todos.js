import React, {Component} from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todos extends Component {


  render(){
  //for each 'todo' in todos 
  return this.props.todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} markComplete= 
    {this.props.markComplete} delTodo={this.props.delTodo}/>
  ));
  }
}

//defining the data type of the properties being passed in to this class from App.js render()
//The todos tag in App.js has these three porps in it
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default Todos;