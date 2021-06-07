//@ts-check

/** */
export class AgentPoint {

    /**
     * @param {number} x 
     * @param {number} y 
     * @param {number} sx 
     * @param {number} sy 
     */
    constructor(x, y, sx, sy) {

        //position

        /** @type {number} */
        this.x = x
        /** @type {number} */
        this.y = y

        //speed

        /** @type {number} */
        this.sx = sx
        /** @type {number} */
        this.sy = sy
        /** @type {number} */
        this.s = undefined
        /** @type {number} */
        this.sa = undefined
    }


    /**
     * @param {AgentPoint} a
     * @returns {number} The distance to another agent.
     */
    d(a) {
        return this.dP(a.x, a.y);
    }

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @returns {number} The distance to a position.
     */
    dP(x, y) {
        return Math.hypot((x - this.x), (y - this.y));
    }

    /** 
    * Set random speed
    * 
    * @param {number} minSpeed
    * @param {number} maxSpeed
    */
    setRandomSpeed(minSpeed = 0, maxSpeed = 0.1) {
        this.s = minSpeed + Math.random() * (maxSpeed - minSpeed);
        this.sa = 2 * Math.random() * Math.PI;
        this.sx = this.s * Math.cos(this.sa)
        this.sy = this.s * Math.sin(this.sa)
    }

    /** */
    computeSpeed() {
        this.s = Math.hypot(this.sx, this.sy);
        return this.s
    }

    /** */
    computeSpeedAngle() {
        this.sa = Math.atan2(this.sy, this.sx);
        return this.sa
    }

}
