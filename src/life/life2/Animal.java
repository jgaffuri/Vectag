/**
 * 
 */
package org.ahahah.client.life;

import java.util.ArrayList;

import com.google.gwt.canvas.dom.client.CssColor;
import com.google.gwt.canvas.dom.client.FillStrokeStyle;

/**
 * @author julien Gaffuri
 *
 */
public class Animal {
	private static final double D = 1;

	Land l;

	double x=0,y=0; //position, in pix
	ArrayList<Animal> as = new ArrayList<Animal>();

	FillStrokeStyle color = CssColor.make(0,0,0);

	public Animal(Land l, double x, double y){
		this.l = l;

		if(x<0) this.x = 0;
		else if(x>l.w) this.x = l.w;
		else this.x = x;

		if(y<0) this.y = 0;
		else if(y>l.h) this.y = l.h;
		else this.y = y;
	}

	public void observe() {
		as.clear();
		for(Animal a:l.as){
			if(a==this) continue;
			if(d(a)<=D)
				as.add(a);
		}
	}

	public double d(Animal a){
		return Math.hypot((a.x-x), (a.y-y));
	}

	public void change() {
		//if the number is 0 or 1 or 4 or 5 or more, die
		//if the number is 2 or 3, stay alive
		if(as.size()<=1 || as.size()>=4)
			l.toDie.add(this);
		//if the number of others is 2, child
		else if(as.size()==2){
			Animal a1=as.get(0);
			Animal a2=as.get(1);
			Animal a = new Animal(l, (x+a1.x+a2.x)/3, (y+a1.y+a2.y)/3);
			l.toBorn.add(a);
		}
	}

	public void display() {
		l.c2.setFillStyle(color );
		//c2.setStrokeStyle(color);
		l.c2.beginPath();
		l.c2.arc(x, y, 1, 0, 2*Math.PI);
		l.c2.closePath();
		l.c2.fill();
		//double size = 2*r();
		//u.c2.fillRect(x-size*0.5, y-size*0.5, size, size);
	}

}
