package org.ahahah.pp.client;

import com.google.gwt.canvas.client.Canvas;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootPanel;

public class Pp implements EntryPoint {

	public void onModuleLoad() {
		//main canvas
		RootPanel p = RootPanel.get("viewer");
		final int w = 500;
		final int h = 500;

		Canvas c = Canvas.createIfSupported();
		if(c==null){
			Window.alert("Canvas not supported by your Internet browser. Use a recent version of Firefox or Chrome.");
			return;
		}

		c.setSize(p.getElement().getStyle().getWidth(), p.getElement().getStyle().getHeight());
		c.setCoordinateSpaceWidth(w);
		c.setCoordinateSpaceHeight(h);
		p.add(c);

		//chart
		p = RootPanel.get("chart");
		int wChart = 500;
		int hChart = 50;

		Canvas cChart = Canvas.createIfSupported();

		cChart.setSize(p.getElement().getStyle().getWidth(), p.getElement().getStyle().getHeight());
		cChart.setCoordinateSpaceWidth(wChart);
		cChart.setCoordinateSpaceHeight(hChart);
		p.add(cChart);

		//land
		final Land l = new Land(c.getContext2d(),cChart.getContext2d(),w,h,wChart,hChart);
		l.fill();
		l.start();


		//controls
		RootPanel pc = RootPanel.get("controls");

		Button reset=new Button("Reset");
		reset.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				l.preys.clear();
				l.predators.clear();
				for(int i=0;i<l.histo.length;i++)
					l.histo[i]=new int[]{0,0};
				l.index=0;
				l.fill();
			}
		});
		pc.add(reset);

		Button addPreys=new Button("Add preys");
		addPreys.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				for(int i=0;i<10;i++)
					l.preys.add(new Animal(Animal.PREY, l, w*Math.random(), h*Math.random()));
			}
		});
		pc.add(addPreys);

		Button addPreds=new Button("Add predators");
		addPreds.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				for(int i=0;i<10;i++)
					l.predators.add(new Animal(Animal.PREDATOR, l, w*Math.random(), h*Math.random()));
			}
		});
		pc.add(addPreds);

		final String pstr="Predator death probability: ";
		final Label lp = new Label(pstr+(int)(l.p*100)+"%");
		pc.add(lp);

		Button pp=new Button("+");
		pp.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				l.p+=0.01;
				if(l.p>1) l.p=1;
				lp.setText(pstr+(int)(l.p*100)+"%");
			}
		});
		pc.add(pp);

		Button pm=new Button("-");
		pm.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				l.p-=0.01;
				if(l.p<0) l.p=0;
				lp.setText(pstr+(int)(l.p*100)+"%");
			}
		});
		pc.add(pm);

		final String qstr="Prey reproduction probability: ";
		final Label lq = new Label(qstr+(int)(l.q*100)+"%");
		pc.add(lq);

		Button qp=new Button("+");
		qp.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				l.q+=0.01;
				if(l.q>1) l.q=1.0;
				lq.setText(qstr+(int)(l.q*100)+"%");
			}
		});
		pc.add(qp);

		Button qm=new Button("-");
		qm.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				l.q-=0.01;
				if(l.q<0) l.q=0.0;
				lq.setText(qstr+(int)(l.q*100)+"%");
			}
		});
		pc.add(qm);

		final String rstr="Predator reproduction probability: ";
		final Label lr = new Label(rstr+(int)(l.r*100)+"%");
		pc.add(lr);

		Button rp=new Button("+");
		rp.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				l.r+=0.01;
				if(l.r>1) l.r=1.0;
				lr.setText(rstr+(int)(l.r*100)+"%");
			}
		});
		pc.add(rp);

		Button rm=new Button("-");
		rm.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				l.r-=0.01;
				if(l.r<0) l.r=0;
				lr.setText(rstr+(int)(l.r*100)+"%");
			}
		});
		pc.add(rm);


		final String nbstr="Neighbor max number: ";
		final Label lnb = new Label(nbstr+l.nb);
		pc.add(lnb);

		Button nbp=new Button("+");
		nbp.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				l.nb+=1;
				lnb.setText(nbstr+l.nb);
			}
		});
		pc.add(nbp);

		Button nbm=new Button("-");
		nbm.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				l.nb-=1;
				if(l.nb<0) l.nb=0;
				lnb.setText(nbstr+l.nb);
			}
		});
		pc.add(nbm);
	}
}
