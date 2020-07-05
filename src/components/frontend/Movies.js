import React from 'react';
import Stack from './Stack.js';
import matrix1 from './img/matrix1.jpg';
import aot from './img/aot.jpg';
import hostiles from './img/hostiles.jpg';
import terminator from './img/terminator.jpg';
import rickandmorty from './img/rickandmorty.jpg';
import peaky from './img/peaky.png';

export default function Movies() {
    return (
        <div>
            <div className="app__layout">
                <Stack name="The Matrix" cover={matrix1} />
                <Stack name="Attack on Titans" cover={aot} />
                <Stack name="Hostiles" cover={hostiles} duration={'130 min'} />
            </div>
            <div className="app__layout">
                <Stack name="Rick and Morty" cover={rickandmorty} duration={'20 min'} />
                <Stack name="The Terminator" cover={terminator} duration={'90 min'} />
                <Stack name="Peaky Blinders" cover={peaky} />
            </div>
            <div className="app__layout">
                <Stack name="Rick and Morty" cover={rickandmorty} duration={'20 min'} />
                <Stack name="The Terminator" cover={terminator} duration={'90 min'} />
                <Stack name="Peaky Blinders" cover={peaky} />
            </div>
        </div>
    );
}