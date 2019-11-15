"use strict";
var auth = auth || {};
auth =(()=>{
	const WHEN_ERR = 'auth 호출하는 JS 파일을 찾지 못했습니다.'
   let _, js, vue,css,img,crowl_js;
   let init =()=> {
	   _ = $.ctx()
	   js = $.js()
	   css = $.css()
	   img = $.img()
       vue = js + '/vue/auth_vue.js'  //메인 화면 구성 크롤러 클릭 -> 웹크롤링 선택 3개
       crowl_js = js + '/crowler/crowler.js'
   }
   let onCreate =()=>{
	   init();
	   $.when($.getScript(vue)
			   ).done(()=>{
//				   setContentView()
			   }).fail(()=>{
				   alert(WHEN_ERR)
			   })
   }
   return {onCreate}
})