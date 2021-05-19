package org.ahahah.client;

import com.google.gwt.canvas.client.Canvas;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.event.dom.client.MouseDownEvent;
import com.google.gwt.event.dom.client.MouseDownHandler;
import com.google.gwt.event.dom.client.MouseMoveEvent;
import com.google.gwt.event.dom.client.MouseMoveHandler;
import com.google.gwt.event.dom.client.MouseUpEvent;
import com.google.gwt.event.dom.client.MouseUpHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.RootPanel;

public class Life implements EntryPoint {
	boolean mouseDown = false;

	/*
    "Any live cell with 0 or 1 live neighbours dies, as if caused by under-population"
    -> if number of d-neig is 0 or 1: dies.
    Any live cell with 2 or 3 live neighbours lives on to the next generation.
    -> if number of d-neig is 2 or 3: stay alive.
    Any live cell with more than three live neighbours dies, as if by overcrowding.
    -> if number of d-neig is 4 or more: dies.
    Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
    -> any location within d from exacly 3 live becomes alive
	 */

	public void onModuleLoad() {
		RootPanel p = RootPanel.get("viewer");
		String w_ = p.getElement().getStyle().getWidth();
		String h_ = p.getElement().getStyle().getHeight();
		final int w = 500;
		final int h = 500;

		Canvas c = Canvas.createIfSupported();
		if(c == null){
			Window.alert("Canvas not supported by your Internet browser. Use a recent version of Firefox or Chrome.");
			return;
		}

		c.setSize(w_, h_);
		c.setCoordinateSpaceWidth(w);
		c.setCoordinateSpaceHeight(h);
		p.add(c);

		final Land l = new Land(c,w,h);
		l.fill();
		l.start();

		c.addMouseDownHandler(new MouseDownHandler() {
			@Override
			public void onMouseDown(MouseDownEvent e) {
				mouseDown=true;
			}
		});
		c.addMouseUpHandler(new MouseUpHandler() {
			@Override
			public void onMouseUp(MouseUpEvent e) {
				mouseDown=false;
			}
		});
		c.addMouseMoveHandler(new MouseMoveHandler() {
			@Override
			public void onMouseMove(MouseMoveEvent e) {
				if(!mouseDown) return;
				l.pop.add(new Animal(l, e.getX(), e.getY()));
			}
		});

	}
}
