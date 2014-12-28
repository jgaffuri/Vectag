VA = {};

$(function() {
    VA.init();
});

(function(VA) {
    VA.init = function(){
        var ctx = document.getElementById("vaCanvas").getContext("2d");

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
        var ag = new Ag(x,y);
        this.population.push(ag);
        this.populationI[id] = ag;
        return ag;
    }
}

function Ag(x,y){
    this.x=x;
    this.y=y;
}
