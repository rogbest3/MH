package com.mh.web.pxy;

import java.util.ArrayList;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class Box<T> {
	private ArrayList<T> list;
	public Box() {list = new ArrayList<T>();}
	public String toString() {return list.toString();}
	public void clear() {list.clear();}
	public void add(T item) {list.add(item);}
}
