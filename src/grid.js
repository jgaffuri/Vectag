
/**
 * @constructor
 * @struct
 * @template T
 * @param {number} w
 * @param {number} h
 * @param {number} res
 */
export const Grid = function (w, h, res) {
    this.res = res;
    /** @type {number} */
    this.lengthX = Math.floor(w / res + 1);
    /** @type {number} */
    this.lengthY = Math.floor(h / res + 1);
    /** @type {Array.<Array.<Array.<T>>>} */
    this.cells = [];

    for (var i = 0; i < this.lengthX; i++) {
        /** @type {Array.<Array.<T>>} */
        this.cells[i] = [];
        for (var j = 0; j < this.lengthY; j++) {
            /** @type {Array.<T>} */
            this.cells[i][j] = [];
        }
    }
};

/**
 * @param {number} xmin
 * @param {number} ymin
 * @param {number} xmax
 * @param {number} ymax
 * @return {Array.<T>}
 */
Grid.prototype.get = function (xmin, ymin, xmax, ymax) {
    var as = [];
    for (var i = Math.floor(xmin / this.res); i < Math.floor(xmax / this.res + 1); i++) {
        if (i < 0 || i >= this.lengthX) continue;
        for (var j = Math.floor(ymin / this.res); j < Math.floor(ymax / this.res + 1); j++) {
            if (j < 0 || j >= this.lengthY) continue;
            as.push.apply(as, this.cells[i][j]);
        }
    }
    return as;
};

/**
 * @param {T} obj
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
Grid.prototype.add = function (obj, x, y) {
    return this.cells[Math.floor(x / this.res)][Math.floor(y / this.res)].push(obj);
};

/**
 * @param {T} obj
 * @param {number} x
 * @param {number} y
 */
Grid.prototype.remove = function (obj, x, y) {
    removeFromArray(this.cells[Math.floor(x / this.res)][Math.floor(y / this.res)], obj);
};
