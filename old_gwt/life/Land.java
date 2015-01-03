/**
 * 
 */
package org.ahahah.client;

import java.util.ArrayList;

import com.google.gwt.canvas.client.Canvas;
import com.google.gwt.canvas.dom.client.Context2d;
import com.google.gwt.canvas.dom.client.CssColor;
import com.google.gwt.user.client.Timer;

/**
 * @author julien Gaffuri
 *
 */
public class Land extends Timer {
	int w,h;
	Canvas c;
	Context2d c2;
	CssColor color = CssColor.make(0,0,0);
	Grid<Animal> grid;

	ArrayList<Animal> pop = new ArrayList<Animal>();
	double d = 20;
	int timeStepMs = 20;

	public Land(Canvas c, int w, int h){
		this.c = c;
		this.c2 = c.getContext2d();
		this.w = w;
		this.h = h;
		this.grid=new Grid<Animal>(w, h, d);
	}

	public void fill() {
		int nb = 1400;
		double r=0.4;
		for(int i=0;i<nb;i++)
			pop.add(new Animal(this, w*(0.5+r*(Math.random()-0.5)), h*(0.5+r*(Math.random()-0.5))));
	}

	@Override
	public void run() {
		//observe
		for(Animal a:pop)
			a.observe();

		//change
		ArrayList<Animal> toBorn = getToBorn();
		ArrayList<Animal> toDie = getToDie();
		pop.addAll(toBorn);
		pop.removeAll(toDie);
		for(Animal a:toDie) grid.remove(a, a.x, a.y);

		//display
		c2.clearRect(0, 0, w, h);
		//c2.setFillStyle(CssColor.make("rgba(255,255,255,0.01)"));
		//c2.fillRect(0, 0, w, h);

		//display animals
		for(Animal a:pop){
			c2.setFillStyle(color);
			c2.beginPath();
			c2.arc(a.x, a.y, d*0.5*0.3, 0, 2*Math.PI);
			c2.closePath();
			c2.fill();
		}
		//display d circles
		for(Animal a:pop){
			c2.setStrokeStyle(CssColor.make(255,0,0));
			c2.beginPath();
			c2.arc(a.x, a.y, d, 0, 2*Math.PI);
			c2.closePath();
			c2.stroke();
		}

		//label
		c2.setFillStyle(CssColor.make(200,200,200));
		c2.fillRect(0, 0, 65, 13);
		c2.setFillStyle(CssColor.make(0,0,0));
		c2.fillText(pop.size() + " animals", 2, 10);
	}

	private ArrayList<Animal> getToBorn() {
		ArrayList<Animal> toBorn = new ArrayList<Animal>();
		for(int i=0; i<pop.size(); i++){
			Animal ai=pop.get(i);
			//if the number of neighbours is 2, make child(ren)
			if(ai.ns.size()!=1) continue;
			Animal aj = ai.ns.get(0);
			int j=pop.indexOf(aj);
			if(j<i) continue;
			toBorn.add(new Animal(this,(ai.x+aj.x)*0.5,(ai.y+aj.y)*0.5));
		}
		return toBorn;
	}

	private ArrayList<Animal> getToDie() {
		ArrayList<Animal> toDie = new ArrayList<Animal>();
		for(Animal a:pop)
			//if the number is 0 or 1 or 4 or 5 or more, die
			//if the number is 2 or 3, stay alive
			if(a.ns.size()<=1 || a.ns.size()>=4)
				toDie.add(a);
		return toDie;
	}

	public void start(){
		scheduleRepeating(timeStepMs);
	}

}
