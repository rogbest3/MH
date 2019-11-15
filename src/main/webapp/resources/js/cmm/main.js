"use strict"
var main = main || {}
main = (()=>{
	const WHEN_ERR = 'main 호출하는 js를 찾을 수 없습니다.'
	let _, js, css, img, main_vue_js;
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		css = $.css()
		img = $.img()
		main_vue_js = js + '/vue/main_vue.js'
		
	}
	let onCreate =()=>{
		alert('main.js까지 탐?')
		init()
		$.when(
			$.getScript(main_vue_js)
		).done(()=>{
			setContentView()
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView =()=>{
		alert('화면 들어옴?')
		$('head').html(main_vue.main_head({css: $.css(), img: $.img(), js: $.js()}))
		$('body').html(main_vue.main_body({css: $.css(), img: $.img(), js: $.js()}))
	}
	return{onCreate}
})()
