import React from 'react';

import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    // have to make key so react can keep track of props 
                    return (
                        <Card 
                            key={robots[i].id}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email} 
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;