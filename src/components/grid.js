export const setGrid = (height, width, random = true) => {
    let grid = [];
    for (let x = 0; x < height; x++) {
        let row = [];
        for (let y = 0; y < width; y++) {
            let status;
            if(random) {
                if (Math.random() > 0.75)
                    status = 'new';
                else
                    status = 'died';
            }
            row.push({
                X: x,
                Y: y,
                status
            });
        }
        grid.push(row);
    }
    return grid;
};