import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component{
    state = {
        title:''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    //setting the titel of the state equal to the value
    //onChange = (e) => this.setState({title: e.target.value});
    //using e.target.name makes the onChange genertic so that it can be reused
    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        return(
            <form onSubmit={this.onSubmit} style={{display: 'flex'}} >
                <input type="text" 
                name="title" 
                style={{flex: '10', padding: '5px'}} 
                placeholder="Add Todo..."
                value={this.state.title} 
                onChange={this.onChange}/>
                <input 
                type="submit" 
                value="Submit" 
                className="btn" 
                style={{flex:'1'}}/>
            </form>
        )
    }
}

//defining the data type of the properties being passed in to this class from Todos.js render()
//The AddTodo tag in App.js has a single function 'addTodo' in it
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
  }

export default AddTodo