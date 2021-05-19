/**
 * 
 */
package org.ahahah.client.life;

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

	ArrayList<Animal> as = new ArrayList<Animal>();
	ArrayList<Animal> toDie = new ArrayList<Animal>();
	ArrayList<Animal> toBorn = new ArrayList<Animal>();
	int timeStepMs = 10;

	public Land(Canvas c, int w, int h){
		this.c = c;
		this.c2 = c.getContext2d();
		this.w = w;
		this.h = h;
	}

	public void fill() {
		int nb = 10000;
		for(int i=0;i<nb;i++){
			as.add(new Animal(this, w*Math.random(), h*Math.random()));
		}
	}

	@Override
	public void run() {

		//observation
		for(Animal a:as)
			a.observe();

		//action
		for(Animal a:as)
			a.change();
		as.addAll(toBorn);
		as.removeAll(toDie);
		toBorn.clear();
		toDie.clear();

		//display

		//c2.clearRect(0, 0, w, h);
		c2.setFillStyle(CssColor.make("rgba(255,255,255,0.01)"));

		//display planets
		c2.fillRect(0, 0, w, h);
		for(Animal a:as)
			a.display();

		//label
		c2.setFillStyle(CssColor.make(200,200,200));
		c2.fillRect(0, 0, 65, 13);
		c2.setFillStyle(CssColor.make(0,0,0));
		c2.fillText(as.size() + " animals", 2, 10);
	}

	/*
	private ArrayList<Couple> formCouples() {
		ArrayList<Couple> couples = new ArrayList<Couple>();
		ArrayList<Animal> ans = new ArrayList<Animal>();
		ans.addAll(animals);
		Couple c = getClosest(ans);
		while(c!=null && c.a1.d(c.a2) <= D){
			couples.add(c);
			ans.remove(c.a1);
			ans.remove(c.a2);
			c = getClosest(ans);
		}
		return couples;
	}

	private Couple getClosest(ArrayList<Animal> ans) {
		double dmin = Double.MAX_VALUE;
		Couple c=null;
		for(int i=0;i<ans.size();i++){
			Animal ai=ans.get(i);
			for(int j=i+1;j<ans.size();j++){
				Animal aj=ans.get(j);
				if(ai.d(aj)<dmin)
					c = new Couple(ai,aj);
			}
		}
		return c;
	}

	private void reproduction(ArrayList<Couple> cs) {
		for(Couple c : cs){
			Animal a = new Animal(this, (c.a1.x+c.a2.x)*0.5, (c.a1.y+c.a2.y)*0.5);
			animals.add(a);
		}
	}

	private void dead() {
		//alone


		//too close
	}*/

	public void start(){
		scheduleRepeating(timeStepMs);
	}

}
