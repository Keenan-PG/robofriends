import React from 'react';

// custom imports
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import { robots } from './robots';

const App = () => {
    return (
        <div className='tc'>
            <h1>Shit Robotfriends project</h1>
            <SearchBox />
            <CardList robots={robots}/>
        </div>
        
    );
}

export default App;