import React from "react";

export const Cell = props => {
    return <td className={props.status == 'alive' ? 'alive' : ''}
               onClick={props.handleClick}></td>
};