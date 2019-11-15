package com.mh.web.pxy;

import java.util.Map;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mh.web.enums.Path;
import com.mh.web.utl.Printer;

@Component("crawler")
public class NaverCrawlingProxy extends Proxy{
	@Autowired Printer p;
	@Autowired Box<String> box;
	
	public Box<String> choose(Map<?,?> paramMap){
		switch (string(paramMap.get("srch"))) {
		case "NAVER_DIC":
			crawling(Path.CRAWLING_TARGET.toString());
			break;
		default:
			crawling("http://"+paramMap.get("site")+"/");
			break;
		}
		return box;
	}
	private void crawling(String url) {
		p.accept("넘어온 url \n" + url);
		box.clear();
		try {
			Connection.Response response = Jsoup.connect(url)
											.method(Connection.Method.GET)
											.execute();
			Document document = response.parse();
			String text = document.text();
			p.accept(">>>>>네이버 사전 크롤링 내용: \n"+text);
			box.add(text);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
