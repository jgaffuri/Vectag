package org.ahahah.client;

import org.ahahah.client.Universe;

import com.google.gwt.canvas.client.Canvas;
import com.google.gwt.canvas.dom.client.CssColor;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.RootPanel;

public class Appli implements EntryPoint {

	public void onModuleLoad() {
		RootPanel p = RootPanel.get("viewer");
		String w_ = p.getElement().getStyle().getWidth();
		String h_ = p.getElement().getStyle().getHeight();
		final int w = 500;
		final int h = 500;

		final Canvas c = Canvas.createIfSupported();
		if(c == null){
			Window.alert("Canvas not supported by your Internet browser. Use a recent version of Firefox or Chrome.");
			return;
		}

		c.setSize(w_, h_);
		c.setCoordinateSpaceWidth(w);
		c.setCoordinateSpaceHeight(h);
		p.add(c);

		final Universe u = new Universe(c,w,h);
		u.fill();
		u.start();

		Button restart = new Button("Recommencer!");
		restart.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				u.fill();
				c.getContext2d().setFillStyle(CssColor.make(0,0,0));
				c.getContext2d().fillRect(0, 0, w, h);
			}
		});
		RootPanel.get("b").add(restart);
	}
}
