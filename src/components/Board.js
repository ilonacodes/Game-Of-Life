import React from "react";

import {Cell} from "./Cell";

export const Board = props => {
    console.log(props);

    return (
        <div>
            <table>
                <tbody>
                {props.board.map((row, x) => (
                    <tr key={x}>{row.map((cell, y) => (
                        <Cell key={y} x={props.board[x][y].X} y={props.board[x][y].Y}/>
                    ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

