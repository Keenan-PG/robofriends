// import React, {Component} from 'react';
import React from 'react';

const Card = ({name, email, id}) => { // accepting properties defined in index (name, email, id) - {destructuring} props

    return(
        <div className="bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
            
            {/* using template string to insert id to robohash link */}
            <img alt="robot" src={`https://robohash.org/${id}?200x200`} /> 

            <div>
                {/* inserting passed property names and emails */}
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;