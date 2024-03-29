//@ts-check
import { SpatialIndex } from '../base/SpatialIndex';
import { Building } from './Building';
import { RoadNetwork } from './RoadNetwork';

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
        /** @type {SpatialIndex.<Building>} */
        this.buIndex = new SpatialIndex();

        /** @type {RoadNetwork} */
        this.rn = new RoadNetwork(this);

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
            return new Building(x, y, area)
        }

        //TODO should not overlap with other entities (roads, building)

        /** @type {number} */
        const sDistance = 100;
        /** @type {Building} */
        let bu = makeRandomBuilding();
        while (bu.checkCollision(this.buIndex, sDistance)) {
            bu = makeRandomBuilding();
        }

        //add building
        this.bs.push(bu);
        this.buIndex.load([bu])
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
