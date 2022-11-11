//@ts-check
import { removeFromArray } from '../base/lib';
import { SpatialIndex } from '../base/SpatialIndex';
import { Building } from './Building';

export class Map {

    /**
     * @constructor
     * @param {number} w
     * @param {number} h
     */
    constructor(w, h) {

        /** @type {number} */
        this.w = w;
        /** @type {number} */
        this.h = h;

        /** @type {Array.<Building>} */
        this.bs = [];
    }

    /** */
    addBuilding() {

        //compute candidate location, size and type for next building
        //TODO should not overlap with other entities (roads, building)
        //TODO low local congestion AND go to high density (with good access to other stuff)
        const x = this.w * Math.random();
        const y = this.h * Math.random();
        const area = 40 + 200 * Math.random()

        //add building
        this.bs.push(new Building(this, x, y, area));

    }

    /**
     * @returns {this}
     */
    step() {

        //compute building need
        const buNeed = 10;

        //urbanise
        for (let i = 0; i < buNeed; i++) {
            this.addBuilding();
        }

        //extend road network
        //TODO

        return this;
    }

}
