export class Sea {

	static timeStepMs = 10;

	static backColor = "rgba(120,120,255,0.6)";

    static sardinWidth=2;
	static sardinLength=7;
	static sharkColor = "black";
	static sharkWidth=4;
	static sharkLength=12;

	static D_SHARK_EAT=12;
	static bloodColor = "red";
	static EATEN_SARDIN_NB=0;


    constructor(nb, w, h) {
        this.w = w;
        this.h = h;
        this.grid = new Grid(w, h, Sardin.D_OBS);
        this.shark = null;

        this.fish = []
        for (let i = 0; i < nb; i++)
            this.fish.push(new Sardin(this));
    }

}
