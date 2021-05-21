import { Grid } from '../base/grid';
import { Animal } from './Animal';

class Land {

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
        this.grid
        this.grid = new Grid(w, h, d);



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
            if (Math.random() > q) continue;
            if (prey.predators.length != 0) continue;
            if (prey.preys.length >= nb) continue;
            preysToBorn.push(prey.makeChild());
        }

        for (let pred of this.predators) {
            if (pred.preys.size() == 0) {
                //no prey around: predator dies with probability p
                if (Math.random() < p) predsToDie.add(pred);
            } else {
                //prey eaten
                Animal preyToEat = pred.preys.get((int)(pred.preys.size() * Math.random()));
                preysToDie.add(preyToEat);

                //predator reproduction
                if (Math.random() > r) continue;
                if (pred.predators.size() >= nb) continue;
                predsToBorn.add(pred.makeChild());
            }
        }

        preys.addAll(preysToBorn);
        predators.addAll(predsToBorn);
        preys.removeAll(preysToDie);
        for (Animal a: preysToDie) grid.remove(a, a.x, a.y);
        predators.removeAll(predsToDie);
        for (Animal a: predsToDie) grid.remove(a, a.x, a.y);

        //animal movements
        for (Animal a: preys) a.move();
        for (Animal a: predators) a.move();

        //histo
        histo[index] = new int[]{ preys.size(), predators.size() };
        if (index == histo.length - 1) index = 0;
        else index++;

        //display

        //c2.clearRect(0, 0, w, h);
        c2.setFillStyle(backColor);
        c2.fillRect(0, 0, w, h);

        //display animals
        c2.setFillStyle(preyColor);
        for (Animal a: preys)
        display(a);
        c2.setFillStyle(predatorColor);
        for (Animal a: predators)
        display(a);

        /*private void display(Animal a) {
            c2.fillRect(a.x, a.y, 3, 3);
            /*c2.beginPath();
            c2.arc(a.x, a.y, 0.5, 0, 2*Math.PI);
            c2.closePath();
            c2.fill();*/
        //} */



        //label
        c2.setFillStyle(CssColor.make(200, 200, 200));
        c2.fillRect(0, 0, 65, 13);
        c2.setFillStyle(CssColor.make(0, 0, 0));
        c2.fillText(preys.size() + "/" + predators.size(), 2, 10);

        //chart
        c2Chart.setFillStyle(backColor2);
        c2Chart.fillRect(0, 0, w, h);

        double max = getMaxHisto();
        /*public int getMaxHisto() {
            int max=0;
            for(int i=0;i<histo.length;i++){
                if(histo[i][0]>max) max=histo[i][0];
                if(histo[i][1]>max) max=histo[i][1];
            }
            return max;
        }*/

        if (max != 0) {
            double h1, h2;
            for (int i = 0; i < histo.length; i++) {
                h1 = hChart * histo[i][0] / max;
                h2 = hChart * histo[i][1] / max;
                c2Chart.setFillStyle(preyColor2);
                c2Chart.fillRect(i, hChart - h1, 1, h1);
                c2Chart.setFillStyle(predatorColor2);
                c2Chart.fillRect(i, hChart - h2, 1, h2);
            }
        }
        c2Chart.setFillStyle(CssColor.make(255, 255, 255));
        c2Chart.fillRect(index, 0, 1, hChart);
    }
}
