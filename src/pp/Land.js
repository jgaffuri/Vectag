class Land {

    constructor() {

        //the max speed
        this.V_MAX = 0.1;

        this.p = 0.02; //predator death probability
        this.q = 0.1; //prey reproduction probability
        this.r = 0.5; //eaten prey transformation probability
        this.nb = 3; //neighbors number

        this.predators = []
        this.preys = []
        this.d = 10
        this.timeStepMs = 20
        this.grid
    


        int[][] histo;
        int index=0;
    
        Context2d c2;
        Context2d c2Chart;
        int hChart;
        CssColor preyColor = CssColor.make(0,0,255);
        CssColor preyColor2 = CssColor.make("rgba(0,0,255,0.5)");
        CssColor predatorColor = CssColor.make(255,0,0);
        CssColor predatorColor2 = CssColor.make("rgba(255,0,0,0.5)");
        CssColor backColor = CssColor.make("rgba(255,255,255,0.5)");
        CssColor backColor2 = CssColor.make(255,255,255);
    

    }

    step(timeStepMs) {
        //TODO
    }
}
