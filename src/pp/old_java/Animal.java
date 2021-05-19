/**
 * 
 */
package org.ahahah.pp.client;

import java.util.ArrayList;

/**
 * @author julien Gaffuri
 *
 */
public class Animal {
	final static int PREY=0;
	final static int PREDATOR=1;
	final static double V_MAX = 0.1;

	Land l;
	double x=0,y=0; //position, in pix
	double vx=0,vy=0; //speed, in pix per ms
	int type;
	ArrayList<Animal> predators=new ArrayList<Animal>();
	ArrayList<Animal> preys=new ArrayList<Animal>();

	public Animal(int type, Land l, double x, double y){
		this.type=type;
		this.l=l;

		if(x<0) this.x=0;
		else if(x>l.w) this.x=l.w;
		else this.x=x;

		if(y<0) this.y=0;
		else if(y>l.h) this.y=l.h;
		else this.y=y;

		l.grid.add(this, this.x, this.y);
	}

	public double d(Animal a){
		return Math.hypot((a.x-x), (a.y-y));
	}

	public void move() {
		l.grid.remove(this, this.x, this.y);

		double a=Math.random()*2*Math.PI;
		double r=0.01*Math.random();

		vx+=r*Math.cos(a)*l.timeStepMs;
		if(vx>V_MAX) vx=V_MAX;
		else if(vx<-V_MAX) vx=-V_MAX;
		vy+=r*Math.sin(a)*l.timeStepMs;
		if(vy>V_MAX) vy=V_MAX;
		else if(vy<-V_MAX) vy=-V_MAX;

		x+=vx*l.timeStepMs;
		if(x<0) x=l.w;
		else if(x>l.w) x=0;

		y+=vy*l.timeStepMs;
		if(y<0) y=l.h;
		else if(y>l.h) y=0;

		l.grid.add(this, this.x, this.y);
	}

	public void observe() {
		ArrayList<Animal> as = l.grid.get(x-l.d, y-l.d, x+l.d, y+l.d);

		preys.clear();
		predators.clear();
		for(Animal a:as){
			if(a==this) continue;
			if(d(a)>l.d) continue;
			if(a.type==Animal.PREY)
				preys.add(a);
			else
				predators.add(a);
		}
	}

	public Animal makeChild() {
		//do better: make child around
		return new Animal(type, l, x, y);
	}

}
