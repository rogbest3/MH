package com.mh.web.pxy;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Scanner;
import java.util.function.BiFunction;
import java.util.function.Function;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

//import com.moneyhub.web.brd.ArticleMapper;
import com.mh.web.cmm.IFunction;
import com.mh.web.cmm.ISupplier;
import com.mh.web.util.Printer;

import lombok.Data;

@Component("pager") @Data @Lazy //@Component는  부모에게 있으면 자식에게 자동으로 걸림
public class PageProxy extends Proxy{
	private int totalCount,startRow,endRow,
				pageCount,pageNum, pageSize,startPage,endPage,
				blockCount,blockNum,nextBlock, prevBlock;
	
	private boolean existPrev, existNext;
	private String search;
	private final int BLOCK_SIZE = 5;
	private List<Integer> pages;
	@Autowired Printer p;
//	@Autowired ArticleMapper articleMapper;
	@SuppressWarnings("unused")
	public void paging() {
//		ISupplier<String> s = ()-> articleMapper.countArticle();
//		totalCount = Integer.parseInt(s.get());
		totalCount = 0;
		pageCount = (totalCount % pageSize !=0)? totalCount/pageSize+1:totalCount/pageSize;
		startRow = (pageNum-1)*pageSize;
		endRow = (pageNum==pageCount)?totalCount-1:startRow+pageSize-1;
		blockCount = (pageCount % BLOCK_SIZE !=0)? pageCount/BLOCK_SIZE+1:pageCount/BLOCK_SIZE;
		blockNum = (pageNum-1)/BLOCK_SIZE;
		startPage = blockNum * BLOCK_SIZE + 1; //(startRow-1)*pageSize+1;
		endPage = ((blockNum + 1) != blockCount) ? startPage + (BLOCK_SIZE - 1) : pageCount;//startRow*pageSize;
		existPrev = (blockNum!=0); // 불린타입에서는 ?이후를 생략가능 맞으면 true, 틀리면 false 
		existNext = (blockNum+1)!=blockCount;
		pages = new ArrayList<>();
		for(int i=startPage;i<=endPage;i++){
			pages.add(i);
		}
		nextBlock = startPage + pageSize;
		prevBlock = startPage - pageSize;
		}
	 
	public int random(int a, int b){
		BiFunction<Integer, Integer, Integer> f = (t,u)->(int)(Math.random()*(u-t))+t;
		return f.apply(a, b);
	}
}

