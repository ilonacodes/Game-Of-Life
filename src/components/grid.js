export const setGrid = (height, width, random = true) => {
    let grid = [];
    for (let x = 0; x < height; x++) {
        let row = [];
        for (let y = 0; y < width; y++) {
            let status = 'dead';
            if (random && Math.random() > 0.75) {
                status = 'alive';
            }
            row.push({
                x,
                y,
                id: `${x}-${y}`,
                status
            });
        }
        grid.push(row);
    }
    return grid;
};

const getNeighbors = (grid, height, width, coordX, coordY) => {
    let cellCount = 0;
    for (let x = coordX - 1; x <= coordX + 1; x++) {
        for (let y = coordY - 1; y <= coordY + 1; y++) {
            if (x >= 0 && x < height && y >= 0 && y < width) {
                const neighbor = grid[x][y];
                if (!(x === coordX && y === coordY) && neighbor && neighbor.status === 'alive') {
                    cellCount++;
                }
            }
        }
    }
    return cellCount;
};

export const advanceStep = (grid, height, width) => {
    let newGrid = [];
    let status;
    for (let x = 0; x < height; x++) {
        let newRow = [];
        for (let y = 0; y < width; y++) {
            let currentStatus = grid[x][y].status;
            let cellCount = getNeighbors(grid, height, width, x, y);
            if (currentStatus === 'alive' && (cellCount === 2 || cellCount === 3)) {
                status = 'alive';
            } else if (currentStatus === 'dead' && cellCount === 3) {
                status = 'alive';
            } else {
                status = 'dead';
            }
            newRow.push({
                x,
                y,
                id: `${x}-${y}`,
                status
            })
        }
        newGrid.push(newRow);
    }
    return newGrid;
};