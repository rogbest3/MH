package com.mh.web.dic;

import java.util.Arrays;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mh.web.pxy.Box;
import com.mh.web.pxy.NaverCrawlingProxy;
import com.mh.web.pxy.Trunk;
import com.mh.web.utl.Printer;

@RestController
@Transactional
@RequestMapping("/dic")
public class dicController {
	@Autowired Printer p;
	@Autowired Trunk<String> trunk;
	@Autowired Box<String> box;
	@Autowired NaverCrawlingProxy proxy;
	@Autowired dicService dirService;
	
	@GetMapping("/crawling/{srch}")
	public Map<?, ?> bringUrl(@PathVariable String srch) {
		p.accept("srch=="+srch);
		trunk.put(Arrays.asList("srch"),
				Arrays.asList(srch));
		box = dirService.crawling(trunk.get());
		trunk.put(Arrays.asList("total"), Arrays.asList(box.toString()));
		return trunk.get();
	}
}
