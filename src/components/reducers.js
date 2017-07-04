import {setGrid} from "./grid";

const gridHeight = 20;
const gridWidth = 20;

const initGrid = setGrid(gridHeight, gridWidth);

export const boardReducer = (state = initGrid, action) => {
    switch (action.type) {
        default:
            return state;
    }
};