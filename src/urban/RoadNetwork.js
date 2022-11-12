//@ts-check
import { Road } from "./Road"
import jsts from 'jsts';

export class RoadNetwork {

    constructor() {

        /** @type {Array.<Road>} */
        this.sections = []


        //add test road

        //https://github.com/bjornharrtell/jsts
        //http://bjornharrtell.github.io/jsts/
        var reader = new jsts.io.WKTReader()
        var g = reader.read('LINESTRING (30 10, 10 300, 400 40)')
        //a = a.buffer(40)
        //var w = new jsts.io.WKTWriter()
        //console.log(w.write(a))

        this.sections.push(new Road(g));
    }

}
