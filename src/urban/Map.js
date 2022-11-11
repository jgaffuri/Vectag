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
        //TODO low local congestion AND go to high density (with good access to other stuff)

        //make random building
        const makeRandomBuilding = () => {
            const x = this.w * Math.random();
            const y = this.h * Math.random();
            const area = 40 + 200 * Math.random()
            return new Building(this, x, y, area)
        }

        //TODO should not overlap with other entities (roads, building)

        //make spatial index of buildings
        /** @type {SpatialIndex.<Building>} */
        const sindex = new SpatialIndex();
        sindex.load(this.bs)

        /** @type {Building} */
        let bu = makeRandomBuilding();
        while (this.checkCollision(bu, sindex)) {
            bu = makeRandomBuilding();
        }

        //add building
        this.bs.push(bu);

    }

    checkCollision(bu, sindex) {

        //get buildings around using spatial index
        const r = bu.r();
        /** @type {Array.<Building>} */
        const ss = sindex.get(bu.x - r, bu.y - r, bu.x + r, bu.y + r);

        for (let b of ss) {
            if (b == bu) continue;
            if (bu.overlap(b)) return true
        }
        return false;
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