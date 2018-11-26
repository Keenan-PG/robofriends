import React, {Component} from 'react';

// custom imports
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import { robots } from './robots';

// state is an object which describes our application.
// props are simply bi products of state 
// parent feeds state into child component, at that point it becomes property of child 

class App extends Component {
    constructor() {
        super() // have to call super class - constructor of Component
        this.state = { // making constructor and assigning props to state
            robots: robots,
            searchField: ''
        }
    }

    // search change function
    onSearchChange(event) {
        console.log(event);
    }

    render() {
        return (
            <div className='tc'>
                <h1>Robotfriends project</h1>
                {/* assigning above function to be searchChange within the app */}
                <SearchBox searchChange={this.onSearchChange}/> 
                {/* accessing robots from state */}
                <CardList robots={this.state.robots}/> 
            </div>
        );
    }
}

export default App;