package com.mh.web.cmm;

@FunctionalInterface
public interface IPredicate<T> {
	public boolean test(T t);
}
