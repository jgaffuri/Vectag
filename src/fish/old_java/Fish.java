package org.ahahah.fish.client;

import com.google.gwt.canvas.client.Canvas;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.MouseMoveEvent;
import com.google.gwt.event.dom.client.MouseMoveHandler;
import com.google.gwt.event.dom.client.MouseOutEvent;
import com.google.gwt.event.dom.client.MouseOutHandler;
import com.google.gwt.event.dom.client.MouseOverEvent;
import com.google.gwt.event.dom.client.MouseOverHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.RootPanel;

public class Fish implements EntryPoint {

	public void onModuleLoad() {
		RootPanel p = RootPanel.get("viewer");
		final int w = 500;
		final int h = 500;

		final Canvas c = Canvas.createIfSupported();
		if(c==null){
			Window.alert("Canvas not supported by your Internet browser. Use a recent version of Firefox or Chrome.");
			return;
		}

		c.setSize(p.getElement().getStyle().getWidth(), p.getElement().getStyle().getHeight());
		c.setCoordinateSpaceWidth(w);
		c.setCoordinateSpaceHeight(h);
		p.add(c);

		//sea
		final Sea s = new Sea(c.getContext2d(),w,h,300);
		s.scheduleRepeating(s.timeStepMs);

		//mouse listeners
		c.addMouseOverHandler(new MouseOverHandler() {
			@Override
			public void onMouseOver(MouseOverEvent e) {
				s.shark=new double[]{e.getX(),e.getY(),0};
			}
		});
		c.addMouseMoveHandler(new MouseMoveHandler() {
			@Override
			public void onMouseMove(MouseMoveEvent e) {
				double a=Math.atan2(e.getY()-s.shark[1],e.getX()-s.shark[0]);
				s.shark=new double[]{e.getX(),e.getY(),a};
			}
		});
		c.addMouseOutHandler(new MouseOutHandler() {
			@Override
			public void onMouseOut(MouseOutEvent e) {
				s.shark=null;
			}
		});


		//controls
		RootPanel pc = RootPanel.get("controls");

		//add fish button
		Button addFish=new Button("Add fish");
		addFish.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				for(int i=0;i<10;i++)
					s.fish.add(new Sardin(s));
			}
		});
		pc.add(addFish);

		//add eaten fish nb label
		pc.add(s.eatenFishNb);

		//add visibility checkboxes
		pc.add(s.fishView);
		pc.add(s.fishHalo);
	}
}
