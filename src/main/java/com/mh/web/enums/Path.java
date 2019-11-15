package com.mh.web.enums;

public enum Path {
	UPLOAD_PATH, CRAWLING_TARGET;
	@Override
	public String toString() {
		String result= "";
		switch (this) {
		case UPLOAD_PATH:
			result = "C:\\Users\\eGovFrame3.8\\moneyhub\\EGOV_MONEYHUB\\src\\main\\webapp\\resources\\upload\\";
			break;
		case CRAWLING_TARGET:
			result = "https://store.naver.com/accommodations/detail?entry=plt&id=1285629759&tab=bookingReview";
			break;		
		}
		return result;
	}
}
