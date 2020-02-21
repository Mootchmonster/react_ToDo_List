import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from "./components/pages/About";
//import uuid from 'uuid';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    //get request which returns a promise (res) with a data property attached
    //adding a query to the end of the get '?_limit=10' will limit the size of the return
    axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({todos: res.data}))
  }

//Toggle Todo
//the id variable being passed in here is bound in the onChanged event of the TodoItem
//then to the Todos class then to here
  markComplete = (id) => {
    //looking at state as an object, we want to change something inside of todos, then 
    //match the id of the current todo we're iterating through. if it's equal then
    //update the value of the completed variable to be the opposite of its current completed value
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  //Delete Todo 
  //http delete request with promise returned and handled with then()
  delTodo = (id) => {
    axios.delete('http://jsonplaceholder.typicode.com/todos/${id}')
      .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}))
  }
  //the '...' copies everything inside of the todos in this case and then we filter for each todo
  //with the lamda
  // delTodo = (id) => {
  //   this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  // }

  //Add Todo
  //the post gives a promise back after the post
  addTodo = (title) => {
    axios.post('http://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    }).then(res =>this.setState({todos: [...this.state.todos, res.data]}));
    // const newTodo = {
    //   id: uuid.v4(),
    //   title,
    //   completed: false
    // }
    //take what we have currently and add the newTodo
    //this.setState({todos: [...this.state.todos, newTodo]});
  }
//use 'exact' property in the route to view only what is in that route path 
  render(){
    return (
      <Router>
      <div className="App">
        <div className="container">
        <Header/>
        <Route exact path="/" render={props => (
          <React.Fragment>
            <AddTodo addTodo={this.addTodo}/>
            <Todos todos={this.state.todos} markComplete={this.markComplete}
            delTodo={this.delTodo}/>
          </React.Fragment>
        )}/>
        <Route path="/about" component={About} />
        </div>
      </div>
      </Router>
    );
  }

}

export default App;
