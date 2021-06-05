//@ts-check
import RBush from 'rbush';

/**
 * @template T
 */
export class SpatialIndex {

    /**
     * @constructor
     */
    constructor() {

        //TODO make private
        //TODO simplify for points?

        /** @type {RBush} */
        this.tree = new RBush();
    }

    /**
     * @param {number} xmin
     * @param {number} ymin
     * @param {number} xmax
     * @param {number} ymax
     * @return {Array.<T>}
     */
    get(xmin, ymin, xmax, ymax) {

        let result = this.tree.search({
            minX: xmin,
            minY: ymin,
            maxX: xmax,
            maxY: ymax
        });
        result = result.map(v => v.obj);
        return result
    }


    //TODO bulk add

    /**
     * @param {T} obj
     * @param {number} x
     * @param {number} y
     */
    add(obj, x, y) {

        const item = {
            minX: x,
            minY: y,
            maxX: x,
            maxY: y,
            obj: obj
        };
        this.tree.insert(item);
    }


    //TODO bulk remove

    /**
     * @param {T} obj
     * @param {number} x
     * @param {number} y
     */
    remove(obj, x, y, msg = true) {

        const item = {
            minX: x,
            minY: y,
            maxX: x,
            maxY: y,
            obj: obj
        };
        this.tree.remove(item, (a, b) => {
            return a.obj === b.obj;
        });

    }


    //TODO keep that?

    /**
    * @param {T} obj
    * @param {number} xIni
    * @param {number} yIni
    * @param {number} xFin
    * @param {number} yFin
    */
    move(obj, xIni, yIni, xFin, yFin) {
        this.remove(obj, xIni, yIni)
        this.add(obj, xFin, yFin)
    }

}
