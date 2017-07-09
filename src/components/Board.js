import React from "react";

import {Cell} from "./Cell";
import {Buttons} from "./Buttons";

export const Board = props => {

    return (
        <div>
            <Buttons advanceStep={props.advanceStep}
                     randomizeBoard={props.randomizeBoard}
                     clearBoard={props.clearBoard} />
            <table>
                <tbody>
                {props.board.grid.map((row, x) => (
                    <tr key={x}>{row.map((cell, y) => (
                        <Cell key={y}
                              id={props.id}
                              status={props.board.grid[x][y].status}
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

