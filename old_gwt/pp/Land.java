/**
 * 
 */
package org.ahahah.pp.client;

import java.util.ArrayList;


import com.google.gwt.canvas.dom.client.Context2d;
import com.google.gwt.canvas.dom.client.CssColor;
import com.google.gwt.user.client.Timer;

/**
 * @author julien Gaffuri
 *
 */
public class Land extends Timer {
	int w,h;

	double p=0.02; //predator death probability
	double q=0.1; //prey reproduction probability
	double r=0.5; //eaten prey transformation probability
	int nb=3; //neighbors number

	ArrayList<Animal> predators = new ArrayList<Animal>();
	ArrayList<Animal> preys = new ArrayList<Animal>();
	double d = 10;
	int timeStepMs = 20;
	Grid<Animal> grid;

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

	public Land(Context2d c2, Context2d c2Chart, int w, int h, int wChart, int hChart){
		this.c2=c2;
		this.c2Chart=c2Chart;
		this.hChart=hChart;
		this.w = w;
		this.h = h;
		this.grid = new Grid<Animal>(w,h,d);
		this.histo=new int[wChart][];
		for(int i=0;i<wChart;i++)
			histo[i]=new int[]{0,0};
		c2.setFillStyle(backColor2);
		c2.fillRect(0, 0, w, h);
	}

	public void fill() {
		for(int i=0;i<5;i++)
			preys.add(new Animal(Animal.PREY, this, w*Math.random(), h*Math.random()));
		for(int i=0;i<150;i++)
			predators.add(new Animal(Animal.PREDATOR, this, w*Math.random(), h*Math.random()));
	}

	@Override
	public void run() {
		//observe
		for(Animal a:preys) a.observe();
		for(Animal a:predators) a.observe();

		ArrayList<Animal> preysToBorn = new ArrayList<Animal>();
		ArrayList<Animal> preysToDie = new ArrayList<Animal>();
		ArrayList<Animal> predsToBorn = new ArrayList<Animal>();
		ArrayList<Animal> predsToDie = new ArrayList<Animal>();

		//prey reproduction if no predator around
		for(Animal prey:preys){
			if(Math.random()>q) continue;
			if(prey.predators.size()!=0) continue;
			if(prey.preys.size()>=nb) continue;
			preysToBorn.add(prey.makeChild());
		}

		for(Animal pred:predators){
			if(pred.preys.size()==0){
				//no prey around: predator dies with probability p
				if(Math.random()<p) predsToDie.add(pred);
			} else {
				//prey eaten
				Animal preyToEat = pred.preys.get((int)(pred.preys.size()*Math.random()));
				preysToDie.add(preyToEat);

				//predator reproduction
				if(Math.random()>r) continue;
				if(pred.predators.size()>=nb) continue;
				predsToBorn.add(pred.makeChild());
			}
		}

		preys.addAll(preysToBorn);
		predators.addAll(predsToBorn);
		preys.removeAll(preysToDie);
		for(Animal a:preysToDie) grid.remove(a, a.x, a.y);
		predators.removeAll(predsToDie);
		for(Animal a:predsToDie) grid.remove(a, a.x, a.y);

		//animal movements
		for(Animal a:preys) a.move();
		for(Animal a:predators) a.move();

		//histo
		histo[index]=new int[]{preys.size(),predators.size()};
		if(index==histo.length-1) index=0;
		else index++;

		//display

		//c2.clearRect(0, 0, w, h);
		c2.setFillStyle(backColor);
		c2.fillRect(0, 0, w, h);

		//display animals
		c2.setFillStyle(preyColor);
		for(Animal a:preys)
			display(a);
		c2.setFillStyle(predatorColor);
		for(Animal a:predators)
			display(a);

		//label
		c2.setFillStyle(CssColor.make(200,200,200));
		c2.fillRect(0, 0, 65, 13);
		c2.setFillStyle(CssColor.make(0,0,0));
		c2.fillText(preys.size() + "/" + predators.size(), 2, 10);

		//chart
		c2Chart.setFillStyle(backColor2);
		c2Chart.fillRect(0, 0, w, h);

		double max=getMaxHisto();
		if(max!=0){
			double h1,h2;
			for(int i=0;i<histo.length;i++){
				h1=hChart*histo[i][0]/max;
				h2=hChart*histo[i][1]/max;
				c2Chart.setFillStyle(preyColor2);
				c2Chart.fillRect(i, hChart-h1, 1, h1);
				c2Chart.setFillStyle(predatorColor2);
				c2Chart.fillRect(i, hChart-h2, 1, h2);
			}
		}
		c2Chart.setFillStyle(CssColor.make(255,255,255));
		c2Chart.fillRect(index, 0, 1, hChart);
	}

	private void display(Animal a) {
		c2.fillRect(a.x, a.y, 3, 3);
		/*c2.beginPath();
		c2.arc(a.x, a.y, 0.5, 0, 2*Math.PI);
		c2.closePath();
		c2.fill();*/
	}

	public void start(){
		scheduleRepeating(timeStepMs);
	}

	public int getMaxHisto() {
		int max=0;
		for(int i=0;i<histo.length;i++){
			if(histo[i][0]>max) max=histo[i][0];
			if(histo[i][1]>max) max=histo[i][1];
		}
		return max;
	}

}
