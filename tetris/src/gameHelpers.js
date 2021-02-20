export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// the stage is a nested Array- multi dimensional that represents rows and collumns

export const createStage = () =>
    Array.from(Array(STAGE_HEIGHT), ()=>         // this will create an array from the array set by width and height grid, and create another new array for cells.
        new Array(STAGE_WIDTH).fill([0, 'clear'])    //set basic collision detection, no tetromino has collided with any objects in a cell, 
    )