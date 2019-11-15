"use strict"
var auth = auth || {};
auth =(()=>{
	const WHEN_ERR = '호출하는 JS 파일을 찾지 못했습니다.';
	let _, js, css, img, auth_vue_js
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		css = $.css()
		img = $.img()
		auth_vue_js = js + '/vue/auth_vue.js'

	}
	let onCreate =()=>{
		init()
		$.when(
    		$.getScript(auth_vue_js)
    	)	
    	.done(()=>{
			setContentView()
			$('#login_img_btn').click(e=>{
				e.preventDefault()
		    		   
			})	
		}).fail(()=>{alert(WHEN_ERR)})
	}
	let setContentView =()=>{	// 첫화면
		bugsPage()
	}

	let bugsPage =()=>{
		$('<main id="main" role="main" class="container">'+
		'<table id="tab">'+
		'  <tr>'+
		'  </tr>'+
		'</table>'+
		'</main>')  // key값 무조건 string이기 때문에 '' 생량가능 value는 생략 불가, json이기때문에 , 로 속성 추가							
		.appendTo('body')	// body에 오버로딩
		.css({ width : '100%', height : '100%'}) 
		$('#main table')
		.css({ width : '80%', height : '80%', border :'2px solid black', margin: '0 auto', 'margin-top' : '8%' }) 
		
		$.each(
			[{ id : 'left', width : '20%'}, 
			{ id : 'right', width : '80%'}], 
			(i, j)=>{
			$('<td id="'+ j.id +'"></td>')
			.css({border: '2px solid black', width: j.width, 'vertical-align': 'top'})
			.appendTo('#tab tr')
		})

		$.each([	// name을 주고 구분
			{txt : '벅스', name : 'bugs_crawl'},
			{txt : '영화', name : 'cust_mgmt'}, 
			{txt : '영어', name : 'word_crawl'}], 
			(i, j)=>{
				$('<div name="'+ j.name +'">'+ j.txt +'</div>')
				.appendTo('#left')
				.click(function(){
					$(this).addClass('active')
					$(this).siblings().removeClass('active')
					switch($(this).attr('name')){
					case 'bugs_crawl' :
						bugs_crawl()						
						break
					case 'cust_mgmt' : 
						cust_mgmt()
						break
					case 'word_crawl' : 
						word_crawl()
						break
					}
			})
		})
		$('#left div').css({border: '2px solid black', margin: 'auto 0', 'line-height': '50px'})
	}
	let bugs_crawl =()=>{
		$('#right').empty()
		$('<form id="crawl_form_id" action="">'+
		'</form>')
		.addClass('form-inline my-2 my-lg-0')
		.appendTo('#right')
		$('#crawl_form_id').css({padding : '0 auto', 'padding-top' : '5%'  })	//'padding-top' : '5%' 
		$('<button class="btn btn-outline-success my-2 my-sm-0" type="submit">이동</button>')
		.appendTo('#crawl_form_id')
		.click(e=>{
			e.preventDefault()	
			alert('더미')
		})
	}
	
	let cust_mgmt =()=>{
		$('#right').empty()
        $('<h2>Web Crawling'+
                '<form id="crawl_form" class="form-inline my-2 my-lg-0">'+
                '  <select name="site" size="2">'+
                '  </select>'+
                '<input class="form-control mr-sm-2" type="text" value="CGV" placeholder="insert URL for crawling" aria-label="Search">'+
                '</form>')
        .appendTo('#right')
        $('#crawl_form input[class="form-control mr-sm-2"]')
        .css({width:'80%'})
        $.each([{sub:'직접입력'},{sub:'naver.com'},{sub:'daum.net'}],(i,j)=>{
            $('<option value='+j.sub+'>'+j.sub+'</option>').appendTo('#crawl_form select')
        })
        $('<button class="btn btn-secondary my-2 my-sm-0" type="submit">go crawl</button>')
        .appendTo('#crawl_form')
        .click(e=>{                              
            e.preventDefault()
            alert(_+'====<<<web')
            $.getJSON(_
                    +'/cgv/crawling/'+$('#crawl_form select[name="site"]').val()
                    +'/'+$('form#crawl_form input[type="text"]').val(),
                    d=>{
                alert("성공성공")
            })
        })
	}
 	let word_crawl =()=>{
		$('#right').empty()
		$('<form id="crawl_form_id" action="">'+
		'</form>')
		.addClass('form-inline my-2 my-lg-0')
		.appendTo('#right')
		$('#crawl_form_id').css({padding : '0 auto', 'padding-top' : '5%'  })	//'padding-top' : '5%' 
		$('<button class="btn btn-outline-success my-2 my-sm-0" type="submit">네이버 영어사전 이동</button>')
		.appendTo('#crawl_form_id')
		.click(e=>{
			e.preventDefault()	
			alert('네이버 사전 크롤!!!!! auth.js 들어왔음!!!!!')
			let srch = 'NAVER_DIC'
			$.getJSON(_+'/dic/crawling/'+'/'+srch,d=>{
				alert('성공??????????????')
				alert(d.total)
				
			})
		})
	}
	return{ onCreate }	// app에서 auth.onCreate() 호출했기 때문에 return에 onCreate 사용
})();
