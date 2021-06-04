//@ts-check

/**
 * 
 */
export class Cell {

    /**
     * @param {number} x 
     * @param {number} y 
     * @param {number} nb 
     */
    constructor(x, y, nb=0) {
        /** @type {number} */
        this.x = x
        /** @type {number} */
        this.y = y
        /** @type {number} */
        this.nb = nb
    }

}
