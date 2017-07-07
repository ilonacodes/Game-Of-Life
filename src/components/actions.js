export const toggleCell = (X, Y) => {
    return {
        type: 'TOGGLE_CELL',
        X,
        Y
    }
};