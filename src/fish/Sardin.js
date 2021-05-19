export class Sardin {

    /*
        Sea sea;
        x,y position, in pix
        vx,vy speed, in pix per ms
        v, va speed angle (in -Pi,Pi) and norm
        ax, ay acceleration, in pix per s2
        */
    constructor(sea, x = sea.w * Math.random(), y = sea.h * Math.random(), vx = 0, vy = 0) {

        //observation
        this.D_OBS = 50
        this.A_OBS = 200 * Math.PI / 180

        //collision
        this.D_COL = 10

        //speed
        this.V_TARGET = 0.3
        this.V_MAX = 0.6


        this.sea = sea;

        //position
        this.x = x < 0 ? 0 : x > sea.w ? sea.w : x
        this.y = y < 0 ? 0 : y > sea.h ? sea.h : y

        //speed
        if (vx == undefined && vy == undefined) {
            this.va = Math.random() * 2 * Math.PI - Math.PI;
            this.v = Math.random() * this.V_MAX;
            this.vx = this.v * Math.cos(this.va);
            this.vy = this.v * Math.sin(this.va);
        } else {
            this.vx = vx;
            this.vy = vy;
            this.v = Math.hypot(vx, vy);
            this.va = Math.atan2(vy, vx);
        }

        //acceleration
        this.ax = 0
        this.ay = 0

        //add to spatial index

        console.log(this, this.x, this.y)
        sea.grid.add(this, this.x, this.y)

        //list of sardins in vision field
        this.obs = []
        //list of sardins in collision field
        this.col = []
    }



    /** */
    observe() {

        //initialise lists
        obs.clear();
        col.clear();

        //get sardins around using spatial index
        const ss = sea.grid.get(x - this.D_OBS, y - this.D_OBS, x + this.D_OBS, y + this.D_OBS);

        //get sardins in observation and collision fields
        for (let s of ss) {
            if (s == this) continue;
            if (d(s) <= D_COL) col.add(s);
            if (d(s) <= D_OBS) {
                //check angle
                let da = Math.atan2(s.y - y, s.x - x) - va;
                if (da > Math.PI) da -= 2 * Math.PI;
                else if (da <= -Math.PI) da += 2 * Math.PI;
                da = Math.abs(da);
                if (da > this.A_OBS * 0.5) continue;
                obs.add(s);
            }
        }

        //initialise acceleration
        this.ax = 0; this.ay = 0;

        //collision: repulsion
        for (let s of col) {
            const d = d(s);
            const a = 1.0 * (1 / (d * d) - 1 / (this.D_COL * this.D_COL));
            this.ax += a * (x - s.x) / d;
            this.ay += a * (y - s.y) / d;
        }

        // toward v target
        const dv = (this.V_TARGET - v) * 0.01;
        this.ax += dv * vx / v;
        this.ay += dv * vy / v;

        //toward the observed mean position
        /*if(obs.size()>1){
            double xn=0,yn=0;
            for(Sardin s:obs){
                xn+=s.x;
                yn+=s.y;
            }
            xn=xn/obs.size();
            yn=yn/obs.size();
            double d=Math.hypot(xn-x,yn-y);
            ax+=-0.1*(x-xn)/d;
            ay+=-0.1*(y-yn)/d;
        }*/

        //toward the observed speed
        const t = 0.9;
        if (obs.size() > 1) {
            let dvx = 0, dvy = 0;
            for (let s of obs) {
                dvx += s.vx;
                dvy += s.vy;
            }
            dvx = (t - 1) * vx + (1 - t) * dvx / obs.size();
            dvy = (t - 1) * vy + (1 - t) * dvy / obs.size();

            const a = 0.1;
            this.ax += a * dvx;
            this.ay += a * dvy;
        }

        //avoid shark
        if (sea.shark != null) {
            const s = sea.shark;
            const d = Math.hypot((s[0] - x), (s[1] - y));
            if (d <= D_OBS) {
                const a = 5.0 * (1 / (d * d) - 1 / (D_OBS * D_OBS));
                this.ax += a * (x - s[0]) / d;
                this.ay += a * (y - s[1]) / d;
            }
        }

    }



    /** */
    move() {
        sea.grid.remove(this, this.x, this.y);

        //compute new speed
        this.vx += ax * sea.timeStepMs + (1 - 2 * Math.random()) * 0.02;
        this.vy += ay * sea.timeStepMs + (1 - 2 * Math.random()) * 0.02;
        this.v = Math.hypot(vx, vy);
        this.va = Math.atan2(vy, vx);
        if (v > V_MAX) {
            this.v = this.V_MAX;
            this.vx = this.V_MAX * Math.cos(va);
            this.vy = this.V_MAX * Math.sin(va);
        }

        //compute new position
        this.x += vx * sea.timeStepMs;
        this.y += vy * sea.timeStepMs;

        //limit
        if (x < 0) x = sea.w;
        if (y < 0) y = sea.h;
        if (x > sea.w) x = 0;
        if (y > sea.h) y = 0;

        sea.grid.add(this, this.x, this.y);
    }


    /** Distance to other sardin */
    d(s) {
        return Math.hypot((s.x - this.x), (s.y - this.y));
    }

}
