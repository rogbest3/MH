"use strict";
var auth = auth || {};
auth =(()=>{
	const WHEN_ERR = 'auth호출하는 JS 파일을 찾지 못했습니다.'
   let _, js, vue,css,img,brd_js, cookie_js,crowler_js;
   let init =()=> {
	   _ = $.ctx()
	   js = $.js()
	   css = $.css()
	   img = $.img()
       vue = js + '/vue/auth_vue.js'
       cookie_js = js+'/cmm/cookie.js'
       crowler_js = js+'/crowler/crowler.js'
       
   }
   let onCreate =()=> {
       init();
       $.when($.getScript(vue),
    		   $.getScript(crowler_js)
    		   )
       .done(()=>{
    	   setContentView()
       }).fail(()=>{alert(WHEN_ERR)})
       }

       let setContentView =()=>{
    	   $('head').html(auth_vue.login_head({css: $.css(), img: $.img(),  js: $.js()}))
           $('body').addClass('text-center')
           .html(auth_vue.login_body({css: $.css(), img: $.img(),  js: $.js()}))
   		login()
   		access()
       }

      let login =()=>{
          let x =  {css: $.css(), img: $.img(), js :$.js()}
          $('head').html(auth_vue.login_head(x))
          $('body').addClass('text-center')
          .html(auth_vue.login_body(x))
          $('<button>',{
   			text:"Sign in",
   			type:"submit",
//   			click: e =>{
//   				e.preventDefault();
//               let data = {cemail : $('#cemail').val(), cpwd : $('#cpwd').val()}
//               alert(data.cemail)
//                	$.ajax({
//                		url : _+'/user/' + data.cemail+'/login',
//                		type : 'POST',
//                		dataType : 'json',
//                		data : JSON.stringify(data),
//                		contentType : 'application/json',
//                		success : d => {
//                			setCookie("CEMAIL",d.cemail)
//                			alert('저장된 쿠키:'+getCookie("CEMAIL"))
//                				brd.onCreate()
//                			},
//                			 error : e => {
//                                 alert('AJAX 실패');
//                			 }
//                       })
//                      
//                       }
                	}).addClass("btn btn-lg btn-primary btn-block")
		.appendTo('#btn_login')
      }

      let access =()=>{
    	  $('#a_go_admin').click(e=>{
    		  crowler.onCreate()
    	  })
      }
   return{onCreate,login}
})();