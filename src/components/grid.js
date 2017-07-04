export const setGrid = (height, width) => {
    let grid = [];
    for (let x = 0; x < height; x++) {
        let row = [];
        for (let y = 0; y < width; y++) {
            row.push({
                X: x,
                Y: y
            });
        }
        grid.push(row);
    }
    return grid;
};