export const toggleCell = (x, y) => {
    return {
        type: 'TOGGLE_CELL',
        x,
        y
    }
};

export const advanceStep = () => {
    return {
        type: 'ADVANCE_STEP',
    }
};

export const randomizeBoard = () => {
    return {
        type: 'RANDOMIZE_BOARD',
    }
};

export const clearBoard = () => {
    return {
        type: 'CLEAR_BOARD'
    }
};