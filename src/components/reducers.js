import {setGrid, advanceStep} from "./grid";

const gridHeight = 20;
const gridWidth = 20;

const initGrid = {
    grid: setGrid(gridHeight, gridWidth)
};

export const boardReducer = (state = initGrid, action) => {

    const newState = Object.assign({}, state);

    switch (action.type) {

        case 'TOGGLE_CELL': {
            const cell = newState.grid[action.x][action.y];
            if (cell.status === 'alive') cell.status = 'dead';
            else if (cell.status === 'dead') cell.status = 'alive';
            break;
        }

        case 'ADVANCE_STEP':
            newState.grid = advanceStep(state.grid, gridHeight, gridWidth);
            break;

        case 'RANDOMIZE_BOARD':
            newState.grid = setGrid(gridHeight, gridWidth);
            break;

        case 'CLEAR_BOARD':
            newState.grid = setGrid(gridHeight, gridWidth, false);
            break;

        default:
            return state;
    }

    return newState;
};