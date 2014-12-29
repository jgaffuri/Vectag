//java -jar /home/juju/programmes/closure_compiler/compiler.jar --js src/vectag.js --js_output_file dist/vectag.min.js
//java -jar /home/juju/programmes/closure_compiler/compiler.jar --js src/vectag.js --js_output_file dist/vectag.min.js --compilation_level ADVANCED_OPTIMIZATIONS

VA = {};




$(function() {
    (function(VA,$) {
        //TODO do gol
        //TODO use canvas transform

        /**
         * @constructor
         */
        VA.Universe = function(){
            //@type {Array.<Cell>}
            this.population = [];
            this.populationI = {};

            /**
             * @param {number} x
             * @param {number} y
             * @return {VA.Cell}
             */
            this.add = function(x,y){
                //find agent at location
                var id = x+"_"+y;
                var cell = this.populationI[id];
                if(cell) return null;
                //create new agent
                cell = new VA.Cell(x,y);
                this.population.push(cell);
                this.populationI[id] = cell;
                return cell;
            }
        };

        /**
         * @constructor
         * @param {number} x
         * @param {number} y
         */
        VA.Cell = function(x,y){
            this.x = x;
            this.y = y;
            this.nb = 0;
        };

        /**
         * @return {Array.<VA.Cell>}
         */
        VA.Cell.prototype.getSurrounding = function() {
            var x1 = this.x===0?w-1:this.x-1;
            var x2 = this.x===w-1?0:this.x+1;
            var y1 = this.y===0?h-1:this.y-1;
            var y2 = this.y===h-1?0:this.y+1;
            return [
                new VA.Cell(x1,y1),
                new VA.Cell(x1,this.y),
                new VA.Cell(x1,y2),
                new VA.Cell(this.x,y1),
                new VA.Cell(this.x,y2),
                new VA.Cell(x2,y1),
                new VA.Cell(x2,this.y),
                new VA.Cell(x2,y2)
            ];
        };

        /**
         * @return {string}
         */
        VA.Cell.prototype.getKey = function() {
            return cell.x+"_"+cell.y;
        };





        var cdiv = $("#cdiv");
        //@type {number}
        var w = cdiv.width();
        //@type {number}
        var h = cdiv.height();

        //@type {Universe}
        var uni = new VA.Universe();

        //fill universe
        var i=0;
        while(i < 100){
            var x = Math.round(w*Math.random());
            var y = Math.round(h*Math.random());
            var cell = uni.add(x,y);
            if(cell) i++;
        }

        $("#canvas").click(function(e) {
            console.log(VA.canvasClickPosition(cvs, e));
        });

        var cvs = document.getElementById("canvas");
        var ctx = cvs.getContext("2d");
        ctx.canvas.width  = w;
        ctx.canvas.height = h;
        VA.redraw = function(){
            //ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = "#0000FF";
            for(i=0; i<uni.population.length; i++){
                var cell = uni.population[i];
                ctx.beginPath();
                ctx.arc(cell.x,cell.y,1,0,2*Math.PI);
                ctx.fill();
            }
        };
        //draw universe
        VA.redraw();

        //while(true){
        var occ=0;
        while(occ++ < 1){
            console.log(occ);



            //surrounding cells
            var surI = {};
            //go through list of cells
            for(i=0; i<uni.population.length; i++){
                cell = uni.population[i];
                //get surrounding cells
                var srs = cell.getSurrounding();
                for(var j=0; j<srs.length; j++){
                    var sr = srs[j];
                    var key = sr.getKey();
                    //+1 surrounding cells
                    var cell_ = surI[key];
                    if(cell_){
                        cell_.nb++;
                    } else {
                        sr.nb = 1;
                        surI[key] = sr;
                    }
                }
            }

            console.log(surI);

            //go through marked cells
            //if v and (nb<2 or nb>3) -> kill
            //if !v and nb=3 -> create

            //redraw
            VA.redraw();
        }

        /**
         * @param {object} elt
         * @param {object} e
         * @return {Object.<string, number>}
         */
        VA.canvasClickPosition = function(elt, e){
            if (e.offsetX && e.offsetY)
                return {x:e.offsetX, y:e.offsetY};
            var tX=0, tY=0;
            do {
                tX += elt.offsetLeft - elt.scrollLeft;
                tY += elt.offsetTop - elt.scrollTop;
            } while(elt = elt.offsetParent);
            return {x:e.pageX-tX, y:e.pageY-tY}
        }

    })(VA,$);
});
