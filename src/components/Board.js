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
                        <Cell key={y}
                              status={props.board[x][y].status}
                              handleClick={() => props.toggleCell(x, y)}
                        />
                    ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

