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
public class Universe extends Timer {
	int w,h;
	Canvas c;
	Context2d c2;

	ArrayList<Planet> ps;
	int nb = 500;
	double mi=0.5;
	int timeStepMs = 10;

	public Universe(Canvas c, int w, int h){
		this.c = c;
		this.c2 = c.getContext2d();
		this.w = w;
		this.h = h;
		ps = new ArrayList<Planet>();

		c2.setFillStyle(CssColor.make(0,0,0));
		c2.fillRect(0, 0, w, h);
	}

	public void fill() {
		ps.clear();
		double minSpeed = 0.0;
		double maxSpeed = 0.0;
		for(int i=0;i<nb;i++){
			double speed = minSpeed + Math.random()*(maxSpeed-minSpeed);
			double angle = 2*Math.random()*Math.PI;
			ps.add(new Planet(this, mi, w*Math.random(), h*Math.random(), speed*Math.cos(angle), speed*Math.sin(angle)));
		}
	}

	@Override
	public void run() {

		//observation
		for(Planet p:ps)
			p.observe();

		//action
		for(Planet p:ps)
			p.change();

		//collision detections
		Planet[] agg = findCollision();
		while(agg!=null){
			ps.add(aggregate(agg));
			ps.remove(agg[0]);
			ps.remove(agg[1]);
			agg = findCollision();
		}

		//display

		//c2.clearRect(0, 0, w, h);
		c2.setFillStyle(CssColor.make("rgba(0,0,0,0.05)"));
		c2.fillRect(0, 0, w, h);

		//display planets
		for(Planet p : ps){
			c2.setFillStyle(p.color);
			//c2.setStrokeStyle(color);
			c2.beginPath();
			c2.arc(p.x, p.y, p.r(), 0, 2*Math.PI);
			c2.closePath();
			c2.fill();
			//double size = 2*r();
			//c2.fillRect(x-size*0.5, y-size*0.5, size, size);
		}

		//label
		c2.setFillStyle(CssColor.make(200,200,200));
		c2.fillRect(0, 0, 65, 13);
		c2.setFillStyle(CssColor.make(0,0,0));
		c2.fillText(ps.size() + " planets", 2, 10);
	}

	private Planet[] findCollision() {
		for(int i=0; i<ps.size(); i++){
			Planet pi=ps.get(i);
			for(int j=i+1; j<ps.size(); j++){
				Planet pj=ps.get(j);
				double d1=pi.d(pj);
				double d2=pi.r()+pj.r();
				if(d1>d2) continue;
				return new Planet[]{pi,pj};
			}
		}
		return null;
	}

	private Planet aggregate(Planet[] agg) {
		Planet p1=agg[0];
		Planet p2=agg[1];
		double m=p1.m+p2.m;
		return new Planet(this,
				m,
				(p1.x*p1.m+p2.x*p2.m)/m,
				(p1.y*p1.m+p2.y*p2.m)/m,
				(p1.vx*p1.m+p2.vx*p2.m)/m,
				(p1.vy*p1.m+p2.vy*p2.m)/m
				);
	}

	public void start(){
		scheduleRepeating(timeStepMs);
	}

}
