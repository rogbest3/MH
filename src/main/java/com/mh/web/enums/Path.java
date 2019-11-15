package com.mh.web.enums;

public enum Path {
	UPLOAD_PATH, CRAWLING_TARGET;
	@Override
	public String toString() {
		String result= "";
		switch (this) {
		case CRAWLING_TARGET:
			result = "http://www.cgv.co.kr/movies/?lt=3";
			break;		
		}
		return result;
	}
}
