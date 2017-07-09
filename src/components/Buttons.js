import React from 'react';

export const Buttons = props => {
    return <div className="buttons">
        <button className="button" onClick={props.advanceStep}>Advance</button>
        <button className="button" onClick={props.randomizeBoard}>Random</button>
        <button className="button" onClick={props.clearBoard}>Clear</button>
    </div>
};