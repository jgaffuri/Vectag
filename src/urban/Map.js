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

    addBuilding() {

        //compute candidate location for next building

        //add building

    }

    /**
     * @returns {this}
     */
    step() {

        //compute building need
        const buNeed = 10;

        //urbanise
        for(let i=0; i<buNeed; i++) {
            this.addBuilding();
        }

        return this;
    }

}
