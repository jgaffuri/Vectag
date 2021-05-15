
(function(PlaVag) {

    //TODO use spatial index to boost collision detection

    /**
     * @constructor
     * @struct
     * @param {PlaVag.Universe} u
     * @param {number} m
     * @param {number} x
     * @param {number} y
     * @param {number} vx
     * @param {number} vy
     */
    PlaVag.Planet = function(u,m,x,y,vx,vy){
        /** @type {PlaVag.Universe} */
        this.u = u;
        /** @type {number} */
        this.m = m;

        /** @type {number} */
        var r = this.r();

        /** @type {number} */
        this.x = 0;
        if(x<r) this.x = r;
        else if(x>u.w-r) this.x = u.w-r;
        else this.x = x;

        /** @type {number} */
        this.y = 0;
        if(y<r) this.y = r;
        else if(y>u.h-r) this.y = u.h-r;
        else this.y = y;

        /** @type {number} */
        this.vx = vx;
        /** @type {number} */
        this.vy = vy;
    };

    /**
     */
    PlaVag.Planet.prototype.observe = function(){
        //update the force
        /** @type {number} */
        this.fx=0;
        /** @type {number} */
        this.fy=0;
        for(var i=0; i< this.u.ps.length; i++){
            /** @type {PlaVag.Planet} */
            var p = this.u.ps[i];
            if(this == p) continue;
            /** @type {number} */
            var d = this.d(p);
            d = d*d*d;
            this.fx += 0.01*(p.x-this.x)*this.m*p.m/d;
            this.fy += 0.01*(p.y-this.y)*this.m*p.m/d;
        }
    };

    /**
     * @param {PlaVag.Planet} p
     * @return {number}
     */
    PlaVag.Planet.prototype.d = function(p){
        /** @type {number} */
        var dx = p.x-this.x;
        /** @type {number} */
        var dy = p.y-this.y;
        return Math.sqrt(dx*dx+dy*dy);
    };


    /**
     * @return {number}
     */
    PlaVag.Planet.prototype.r = function(){
        return Math.sqrt(this.m/Math.PI);
    };

    /**
     */
    PlaVag.Planet.prototype.change = function(){
        //compute acceleration
        /** @type {number} */
        var ax = this.fx/this.m;
        /** @type {number} */
        var ay = this.fy/this.m;

        //compute new speed
        this.vx += ax*this.u.timeStepMs;
        this.vy += ay*this.u.timeStepMs;

        //compute new position
        this.x += this.vx*this.u.timeStepMs;
        this.y += this.vy*this.u.timeStepMs;

        //limit
        /*double r=r();
         if(x<r) { x=r; vx=-vx*e; }
         if(y<r) { y=r; vy=-vy*e; }
         if(x>u.w-r) { x=u.w-r; vx=-vx*e; }
         if(y>u.h-r) { y=u.h-r; vy=-vy*e; }*/
        if(this.x<0) { this.x=this.u.w; }
        if(this.y<0) { this.y=this.u.h; }
        if(this.x>this.u.w) { this.x=0; }
        if(this.y>this.u.h) { this.y=0; }
    };



    /**
     * @constructor
     * @struct
     * @param {number} w
     * @param {number} h
     * @param {number} timeStepMs
     */
    PlaVag.Universe = function(w, h, timeStepMs){
        /** @type {number} */
        this.w = w;
        /** @type {number} */
        this.h = h;

        /** @type {number} */
        this.timeStepMs = timeStepMs;

        /** @type {Array.<PlaVag.Planet>} */
        this.ps = [];
    };


    /**
     * @param {number} nb
     * @param {number} mi
     * @param {number} minSpeed
     * @param {number} maxSpeed
     * @return {PlaVag.Universe}
     */
    PlaVag.Universe.prototype.fillRandomly = function(nb, mi, minSpeed, maxSpeed){
        /** @type {Array.<PlaVag.Planet>} */
        this.ps = [];
        for(var i=0; i<nb; i++) {
            var speed = minSpeed + Math.random()*(maxSpeed-minSpeed);
            var angle = 2*Math.random()*Math.PI;
            this.ps.push(new PlaVag.Planet(this, mi, this.w * Math.random(), this.h * Math.random(), speed*Math.cos(angle), speed*Math.sin(angle)));
        }
        return this;
    };


    /**
     */
    PlaVag.Universe.prototype.step = function(){
        /** @type {number} */
        var i;

        //observation
        for(i=0; i< this.ps.length; i++)
            this.ps[i].observe();

        //action
        for(i=0; i< this.ps.length; i++)
            this.ps[i].change();

        //collision detections
        /** @type {Array.<PlaVag.Planet>} */
        var agg = this.findCollision();
        while(agg !== null){
            this.ps.push(this.aggregate(agg));
            VectA.removeFromArray(this.ps, agg[0]);
            VectA.removeFromArray(this.ps, agg[1]);
            agg = this.findCollision();
        }
    };

    /**
     * @return {Array.<PlaVag.Planet>}
     */
    PlaVag.Universe.prototype.findCollision = function(){
        for(var i=0; i<this.ps.length; i++){
            /** @type {PlaVag.Planet} */
            var pi = this.ps[i];
            for(var j=i+1; j<this.ps.length; j++){
                /** @type {PlaVag.Planet} */
                var pj = this.ps[j];
                /** @type {number} */
                var d1 = pi.d(pj);
                /** @type {number} */
                var d2 = pi.r()+pj.r();
                if(d1>d2) continue;
                return [pi,pj];
            }
        }
        return null;
    };

    /**
     * @param {Array.<PlaVag.Planet>} agg
     */
    PlaVag.Universe.prototype.aggregate = function(agg){
        /** @type {PlaVag.Planet} */
        var p1=agg[0];
        /** @type {PlaVag.Planet} */
        var p2=agg[1];
        /** @type {number} */
        var m = p1.m+p2.m;
        return new PlaVag.Planet(this,
            m,
            (p1.x*p1.m+p2.x*p2.m)/m,
            (p1.y*p1.m+p2.y*p2.m)/m,
            (p1.vx*p1.m+p2.vx*p2.m)/m,
            (p1.vy*p1.m+p2.vy*p2.m)/m
        );
    };

    /**
     * @param {number} nb
     * @param {CanPl.CanvasPlus} cplus
     * @return {PlaVag.Universe}
     */
    PlaVag.Universe.prototype.start = function(nb, cplus){
        var i=0;
        var uni = this;
        var engine = function(){
            uni.step();
            cplus.redraw();
            if(nb>0 && i++ > nb) return;
            setTimeout(engine, 0);
        };
        engine();
        return this;
    };

    //entry point
        var cdiv = document.getElementById("cdiv");
        /** @type {number} */
        var w = cdiv.offsetWidth;
        /** @type {number} */
        var h = cdiv.offsetHeight;

        var nb = 1000, mi = 0.5;
        /** @type {PlaVag.Universe} */
        var uni = new PlaVag.Universe(w, h, 10).fillRandomly(nb, mi, 0, 0.1);

        /** @type {CanPl.CanvasPlus} */
        var cplus = new CanPl.CanvasPlus("canvas", w, h);
        var ctx = cplus.getContext2D();
        ctx.fillStyle = "#000000";
        ctx.fillRect(0,0,w,h);

        cplus.redraw = function(){
            //ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = "rgba(0,0,0,0.05)";
            ctx.fillRect(0,0,w,h);

            //display planets
            for(var i=0; i< uni.ps.length; i++){
                /** @type {PlaVag.Planet} */
                var p = uni.ps[i];
                var t = p.m/(nb*mi);
                ctx.fillStyle = "rgb(255,255,"+Math.floor(255*(1-t))+")";
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r(), 0, 2*Math.PI);
                ctx.closePath();
                ctx.fill();
            }

            //label
            ctx.fillStyle = "rgb(200,200,200)";
            ctx.fillRect(0, 0, 65, 13);
            ctx.fillStyle = "rgb(0,0,0)";
            ctx.fillText(uni.ps.length + " planets", 2, 10);
        };

        //start
        uni.start(-1,cplus);

         //TODO add restart/big bang button
        /* Button restart = new Button("Recommencer!");
         restart.addClickHandler(new ClickHandler() {
         @Override
         public void onClick(ClickEvent event) {
         u.fill();
         c.getContext2d().setFillStyle(CssColor.make(0,0,0));
         c.getContext2d().fillRect(0, 0, w, h);
         }
         });
         RootPanel.get("b").add(restart);*/

}( window.PlaVag = window.PlaVag || {} ));
