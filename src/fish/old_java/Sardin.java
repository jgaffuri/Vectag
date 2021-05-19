/**
 * 
 */
package org.ahahah.fish.client;

import java.util.ArrayList;

/**
 * @author julien Gaffuri
 *
 */
public class Sardin {
	final static double D_OBS=50;
	final static double A_OBS=200*Math.PI/180;
	final static double D_COL=10;
	final static double V_TARGET=0.3;
	final static double V_MAX=0.6;

	Sea sea;
	double x=0,y=0; //position, in pix
	double vx=0,vy=0; //speed, in pix per ms
	double v=0, va=0; //speed angle (in -Pi,Pi) and norm
	double ax=0, ay=0; //acceleration, in pix per s2

	public Sardin(Sea sea) {
		this(sea, sea.w*Math.random(), sea.h*Math.random(), 0, 0);
		va=Math.random()*2*Math.PI-Math.PI;
		v=Math.random()*V_MAX;
		vx=v*Math.cos(va);
		vy=v*Math.sin(va);
	}

	public Sardin(Sea sea, double x, double y, double vx, double vy){
		this.sea=sea;

		if(x<0) this.x=0;
		else if(x>sea.w) this.x=sea.w;
		else this.x=x;

		if(y<0) this.y=0;
		else if(y>sea.h) this.y=sea.h;
		else this.y=y;

		this.vx=vx;
		this.vy=vy;
		v=Math.hypot(vx,vy);
		va=Math.atan2(vy,vx);

		sea.grid.add(this, this.x, this.y);
	}





	ArrayList<Sardin> obs = new ArrayList<Sardin>();
	ArrayList<Sardin> col = new ArrayList<Sardin>();
	public void observe() {
		ArrayList<Sardin> ss = sea.grid.get(x-D_OBS, y-D_OBS, x+D_OBS, y+D_OBS);

		obs.clear();
		col.clear();
		ArrayList<Sardin> col = new ArrayList<Sardin>();
		for(Sardin s:ss){
			if(s==this) continue;
			if(d(s)<=D_COL) col.add(s);
			if(d(s)<=D_OBS) {
				//check angle
				double da=Math.atan2(s.y-y,s.x-x)-va;
				if(da>Math.PI) da-=2*Math.PI;
				else if(da<=-Math.PI) da+=2*Math.PI;
				da=Math.abs(da);
				if(da>A_OBS*0.5) continue;
				obs.add(s);
			}
		}

		ax=0; ay=0;

		//repulsion
		for(Sardin s:col){
			double d=d(s);
			double a=1.0*(1/(d*d)-1/(D_COL*D_COL));
			ax+=a*(x-s.x)/d;
			ay+=a*(y-s.y)/d;
		}

		//toward v target
		double dv=(V_TARGET-v)*0.01;
		ax+=dv*vx/v;
		ay+=dv*vy/v;

		//toward the observed mean position
		/*if(obs.size()>1){
			double xn=0,yn=0;
			for(Sardin s:obs){
				xn+=s.x;
				yn+=s.y;
			}
			xn=xn/obs.size();
			yn=yn/obs.size();
			double d=Math.hypot(xn-x,yn-y);
			ax+=-0.1*(x-xn)/d;
			ay+=-0.1*(y-yn)/d;
		}*/

		//toward the observed speed
		double t=0.9;
		if(obs.size()>1){
			double dvx=0,dvy=0;
			for(Sardin s:obs){
				dvx+=s.vx;
				dvy+=s.vy;
			}
			dvx=(t-1)*vx+(1-t)*dvx/obs.size();
			dvy=(t-1)*vy+(1-t)*dvy/obs.size();

			double a=0.1;
			ax+=a*dvx;
			ay+=a*dvy;
		}

		//avoid shark
		if(sea.shark!=null){
			double[] s=sea.shark;
			double d=Math.hypot((s[0]-x), (s[1]-y));
			if(d<=D_OBS){
				double a=5.0*(1/(d*d)-1/(D_OBS*D_OBS));
				ax+=a*(x-s[0])/d;
				ay+=a*(y-s[1])/d;
			}
		}

	}

	public void move() {
		sea.grid.remove(this, this.x, this.y);

		//compute new speed
		vx+=ax*sea.timeStepMs +(1-2*Math.random())*0.02;
		vy+=ay*sea.timeStepMs +(1-2*Math.random())*0.02;
		v=Math.hypot(vx,vy);
		va=Math.atan2(vy, vx);
		if(v>V_MAX){
			v=V_MAX;
			vx=V_MAX*Math.cos(va);
			vy=V_MAX*Math.sin(va);
		}

		//compute new position
		x+=vx*sea.timeStepMs;
		y+=vy*sea.timeStepMs;

		//limit
		if(x<0) x=sea.w;
		if(y<0) y=sea.h;
		if(x>sea.w) x=0;
		if(y>sea.h) y=0;

		sea.grid.add(this, this.x, this.y);
	}

	public double d(Sardin s){
		return Math.hypot((s.x-x), (s.y-y));
	}
}
