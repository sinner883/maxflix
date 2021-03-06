import React from 'react';
import Stack from './Stack.js';


import getMovie from './GetMovie.js';

export default function Movies() {
    return (
        <div>
            <div className="app__layout">
             {
                 getMovie().map(stack =>(
                     <Stack 
                     key={stack.id}
                     id={stack.id} 
                     name={stack.name} 
                     cover={stack.cover}/>
                  ))
             }
            </div>
        </div>
    );
}

