/**
 * 
 */
package org.ahahah.pp.client;

import java.util.ArrayList;

/**
 * @author julien Gaffuri
 *
 */
public class Grid<T> {
	double res;
	ArrayList<T>[][] cells;
	int lengthX, lengthY;
	@SuppressWarnings("unchecked")
	public Grid(double w, double h, double res){
		this.res=res;
		lengthX=(int)(w/res+1);
		lengthY=(int)(h/res+1);
		cells=new ArrayList[lengthX][];
		for(int i=0;i<lengthX;i++){
			cells[i]=new ArrayList[lengthY];
			for(int j=0;j<lengthY;j++)
				cells[i][j]=new ArrayList<T>();
		}
	}

	public ArrayList<T> get(double xmin, double ymin, double xmax, double ymax) {
		ArrayList<T> as=new ArrayList<T>();
		for(int i=(int)(xmin/res);i<(int)(xmax/res+1);i++){
			if(i<0 || i>=lengthX) continue;
			for(int j=(int)(ymin/res);j<(int)(ymax/res+1);j++){
				if(j<0 || j>=lengthY) continue;
				as.addAll(cells[i][j]);
			}
		}
		return as;
	}

	public boolean add(T obj, double x, double y) {
		return cells[(int)(x/res)][(int)(y/res)].add(obj);
	}

	public boolean remove(T obj, double x, double y) {
		return cells[(int)(x/res)][(int)(y/res)].remove(obj);
	}
}
