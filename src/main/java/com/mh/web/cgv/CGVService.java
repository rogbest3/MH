package com.mh.web.cgv;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mh.web.pxy.Box;

@Transactional
@Service
public class CGVService { // 서비스라고 이름붙어있지만 포조이다.
	@Autowired Box<String> box;
	
	@SuppressWarnings("unchecked")
	public Box<String> crawling(Map<?,?> paramMap){
		return null;  
	}

	
	
}