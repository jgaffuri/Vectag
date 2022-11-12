//@ts-check
import { Road } from "./Road"
import jsts from 'jsts';
import { GeoCanvas } from "../base/GeoCanvas";

export class RoadNetwork {

    /** */
    constructor() {

        /** @type {Array.<Road>} */
        this.sections = []


        //add test road
        //https://github.com/bjornharrtell/jsts
        //http://bjornharrtell.github.io/jsts/
        var reader = new jsts.io.WKTReader()
        var g = reader.read('LINESTRING (30 10, 10 300, 400 40)')
        this.sections.push(new Road(g, 7));
    }

    /**
     * Display
     * @param {GeoCanvas} cp 
     */
    display(cp) {
        for (let r of this.sections)
            r.display(cp, "red", r.width);
    }
}
