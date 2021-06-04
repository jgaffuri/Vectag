import { Grid } from '../base/grid';
import { removeFromArrayS } from '../base/lib';

export class Land {

    constructor(w, h) {

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
        this.grid = new Grid(w, h, this.d);



        /*int[][] histo;
        int index=0;
        this.c2Chart=c2Chart;
        this.hChart=hChart;
        this.histo=new int[wChart][];
        for(int i=0;i<wChart;i++)
            histo[i]=new int[]{0,0};*/


    }


    step(timeStepMs) {

        //observe
        for (let a of this.preys) a.observe();
        for (let a of this.predators) a.observe();

        const preysToBorn = []
        const preysToDie = []
        const predsToBorn = []
        const predsToDie = []

        //prey reproduction if no predator around
        for (let prey of this.preys) {
            if (Math.random() > this.q) continue;
            if (prey.predators.length != 0) continue;
            if (prey.preys.length >= this.nb) continue;
            preysToBorn.push(prey.makeChild());
        }

        for (let pred of this.predators) {
            if (pred.preys.length == 0) {
                //no prey around: predator dies with probability p
                if (Math.random() < this.p) predsToDie.push(pred);
            } else {
                //prey eaten
                const preyToEat = pred.preys.get((int)(pred.preys.length * Math.random()));
                preysToDie.push(preyToEat);

                //predator reproduction
                if (Math.random() > r) continue;
                if (pred.predators.length >= nb) continue;
                predsToBorn.push(pred.makeChild());
            }
        }

        this.preys.push(...preysToBorn);
        this.predators.push(...predsToBorn);

        //this.preys.removeAll(preysToDie);
        //this.preys = this.preys.filter(x => !preysToDie.has(x));
        removeFromArrayS(this.preys, preysToDie)

        for (let a of preysToDie) this.grid.remove(a, a.x, a.y);

        //this.predators.removeAll(predsToDie);
        //this.predators = this.predators.filter(x => !predsToDie.has(x));
        removeFromArrayS(this.predators, predsToDie)

        for (let a of predsToDie) this.grid.remove(a, a.x, a.y);

        //move
        for (let a of this.preys)
            a.move();
        for (let a of this.predators)
            a.move();

        /*/histo
        histo[index] = new int[]{ preys.size(), predators.size() };
        if (index == histo.length - 1) index = 0;
        else index++;*/

    }
}
