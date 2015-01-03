/**
 * 
 */
package org.ahahah.fish.client;

import java.util.ArrayList;

import com.google.gwt.canvas.dom.client.Context2d;
import com.google.gwt.canvas.dom.client.CssColor;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.Label;

/**
 * @author julien Gaffuri
 *
 */
public class Sea extends Timer {
	int w,h;

	ArrayList<Sardin> fish = new ArrayList<Sardin>();
	double[] shark; //x,y,a of the shark
	int timeStepMs = 10;
	Grid<Sardin> grid;

	Context2d c2;
	CssColor backColor = CssColor.make("rgba(120,120,255,0.6)");
	double sardinWidth=2;
	double sardinLength=7;
	CssColor sharkColor = CssColor.make(0,0,0);
	double sharkWidth=4;
	double sharkLength=12;

	final static double D_SHARK_EAT=12;
	CssColor bloodColor = CssColor.make(255,0,0);

	static int EATEN_SARDIN_NB=0;
	Label eatenFishNb=new Label("Eaten fish: 0");

	CheckBox fishView = new CheckBox("Fish perception field",false);
	CheckBox fishHalo = new CheckBox("Fish collision",false);

	public Sea(Context2d c2, int w, int h, int nb){
		this.c2=c2;
		this.w=w;
		this.h=h;
		this.grid=new Grid<Sardin>(w,h,Sardin.D_OBS);
		this.shark=null;
		for(int i=0;i<nb;i++)
			fish.add(new Sardin(this));
	}

	@Override
	public void run() {

		//observe
		for(Sardin sa:fish)
			sa.observe();

		//move
		for(Sardin sa:fish)
			sa.move();

		//shark eat fish
		ArrayList<Sardin> killed = sharkEat();

		//display
		//c2.clearRect(0, 0, w, h);
		c2.setFillStyle(backColor);
		c2.fillRect(0, 0, w, h);

		//blood
		c2.setFillStyle(bloodColor);
		for(Sardin sa:killed){
			c2.beginPath();
			c2.moveTo(sa.x, sa.y);
			c2.arc(sa.x, sa.y, 4, 0, 2*Math.PI);
			c2.closePath();
			c2.fill();
		}

		//display sardins
		c2.setLineWidth(sardinWidth);
		for(Sardin sa:fish)
			display(sa);


		//display halos
		//vision
		if(fishView.getValue()){
			c2.setFillStyle(CssColor.make("rgba(255,255,255,0.3)"));
			c2.setLineWidth(1);
			for(Sardin sa:fish){
				c2.beginPath();
				c2.moveTo(sa.x, sa.y);
				c2.arc(sa.x, sa.y, Sardin.D_OBS, sa.va-Sardin.A_OBS*0.5, sa.va+Sardin.A_OBS*0.5);
				c2.closePath();
				c2.fill();
			}
			c2.setStrokeStyle(CssColor.make(255,0,255));
			c2.setLineWidth(0.5);
			for(Sardin sa:fish){
				for(Sardin sa2:sa.obs){
					c2.beginPath();
					c2.moveTo(sa.x,sa.y);
					c2.lineTo(sa2.x,sa2.y);
					c2.closePath();
					c2.stroke();
				}
			}
		}
		//collision
		if(fishHalo.getValue()){
			c2.setLineWidth(1);
			c2.setStrokeStyle(CssColor.make(255,0,0));
			for(Sardin sa:fish){
				c2.beginPath();
				c2.arc(sa.x, sa.y, Sardin.D_COL*0.5, 0, 2*Math.PI);
				c2.closePath();
				c2.stroke();
			}
		}


		//display shark
		if(shark!=null){
			double x=shark[0];
			double y=shark[1];

			c2.setLineWidth(sharkWidth);
			c2.setStrokeStyle(sharkColor);

			double dx=sharkLength*Math.cos(shark[2])*0.5;
			double dy=sharkLength*Math.sin(shark[2])*0.5;

			c2.beginPath();
			c2.moveTo(x-dx,y-dy);
			c2.lineTo(x+dx,y+dy);
			c2.closePath();
			c2.stroke();
		}

	}

	private ArrayList<Sardin> sharkEat() {
		ArrayList<Sardin> killed = new ArrayList<Sardin>();
		if(shark==null) return killed;
		double x=shark[0], y=shark[1];
		ArrayList<Sardin> ss = grid.get(x-D_SHARK_EAT, y-D_SHARK_EAT, x+D_SHARK_EAT, y+D_SHARK_EAT);
		for(Sardin s:ss){
			double d=Math.hypot((x-s.x), (y-s.y));
			if(d>D_SHARK_EAT) continue;
			killed.add(s);
			fish.remove(s);
			grid.remove(s, s.x, s.y);
		}
		EATEN_SARDIN_NB += killed.size();
		eatenFishNb.setText("Eaten fish: "+EATEN_SARDIN_NB);
		return killed;
	}

	private void display(Sardin sa) {
		int c=(int)(255*Math.abs(sa.va)/Math.PI);
		c2.setStrokeStyle( CssColor.make(255,255,c) );
		double a=sardinLength/sa.v;
		double dx=a*sa.vx*0.5;
		double dy=a*sa.vy*0.5;

		c2.beginPath();
		c2.moveTo(sa.x-dx,sa.y-dy);
		c2.lineTo(sa.x+dx,sa.y+dy);
		c2.closePath();
		c2.stroke();
	}

}
