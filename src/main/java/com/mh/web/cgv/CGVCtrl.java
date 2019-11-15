package com.mh.web.cgv;

import java.util.Arrays;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mh.web.pxy.Box;
import com.mh.web.pxy.CrawlingProxy;
import com.mh.web.pxy.Trunk;
import com.mh.web.util.Printer;

@RestController
@RequestMapping("/cgv")
public class CGVCtrl {
	private static final Logger logger = LoggerFactory.getLogger(CGVCtrl.class);
	@Autowired Printer printer;
	@Autowired Map<String, Object>map;
	@Autowired Trunk<String> trunk;
	@Autowired CGVService cgvService; 
	@Autowired Box<String> box;
	@Autowired CrawlingProxy crawler;
	
	@GetMapping("/crawling/{site}/{srch}")
	public Map<?, ?> cgvCrawer(@PathVariable String site, @PathVariable String srch) {
		printer.accept("site=="+site+"srch=="+srch);
		trunk.put(Arrays.asList("site","srch"),
                Arrays.asList(site, srch));
		cgvService.crawling(trunk.get());
		trunk.put(Arrays.asList("total"),
                Arrays.asList(box.toString()));
		return trunk.get();
		
	}
}
