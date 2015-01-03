/**
 * 
 */
package org.ahahah.client;

import com.google.gwt.canvas.dom.client.CssColor;

/**
 * @author julien Gaffuri
 *
 */
public class Planet {
	Universe u;

	double x=0,y=0; //position, in pix
	double vx=0,vy=0; // speed, in pix per ms

	double fx=0, fy=0; //force, in N
	double m=1; //mass, in kg

	CssColor color = null;

	public Planet(Universe u, double m, double x, double y, double vx, double vy){
		this.u = u;
		this.m = m;

		double r=r();
		if(x<r) this.x = r;
		else if(x>u.w-r) this.x = u.w-r;
		else this.x = x;

		if(y<r) this.y = r;
		else if(y>u.h-r) this.y = u.h-r;
		else this.y = y;

		this.vx = vx;
		this.vy = vy;

		double t=m/(u.nb*u.mi);
		color = CssColor.make(255,255,(int)(255*(1-t)));
	}

	public void observe() {
		//update the force
		fx=0; fy=0;
		for(Planet p:u.ps){
			if(this==p) continue;
			double d=d(p);
			d=d*d*d;
			fx += 0.01*(p.x-x)*m*p.m/d;
			fy += 0.01*(p.y-y)*m*p.m/d;
		}
	}

	public double d(Planet p){
		return Math.hypot((p.x-x), (p.y-y));
	}

	public double r(){
		return Math.sqrt(m/Math.PI);
	}

	public void change(){
		//compute acceleration
		double ax=fx/m;
		double ay=fy/m;

		//compute new speed
		vx+=ax*u.timeStepMs;
		vy+=ay*u.timeStepMs;

		//compute new position
		x+=vx*u.timeStepMs;
		y+=vy*u.timeStepMs;

		//limit
		/*double r=r();
		if(x<r) { x=r; vx=-vx*e; }
		if(y<r) { y=r; vy=-vy*e; }
		if(x>u.w-r) { x=u.w-r; vx=-vx*e; }
		if(y>u.h-r) { y=u.h-r; vy=-vy*e; }*/
		if(x<0) { x=u.w; }
		if(y<0) { y=u.h; }
		if(x>u.w) { x=0; }
		if(y>u.h) { y=0; }
	}
}
