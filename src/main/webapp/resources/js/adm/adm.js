var adm = adm || {}
adm = (()=>{
	const WHEN_ERR = '호출하는 JS 파일을 찾지 못했습니다.';	
	let _, js, css, img, brd_vue_js
	let init=()=>{
		_ = $.ctx();
		js = $.js();
		css = $.css();
		img = $.img();
		brd_vue_js = js + '/vue/brd_vue.js'
	}
	let onCreate=()=>{
		init()
		$.when(
			$.getScript(brd_vue_js)
		)
		.done(()=>{
			alert('환영합니다.')
			init()
			setContentView()
		})
		.fail(()=>{alert(WHEN_ERR)})
	}
	let setContentView=()=>{
        $('body').empty()
		
		$('<table id="tab" border="3">'+
		  '  <tr>'+
		  '  </tr>'+
		  '</table>')
		  .css({
			  border : '1px solid #000066',
			  width: '80%',
			  height: '70%',
			  margin: '0 auto'			  
			  })
		  .appendTo('body')		  
//		let arr1 = [{id:'left',width:'20%'},{id:'right',width:'80%'}]
        $.each([{id:'left',width:'20%'},{id:'right',width:'80%'}],(i,j)=>{
	       	$('<td id="'+j.id+'"></td>')        	
	       	.css({
	       		border : '2px solid #000066',
	       		width: j.width,
	       		'vertical-align': 'top'			  
			})
			.appendTo('#tab tr')
        })		
//		let arr = ['고객관리', '상품등록', '상품조회', '상품관리', '상품삭제']
        $.each([
        	{txt:'웹크롤링', name : 'web_crawl'}, 
        	{txt:'고객관리', name : 'cust_mgmt'}, 
        	{txt:'상품등록', name : 'item_reg'}, 
        	{txt:'상품조회', name : 'item_srch'}, 
        	{txt:'상품관리', name : 'item_mod'}, 
        	{txt:'상품삭제', name : 'item_del'}],
        	(i,j)=>{
	        	$('<div name="'+j.name+'">'+j.txt+'</div>')
	        	.css({
				  border : '1px solid #000000',
				  width: '100%',
				  height : '10%'
	        	})
	        	.appendTo('#left') 
//	        	.hover(function(){//hover는 대기만해도 active가 활성화 된다.
	        	.click(function(){
//	        		let that = $(this).attr('name') //attr은 속성값이다, getter가 된다. , 눌린녀석이 $(this)가 된다.
	        		//this는 람다가 안먹는다. function으로 해야한다  this가 객체를 못잡기 때문에  hell gate
//	        		alert(that + '==>메뉴 클릭')
	        		$(this).addClass('active')
	        		$(this).siblings().removeClass('active')
	        		switch($(this).attr('name')){
	        		case 'web_crawl': 
	        			webCrawl()
	        			break;
	        		case 'cust_mgmt': 
	        			custManager()
	        			break;
	        		case 'item_reg': 
	        			item_reg()
	        			break;
	        		case 'item_srch': 
	        			item_srch()
	        			break;
	        		case 'item_mod': 
	        			item_mod()
	        			break;
	        		case 'item_del': 
	        			item_del()
	        			break;	        		
	        		}
	        	})
        	})
        	
        let webCrawl=()=>{
        	$('<form id="formlist" class="form-inline my-2 my-lg-0">'+
        			'<select name="site" size="1"></select>'+
        			'<input class="form-control mr-sm-2" type="text" placeholder="insert URL for crawling" aria-label="Search"></form>'
        	)
        	.appendTo('#right')
        	$.each([
        		{name:'naver', url : 'naver.com'},
        		{name:'daum', url : 'daum.net'},
        		{name:'google', url : 'google.co.kr'},
        		{name:'json', url : 'json.org/json-ko.html'},
        		],(i,j)=>{
        		$('<option value="'+j.url+'">'+j.name+'</option>')
        		.appendTo('#formlist select')     
        	})
        	$('<button class="btn btn-secondary my-2 my-sm-0" type="submit">go crawl</button>')
        	.appendTo('#formlist')
        	.click(e=>{
//        		if($('form#formlist select[name="site"]').val()==='' ||
//        				$('form#formlist input[type="text"]').val()===''){
//        			
//        		}
        		e.preventDefault();
        		if(!$.fn.nullChecker([$('form#formlist select[name="site"]').val(),
        			$('form#formlist input[type="text"]').val()])){        			
            		$.getJSON(_+'/tx/crawling/'+$('form#formlist select[name="site"]').val()
            				+'/'+$('form#formlist input[type="text"]').val(),d=>{
                		alert(d)
                	})
        		}
        	})
        }
       
		let custManager=()=>{
			  alert('aaa')
		}
		
		let item_reg=()=>{
			$('<div>상품등록테스트</div>')
        	.appendTo('#right') 
		}
		
		let item_srch=()=>{
			$('<div>상품조회테스트</div>')
        	.appendTo('#right') 
		}
		
		let item_mod=()=>{
			$('<div>상품관리테스트</div>')
        	.appendTo('#right') 
		}
		
		let item_del=()=>{
			$('<div>상품삭제테스트</div>')
        	.appendTo('#right') 
		}
     
	}
	return {onCreate}
})()