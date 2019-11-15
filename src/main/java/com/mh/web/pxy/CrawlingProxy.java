package com.mh.web.pxy;
import java.util.Iterator;
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
		switch (string(paramMap.get("srch"))) {
		case "CGV":
			box = crawling(Path.CRAWLING_TARGET.toString());
			break;
		default:
			crawling("http://"+paramMap.get("site")+"/");
			break;
		}
		
		return box;  
	}
	public Box<String> crawling(String url) {
		printer.accept("넘어온 url \n"+url);
		box.clear();
		try {
			Document rawData = Jsoup.connect(url).timeout(10*1000).get();
//			Elements artist = rawData.select("div.sect-movie-chart strong.rank");	
//			Elements artist2 = rawData.select("div.sect-movie-chart strong.title");	
			Elements element = rawData.select("div.sect-movie-chart");	
			Iterator<Element> artist = element.select("strong.rank").iterator();
			Iterator<Element> artist2 = element.select("strong.title").iterator();
			for(Element e : element.select("strong.rank")) {
				box.add(artist.next().text()+"\t"+artist2.next().text());
//				System.out.println(artist.next().text()+"\t"+artist2.next().text());
			}
			System.out.println(box.toString());
			
		}catch (Exception e2) {
			e2.printStackTrace();
		}
		return box;
	}
	
	
}
