//@ts-check
import { Road } from "./Road"
import { Map } from "./Map"
import jsts from 'jsts';
import { GeoCanvas } from "../base/GeoCanvas";

export class RoadNetwork {

    /**
     * @param {Map} map 
     */
    constructor(map) {

        /** @type {Map} */
        this.map = map

        /** @type {Array.<Road>} */
        this.sections = []


        //add test road
        //https://github.com/bjornharrtell/jsts
        //http://bjornharrtell.github.io/jsts/
        var reader = new jsts.io.WKTReader()
        var g = reader.read('LINESTRING (30 10, 10 300, 400 40)')
        this.sections.push(new Road(g, 7));
    }

    buildRandom() {

        const w = this.map.w
        const h = this.map.h

        const r = 2 * w + 2 * h * Math.random();

    }

    /**
     * Display
     * @param {GeoCanvas} cp 
     */
    display(cp) {
        for (let r of this.sections)
            r.display(cp, "black", r.width);
        for (let r of this.sections)
            r.display(cp, "yellow", r.width - 3);
    }
}
