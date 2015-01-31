
(function(FishVag,$) {

    //TODO use instance variales foo.Bar.prototype.prop1_ = 4;
    FishVag.Sardin.D_OBS=50;
    FishVag.Sardin.A_OBS=200*Math.PI/180;
    FishVag.Sardin.D_COL=10;
    FishVag.Sardin.V_TARGET=0.3;
    FishVag.Sardin.V_MAX=0.6;

    /*
     Context2d c2;
     CssColor backColor = CssColor.make("rgba(120,120,255,0.6)");
     double sardinWidth=2;
     double sardinLength=7;
     CssColor sharkColor = CssColor.make(0,0,0);
     double sharkWidth=4;
     double sharkLength=12;

     CssColor bloodColor = CssColor.make(255,0,0);
     */

    FishVag.D_SHARK_EAT=12;
    FishVag.EATEN_SARDIN_NB=0;

    /*
     Label eatenFishNb=new Label("Eaten fish: 0");
     CheckBox fishView = new CheckBox("Fish perception field",false);
     CheckBox fishHalo = new CheckBox("Fish collision",false);
     */

    /**
     * @param {FishVag.Sea} sea
     * @param {number=} x
     * @param {number=} y
     * @param {number=} vx
     * @param {number=} vy
     * @returns {*}
     * @constructor
     */
    FishVag.Sardin = function(sea,x,y,vx,vy){
        /**@type{FishVag.Sea}*/
        this.sea=sea;

        /**@type{number}*/
        this.x=0;
        if(!x) this.x=sea.w*Math.random();
        else if(x<0) this.x=0;
        else if(x>sea.w) this.x=sea.w;
        else this.x=x;

        /**@type{number}*/
        this.y=0;
        if(!y) this.y=sea.h*Math.random();
        else if(y<0) this.y=0;
        else if(y>sea.h) this.y=sea.h;
        else this.y=y;

        if(vx && vy){
            //speed, in pix per ms
            /**@type{number}*/
            this.vx=vx;
            /**@type{number}*/
            this.vy=vy;
            //speed angle (in -Pi,Pi) and norm
            /**@type{number}*/
            this.v=Math.sqrt(vx*vx+vy*vy);
            /**@type{number}*/
            this.va=Math.atan2(vy,vx);
        } else {
            /**@type{number}*/
            this.v=Math.random()*FishVag.Sardin.V_MAX;
            /**@type{number}*/
            this.va=Math.random()*2*Math.PI-Math.PI;
            /**@type{number}*/
            this.vx=this.v*Math.cos(this.va);
            /**@type{number}*/
            this.vy=this.v*Math.sin(this.va);
        }
        //acceleration, in pix per s2
        /**@type{number}*/
        this.ax=0;
        /**@type{number}*/
        this.ay=0;

        this.sea.grid.add(this, this.x, this.y);

        /**@type{Array.<FishVag.Sardin>}*/
        this.obs = [];
        /**@type{Array.<FishVag.Sardin>}*/
        this.col = [];
    };

    FishVag.Sardin.prototype.observe = function(){
        /**@type{Array.<FishVag.Sardin>}*/
        var ss = this.sea.grid.get(this.x-FishVag.Sardin.D_OBS, this.y-FishVag.Sardin.D_OBS, this.x+FishVag.Sardin.D_OBS, this.y+FishVag.Sardin.D_OBS);

        this.obs=[];
        this.col=[];
        /**@type{Array.<FishVag.Sardin>}*/
        var col=[];
        var i, s, d, a;
        for(i=0;i<ss.length;i++){
            s = ss[i];
            if(s==this) continue;
            if(this.d(s)<=FishVag.Sardin.D_COL) col.push(s);
            if(this.d(s)<=FishVag.Sardin.D_OBS) {
                //check angle
                var da=Math.atan2(s.y-this.y,s.x-this.x)-this.va;
                if(da>Math.PI) da-=2*Math.PI;
                else if(da<=-Math.PI) da+=2*Math.PI;
                da=Math.abs(da);
                if(da>FishVag.Sardin.A_OBS*0.5) continue;
                this.obs.push(s);
            }
        }

        this.ax=0; this.ay=0;

        //repulsion
        for(i=0;i<col.length;i++){
            s = col[i];
            d=this.d(s);
            a=1.0*(1/(d*d)-1/(D_COL*D_COL));
            this.ax+=a*(this.x-s.x)/d;
            this.ay+=a*(this.y-s.y)/d;
        }

        //toward v target
        var dv=(FishVag.Sardin.V_TARGET-this.v)*0.01;
        this.ax += dv*this.vx/this.v;
        this.ay += dv*this.vy/this.v;

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
        var t=0.9;
        if(this.obs.length>1){
            var dvx=0,dvy=0;
            for(i=0;i<this.obs.length;i++){
                s = this.obs[i];
                dvx+=s.vx;
                dvy+=s.vy;
            }
            dvx=(t-1)*this.vx+(1-t)*dvx/this.obs.length;
            dvy=(t-1)*this.vy+(1-t)*dvy/this.obs.length;

            a=0.1;
            this.ax+=a*dvx;
            this.ay+=a*dvy;
        }

        //avoid shark
        if(this.sea.shark!=null){
            /**@type{Array.<number>}*/
            s=this.sea.shark;
            var dx = s[0]-this.x, dy = s[1]-this.y;
            d = Math.sqrt(dx*dx+dy*dy);
            if(d<=FishVag.Sardin.D_OBS){
                a=5.0*(1/(d*d)-1/(FishVag.Sardin.D_OBS*FishVag.Sardin.D_OBS));
                this.ax+=a*(this.x-s[0])/d;
                this.ay+=a*(this.y-s[1])/d;
            }
        }
    };

    FishVag.Sardin.prototype.move = function(){
        this.sea.grid.remove(this, this.x, this.y);

        //compute new speed
        this.vx += this.ax*this.sea.timeStepMs +(1-2*Math.random())*0.02;
        this.vy += this.ay*this.sea.timeStepMs +(1-2*Math.random())*0.02;
        this.v = Math.sqrt(this.vx*this.vx+this.vy*this.vy);
        this.va = Math.atan2(this.vy, this.vx);
        if(this.v>FishVag.Sardin.V_MAX){
            this.v=FishVag.Sardin.V_MAX;
            this.vx=FishVag.Sardin.V_MAX*Math.cos(this.va);
            this.vy=FishVag.Sardin.V_MAX*Math.sin(this.va);
        }

        //compute new position
        this.x += this.vx*this.sea.timeStepMs;
        this.y += this.vy*this.sea.timeStepMs;

        //limit
        if(this.x<0) this.x = this.sea.w;
        if(this.y<0) this.y = this.sea.h;
        if(this.x>this.sea.w) this.x=0;
        if(this.y>this.sea.h) this.y=0;

        this.sea.grid.add(this, this.x, this.y);
    };

    /**
     * @param {FishVag.Sardin} s
     * @returns {number}
     */
    FishVag.Sardin.prototype.d = function(s){
        var dx=s.x-this.x;
        var dy=s.y-this.y;
        return Math.sqrt(dx*dx+dy*dy);
    };



    FishVag.Sea = function(w,h){
        this.w=w;
        this.h=h;

        /**@type{FishVag.Sardin}*/
        this.fish = [];
        this.shark=null;

        this.grid=new VectA.Grid(w,h,FishVag.Sardin.D_OBS);
        this.timeStepMs = 10;
    };

    /**
     * @param {number} nb
     */
    FishVag.Sea.prototype.fill = function(nb){
        for(var i=0;i<nb;i++)
            this.fish.push(new FishVag.Sardin(this));
    };

    FishVag.Sea.prototype.step = function(){
        var i;

        //observe
        for(i=0;i<this.fish.length;i++)
            this.fish[i].observe();

        //move
        for(i=0;i<this.fish.length;i++)
            this.fish[i].move();

        //shark eat fish
        /**@type{Array.<FishVag.Sardin>}*/
        var killed = this.sharkEat();


        /*
         //display

         //c2.clearRect(0, 0, w, h);
         c2.setFillStyle(backColor);
         c2.fillRect(0, 0, w, h);

         //blood
         c2.setFillStyle(bloodColor);
         for(Sardin sa:killed){
         c2.beginPath();
         c2.moveTo(sa.x, sa.y);
         c2.arc(sa.x, sa.y, 4, 0, 2*Math.PI);
         c2.closePath();
         c2.fill();
         }

         //display sardins
         c2.setLineWidth(sardinWidth);
         for(Sardin sa:fish)
         display(sa);


         //display halos
         //vision
         if(fishView.getValue()){
         c2.setFillStyle(CssColor.make("rgba(255,255,255,0.3)"));
         c2.setLineWidth(1);
         for(Sardin sa:fish){
         c2.beginPath();
         c2.moveTo(sa.x, sa.y);
         c2.arc(sa.x, sa.y, Sardin.D_OBS, sa.va-Sardin.A_OBS*0.5, sa.va+Sardin.A_OBS*0.5);
         c2.closePath();
         c2.fill();
         }
         c2.setStrokeStyle(CssColor.make(255,0,255));
         c2.setLineWidth(0.5);
         for(Sardin sa:fish){
         for(Sardin sa2:sa.obs){
         c2.beginPath();
         c2.moveTo(sa.x,sa.y);
         c2.lineTo(sa2.x,sa2.y);
         c2.closePath();
         c2.stroke();
         }
         }
         }
         //collision
         if(fishHalo.getValue()){
         c2.setLineWidth(1);
         c2.setStrokeStyle(CssColor.make(255,0,0));
         for(Sardin sa:fish){
         c2.beginPath();
         c2.arc(sa.x, sa.y, Sardin.D_COL*0.5, 0, 2*Math.PI);
         c2.closePath();
         c2.stroke();
         }
         }


         //display shark
         if(shark!=null){
         double x=shark[0];
         double y=shark[1];

         c2.setLineWidth(sharkWidth);
         c2.setStrokeStyle(sharkColor);

         double dx=sharkLength*Math.cos(shark[2])*0.5;
         double dy=sharkLength*Math.sin(shark[2])*0.5;

         c2.beginPath();
         c2.moveTo(x-dx,y-dy);
         c2.lineTo(x+dx,y+dy);
         c2.closePath();
         c2.stroke();
         }
         */
    };

    /**
     * @returns {Array.<FishVag.Sardin>}
     */
    FishVag.Sea.prototype.sharkEat = function(){
        if(this.shark==null) return [];
        /**@type{Array.<FishVag.Sardin>}*/
        var killed = [];
        var x=this.shark[0], y=this.shark[1];
        /**@type{Array.<FishVag.Sardin>}*/
        var ss = this.grid.get(x-FishVag.D_SHARK_EAT, y-FishVag.D_SHARK_EAT, x+FishVag.D_SHARK_EAT, y+FishVag.D_SHARK_EAT);
        for(var i=0;i<ss.length;i++){
            /**@type{FishVag.Sardin}*/
            var s = ss[i];
            var dx = x-s.x;
            var dy = y-s.y;
            var d = Math.sqrt(dx*dx+dy*dy);
            if(d>FishVag.D_SHARK_EAT) continue;
            killed.push(s);
            this.fish.remove(s); //TODO
            this.grid.remove(s, s.x, s.y); //TODO
        }
        FishVag.EATEN_SARDIN_NB += killed.length;
        //eatenFishNb.setText("Eaten fish: "+FishVag.EATEN_SARDIN_NB); //TODO
        return killed;
    };

    /*
    private void display(Sardin sa) {
        int c=(int)(255*Math.abs(sa.va)/Math.PI);
        c2.setStrokeStyle( CssColor.make(255,255,c) );
        double a=sardinLength/sa.v;
        double dx=a*sa.vx*0.5;
        double dy=a*sa.vy*0.5;

        c2.beginPath();
        c2.moveTo(sa.x-dx,sa.y-dy);
        c2.lineTo(sa.x+dx,sa.y+dy);
        c2.closePath();
        c2.stroke();
    }
*/



    //TODO fish.java



}( window.FishVag = window.FishVag || {}, jQuery ));
