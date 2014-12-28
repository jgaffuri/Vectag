VA = {};

$(function() {
    VA.init();
});

(function(VA) {
    var w = 600;
    var h = 400;

    VA.init = function(){
        var ctx = document.getElementById("vaCanvas").getContext("2d");

        var uni = new Universe();
        var nb = 100, i=0;
        while(i < nb){
            var x = w*Math.random();
            var y = h*Math.random();
            uni.add(x,y);
        }

        ctx.fillStyle = "#FF0000";
        ctx.fillRect(0,0,150,75);
    };
})(VA);

function Universe(){
    this.population = [];
    this.populationI = {};

    this.add = function(x,y){
        //find agent at location
        var id = x+"_"+y;
        var ag = this.populationI(id);
        if(ag) return null;
        //create new agent
        ag = new Ag(x,y);
        this.population.push(ag);
        this.populationI[id] = ag;
        return ag;
    }
}

function Ag(x,y){
    this.x=x;
    this.y=y;
}
