"use strict"
var main = main || {}
main = (()=>{
	const WHEN_ERR = 'main 호출하는 js를 찾을 수 없습니다.'
	let _, js;
	let init =()=>{
		
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(mainjs)
		).done(()=>{
			setContentView()
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView =()=>{
		$(main())
	}
	
})()
