package com.mh.web.dic;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mh.web.pxy.Box;
import com.mh.web.pxy.NaverCrawlingProxy;

@Transactional
@Service
public class dicService {
	@Autowired NaverCrawlingProxy crawler;
	@Autowired Box<String> box;
	
	@SuppressWarnings("unchecked")
	public Box<String> crawling(Map<?, ?> paramMap){
		return crawler.choose(paramMap);
	}
}
