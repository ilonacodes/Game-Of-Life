import {setGrid} from "./grid";

const gridHeight = 20;
const gridWidth = 20;

const initGrid = setGrid(gridHeight, gridWidth);

export const boardReducer = (state = initGrid, action) => {

    const newState = Object.assign([], state);

    switch (action.type) {

        case 'TOGGLE_CELL': {
            const cell = newState[action.X][action.Y];
            if (cell.status === 'alive') cell.status = 'dead';
            else if (cell.status === 'dead') cell.status = 'alive';
            break;
        }

        default:
            return state;
    }

    return newState;
};