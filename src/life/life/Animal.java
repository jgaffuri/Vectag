/**
 * 
 */
package org.ahahah.client;

import java.util.ArrayList;

/**
 * @author julien Gaffuri
 *
 */
public class Animal {
	Land l;
	double x=0,y=0; //position, in pix
	ArrayList<Animal> ns = new ArrayList<Animal>();

	public Animal(Land l, double x, double y){
		this.l = l;

		if(x<0) this.x = 0;
		else if(x>l.w) this.x = l.w;
		else this.x = x;

		if(y<0) this.y = 0;
		else if(y>l.h) this.y = l.h;
		else this.y = y;

		l.grid.add(this, this.x, this.y);
	}

	public double d(Animal a){
		return Math.hypot((a.x-x), (a.y-y));
	}

	public void observe() {
		ArrayList<Animal> as = l.grid.get(x-l.d, y-l.d, x+l.d, y+l.d);

		ns.clear();
		for(Animal a:as){
			if(a==this) continue;
			if(d(a)>l.d) continue;
			ns.add(a);
		}
	}

	/*
	private ArrayList<Animal> makeChildren() {
		ArrayList<Animal> children = new ArrayList<Animal>();
		Animal a1=as.get(0);
		Animal a2=as.get(1);
		double x_=x+(a1.x+a2.x-2*x);
		double y_=y+(a1.y+a2.y-2*y);
		//double x_=(x+a1.x+a2.x)/3;
		//double y_=(y+a1.y+a2.y)/3;
		children.add( new Animal(l,x_,y_) );
		return children;
	}*/

}
