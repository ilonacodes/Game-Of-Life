import React from "react";

export const Cell = props => {
    return <td className={props.status == 'new' ? 'new' : ''}></td>
};