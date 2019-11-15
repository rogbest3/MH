package com.mh.web.pxy;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
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
			System.out.println("없음");
			break;
		}
		return box;
	}
	public Box<String> crawling(String url) {
		p.accept("넘어온 url \n" + url);
		box.clear();
		try {
			Document data = Jsoup.connect(url).timeout(10*1000).get();
			Elements word = data.select("ul[class=component_today_word] li[class=item]");
			List<String> word2 = new ArrayList<>();
			for(Element e : word) {
				box.add(word.next().text());
			}
			System.out.println(word2);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return box;
	}
}
