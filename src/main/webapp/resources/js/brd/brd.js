"use strict"
var brd = brd||{}
brd = (()=>{
	const WHEN_ERR = '호출하는 JS 파일을 찾지 못했습니다.'
	let _, js, css, img, brd_vue_js, $userid, navi_js, navi_vue_js,page_vue_js,compo_vue_js
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		css = $.css()
		img = $.img()
        navi_js = js+'/cmm/navi.js'
        brd_vue_js = js + '/vue/brd_vue.js'
        navi_vue_js = js + '/vue/navi_vue.js'
        page_vue_js = js + '/vue/page_vue.js'
        compo_vue_js= js + '/vue/compo_vue.js'
	}
	let onCreate =()=>{
		
		init()
		$.when(
			$.getScript(brd_vue_js),
			$.getScript(navi_js),
			$.getScript(navi_vue_js),
			$.getScript(page_vue_js),
			$.getScript(compo_vue_js)
		).done(()=>{
			setContentView()
			navi.onCreate()		
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView=()=>{
		$('head').html(brd_vue.brd_head({css: $.css(), img: $.img()}))
        $('body').addClass('text-center')
        .html(brd_vue.brd_body({ctx: '/web',css: $.css(), img: $.img()}))
        $(navi_vue.nav()).appendTo('#navi')
        recent_updates({page : '1', size : '5'})
	}
	let recent_updates= x =>{
//		alert('호출된 페이지 번호:::{' + x + '}:::')
		$('#recent_updates .media').remove()
		$('#suggestions').remove()
        $('#recent_updates .d-block').remove()
        $('#recent_updates .container').remove()
        $.getJSON(_+'/articles/page/'+x.page+'/size/'+x.size,d =>{
      		$.each(d.articles, (i,j)=>{
        		$( '<div class="media text-muted pt-3"><img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" style="width: 32px; height: 32px;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb72%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb72%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">'+
                		'          <p id="id_'+i+'" class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
                		'</p></div>').appendTo('#recent_updates')
        		$('<strong class="d-block text-gray-dark">@<a>'+j.cid+'</a></strong>')
        		.appendTo("#id_"+i)
        		.click(()=>{
        			alert('id 클릭')
        		})
        		$('<a>'+j.title+'</a>')
        		.appendTo("#id_"+i)
        		.click(()=>{
        			detail(j)
        		})
        		
      		})
	      	$(page_vue.pageNation()).appendTo('#recent_updates')
	      	$('#pagination').empty()
	      	
	      	if(d.pxy.existPrev){
	      		$('<li class="page-item"><a class="page-link" href="#">Previous</a></li>')
		      	.appendTo('#pagination')
		      	.click(e=>{
		      			e.preventDefault()
    					recent_updates({page : d.pxy.prevBlock, size :d.pxy.pageSize})
    				})
	      	}     	
//	      	alert('길이 :::' + Object.keys(d).length)
//	      	$.each(d, (i,j)=>{	      	
//	      		if(i%5===0){
//		      		$('<li class="page-item"><a class="page-link" href="#">'+(i/5+1)+'</a></li>')
//				  	.appendTo('#pagination')
//	      		}		      	
//	      	})
	      	/*
	      	 * let t = ''
	      	 * let i = 0
	      	 * for(;Object.keys(d).length/5;i++){
	      	 * for(;(d).length/5;i++){
	      	 * 	t = $('<li class="page-item"><a class="page-link" href="#">'+(i+1)+'</a></li>')
	      	 * }
	      	 * $(t)
	      	 * .appendTo('#pagination')
	      	 */
      		let i = 0
      		for(i=d.pxy.startPage; i<=d.pxy.endPage; i++) {
      			if(d.pxy.pageNum==i){
      				$('<li class="page-item"><a class="page-link" href="#">'+i+'</a></li>')
    				.appendTo('#pagination')
    				.addClass('active')
//    				$(this).siblings().removeClass('active')
      			}else{
      				$('<li class="page-item"><a class="page-link" href="#">'+i+'</a></li>')
    				.appendTo('#pagination')
    				.click(function(){
//    					recent_updates({page : i, size : d.pxy.pageSize})
//    					alert('페이지번호>>>'+$(this).children('.page-link').text())
    					recent_updates({page : $(this).children('.page-link').text(), size : d.pxy.pageSize})
    				})
      			}
      			
    		}
//	      	$.each(d.pxy.pages, (i,j)=>{	      		
//		      	$('<li class="page-item"><a class="page-link" href="#">'+j+'</a></li>')
//				.appendTo('#pagination')
//				.click(()=>{
//					alert(j);
//					recent_updates({page : j, size :'5'})
//				})
//	      	})
	      	if(d.pxy.existNext){
	      		$('<li class="page-item"><a class="page-link" href="#">Next</a></li>')
		      	.appendTo('#pagination')
		      	.click(e =>{
		      			e.preventDefault()
    					recent_updates({page : d.pxy.nextBlock, size : d.pxy.pageSize})
    				})
	      	}
	      	$(compo_vue.pageSize()).prependTo('#recent_updates div.container')
      		$.each([
      			{name:'5개', value:'5'},
      			{name:'10개', value:'10'},
      			{name:'15개', value:'15'}
      			],(i,j)=>{
      			$('<option value="'+j.value+'">'+j.name+'</option>').appendTo('#listSizeSelectForm select')
      		})
      		$('#listSizeSelectForm option[value="'+d.pxy.pageSize+'"]')
      		.attr('selected',true)
      		$('#listSizeSelectForm').change(()=>{
      			alert('선택한 보기 : ' + $('#listSizeSelectForm option:selected').text())
      			recent_updates({page : '1', size : $('#listSizeSelectForm option:selected').val()})
      		})
//      		$('#pagination').css({'justify-content': 'center'})
//	      	$('#listSizeSelectForm').css({'text-align': 'right'})
	      	
	      	
        })
        
	}
	let write=()=>{
		$('#recent_updates').html(brd_vue.brd_write())
		$('#write_form input[name="writer"]').val(getCookie("CLIENTID"))
		$('#suggestions').remove()
		$('<input>',{
			style: "float:right;width:100px;margin-right:10px",
			value: "취소"
		})
		.addClass("btn btn-danger")
		.appendTo('#write_form')
		.click(()=>{
			
		})
		$('<input>',{
			style: "float:right;width:100px;margin-right:10px",
			value: "전송"
		})
		.addClass("btn btn-primary")
		.appendTo('#write_form')
		.click(e=>{
			e.preventDefault()
			let json = {
					cid : $('#write_form input[name="writer"]').val(),
					title: $('#write_form input[name="title"]').val(),
					content: $('#write_form textarea[name="content"]').val()
			}
			$.ajax({
				url : _+'/articles/',
				type : 'POST',
				data : JSON.stringify(json),
				dataType : 'json',
				contentType : 'application/json',
				success : d=>{
					$('#recent_updates div.container-fluid').remove()
					recent_updates({page : '1', size : '5'})
				},
				error : e=>{alert('에러')}
			})
		})
		
	}
	let detail = x => {
		$('#recent_updates').html(brd_vue.brd_write())
		$('#recent_updates div.container-fluid h1').html('ARTICLE DETAIL')
		$('#write_form input[name="writer"]').val(x.cid)
		$('#write_form input[name="title"]').val(x.title)
		$('#write_form input[name="content"]').val(x.content)
		$('#suggestions').remove()
		$('<input>',{
			style: "float:right;width:100px;margin-right:10px",
			value: "삭제"
		})
		.addClass("btn btn-danger")
		.appendTo('#write_form')
		.click(()=>{
			
		})
		$('<input>',{
			style: "float:right;width:100px;margin-right:10px",
			value: "수정"
		})
		.addClass("btn btn-primary")
		.appendTo('#write_form')
		.click(()=>{
			
		})
		
	}
	return {onCreate, write}
})()