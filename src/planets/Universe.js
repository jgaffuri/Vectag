import { removeFromArray } from '../base/lib';
import { Planet } from './Planet';

export class Universe {

    /**
 * @constructor
 * @struct
 * @param {number} w
 * @param {number} h
 * @param {number} timeStepMs
 */
    constructor(w, h, timeStepMs) {
        /** @type {number} */
        this.w = w;
        /** @type {number} */
        this.h = h;

        /** @type {number} */
        this.timeStepMs = timeStepMs;

        /** @type {Array.<Planet>} */
        this.ps = [];
    }


    /**
     * @param {number} nb
     * @param {number} mi
     * @param {number} minSpeed
     * @param {number} maxSpeed
     * @return {Universe}
     */
    fillRandomly(nb, mi, minSpeed, maxSpeed) {
        /** @type {Array.<Planet>} */
        this.ps = [];
        for (var i = 0; i < nb; i++) {
            var speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
            var angle = 2 * Math.random() * Math.PI;
            this.ps.push(new Planet(this, mi, this.w * Math.random(), this.h * Math.random(), speed * Math.cos(angle), speed * Math.sin(angle)));
        }
        return this;
    }

    /**
     */
    step() {
        /** @type {number} */
        var i;

        //observation
        for (i = 0; i < this.ps.length; i++)
            this.ps[i].observe();

        //action
        for (i = 0; i < this.ps.length; i++)
            this.ps[i].change();

        //collision detections
        /** @type {Array.<Planet>} */
        var agg = this.findCollision();
        while (agg !== null) {
            this.ps.push(this.aggregate(agg));
            removeFromArray(this.ps, agg[0]);
            removeFromArray(this.ps, agg[1]);
            agg = this.findCollision();
        }
    }

    /**
     * @return {Array.<Planet>}
     */
    findCollision() {
        //TODO use spatial index to boost collision detection
        for (var i = 0; i < this.ps.length; i++) {
            /** @type {Planet} */
            var pi = this.ps[i];
            for (var j = i + 1; j < this.ps.length; j++) {
                /** @type {Planet} */
                var pj = this.ps[j];
                /** @type {number} */
                var d1 = pi.d(pj);
                /** @type {number} */
                var d2 = pi.r() + pj.r();
                if (d1 > d2)
                    continue;
                return [pi, pj];
            }
        }
        return null;
    }

    /**
     * Aggregate planets, after collision.
     *
     * @param {Array.<Planet>} agg
     */
    aggregate(agg) {
        /** @type {Planet} */
        var p1 = agg[0];
        /** @type {Planet} */
        var p2 = agg[1];
        /** @type {number} */
        var m = p1.m + p2.m;
        return new Planet(this,
            m,
            (p1.x * p1.m + p2.x * p2.m) / m,
            (p1.y * p1.m + p2.y * p2.m) / m,
            (p1.vx * p1.m + p2.vx * p2.m) / m,
            (p1.vy * p1.m + p2.vy * p2.m) / m
        );
    }
}
