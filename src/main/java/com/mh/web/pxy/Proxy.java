package com.mh.web.pxy;

import java.util.function.Function;

import org.springframework.stereotype.Component;

@Component
public class Proxy {
	public String string(Object param) {
		Function<Object, String> f = String :: valueOf;
		return f.apply(param);
	}
}
