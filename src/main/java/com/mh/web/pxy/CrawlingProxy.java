package com.mh.web.pxy;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mh.web.enums.Path;
import com.mh.web.util.Printer;

@Component("crawler")
public class CrawlingProxy extends Proxy{
	@Autowired Printer printer;
	@Autowired Box<String> box;
	public Box<String> choose(Map<?,?> paramMap){  //정형화되있지 않은 데이터의 반환
		printer.accept("키==="+paramMap.get("site"));
		printer.accept("값==="+paramMap.get("srch"));
		switch (string(paramMap.get("srch"))) {
		case "모인Test":
			box = crawling(Path.CRAWLING_TARGET.toString());
			break;
		default:
			crawling("http://"+paramMap.get("site")+"/");
			break;
		}
		
		return box;  
	}
	private Box<String> crawling(String url) {
		System.out.println("111111111111111");
		printer.accept("넘어온 url \n"+url);
		box.clear();
		try {
			Document rawData = Jsoup.connect(url).timeout(10*1000).get();
			Elements artist = rawData.select("div[class=review_txt]");			
			for(Element e : artist) {
				box.add(e.text()+"\n ************* \n");
			}
//			System.out.println(box);
		}catch (Exception e2) {
			e2.printStackTrace();
		}
		return box;
	}
	
	
}
