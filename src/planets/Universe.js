import { removeFromArray } from '../base/lib';
import { Planet } from './Planet';

export class Universe {

    /**
 * @constructor
 * @struct
 * @param {number} w
 * @param {number} h
 */
    constructor(w, h) {
        /** @type {number} */
        this.w = w;
        /** @type {number} */
        this.h = h;

        /** @type {Array.<Planet>} */
        this.ps = [];
    }

    /**
     * Compute the mass of the universe
     */
    m() {
        let m = 0;
        for (let i = 0; i < this.ps.length; i++)
            m += this.ps[i].m;
        return m;
    }


    /**
     * @return {Array.<Planet>}
     */
    findCollision(collisionFactor = 1) {
        //TODO use spatial index to boost collision detection
        for (let i = 0; i < this.ps.length; i++) {
            /** @type {Planet} */
            const pi = this.ps[i];
            for (let j = i + 1; j < this.ps.length; j++) {
                /** @type {Planet} */
                const pj = this.ps[j];
    
                /** @type {number} */
                const d1 = pi.d(pj);
                /** @type {number} */
                const d2 = (pi.r() + pj.r()) * collisionFactor;
                if (d1 > d2)
                    continue;
                return [pi, pj];
            }
        }
        return null;
    }

    /**
     * Aggregate a pair of planets, after collision.
     *
     * @param {Array.<Planet>} agg
     */
    aggregate(agg) {
        /** @type {Planet} */
        const p1 = agg[0];
        /** @type {Planet} */
        const p2 = agg[1];
        /** @type {number} */
        const m = p1.m + p2.m;
        return new Planet(this,
            m,
            (p1.x * p1.m + p2.x * p2.m) / m,
            (p1.y * p1.m + p2.y * p2.m) / m,
            (p1.vx * p1.m + p2.vx * p2.m) / m,
            (p1.vy * p1.m + p2.vy * p2.m) / m
        );
    }

    /**
     */
    step(bounce = false, vmax = 0.8, collisionFactor = 1, timeStepMs = 10) {
        /** @type {number} */
        let i;

        //observation
        for (i = 0; i < this.ps.length; i++)
            this.ps[i].observe();

        //action
        for (i = 0; i < this.ps.length; i++)
            this.ps[i].change(bounce, vmax, timeStepMs);

        //collision detections
        /** @type {Array.<Planet>} */
        let agg = this.findCollision(collisionFactor);
        while (agg !== null) {
            this.ps.push(this.aggregate(agg));
            removeFromArray(this.ps, agg[0]);
            removeFromArray(this.ps, agg[1]);
            agg = this.findCollision(collisionFactor);
        }
    }

}
