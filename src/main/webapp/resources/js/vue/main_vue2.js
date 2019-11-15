"use strict"
var main_vue = main_vue || {}
main_vue = {
		main_head: ()=>{
			return '<head>'+
			'<nav class="themoin-header">'+
			'	<div>'+
			'		<a class="logo">'+
			'			<img src="https://img.themoin.com/public/img/img-new-moin-logo.svg">'+
			'		</a>'+
			'		<div class="spacer">'+
			'			'+
			'		</div><a class="menu">'+
			'			<div class="line1">'+
			'				'+
			'			</div>'+
			'			<div class="line2">'+
			'				'+
			'			</div>'+
			'		</a>'+
			'		<ul class="">'+
			'			<li>'+
			'				<a>로그인</a>'+
			'			</li>'+
			'			<li>'+
			'				<a>회원가입</a>'+
			'			</li>'+
			'			<li class="mobile">'+
			'				<div class="themoin-language-dropdown" tabindex="0">'+
			'					<img class="ic-flag" src="https://img.themoin.com/public/img/ic-flag-ko.svg">'+
			'					<a> <!-- -->한국어<!-- --> </a>'+
			'					<img class="btn-open-list-blue" src="https://img.themoin.com/public/img/btn-open-list-blue.svg">'+
			'					<ul>'+
			'						<li>'+
			'							<div class="spacer">'+
			'								'+
			'							</div>'+
			'							<a>'+
			'								<img src="https://img.themoin.com/public/img/ic-flag-ko.svg">한국어'+
			'							</a>'+
			'						</li>'+
			'						<li>'+
			'							<div class="spacer">'+
			'								'+
			'							</div>'+
			'							<a>'+
			'								<img src="https://img.themoin.com/public/img/ic-flag-en.svg">English'+
			'							</a>'+
			'						</li>'+
			'					</ul>'+
			'				</div>'+
			'			</li>'+
			'		</ul>'+
			'		<div class="language">'+
			'			<div class="themoin-language-dropdown" tabindex="0">'+
			'				<img class="ic-flag" src="https://img.themoin.com/public/img/ic-flag-ko.svg">'+
			'				<a> <!-- -->한국어<!-- --> </a>'+
			'				<img class="btn-open-list-blue" src="https://img.themoin.com/public/img/btn-open-list-blue.svg">'+
			'				<ul>'+
			'					<li>'+
			'						<div class="spacer">'+
			'							'+
			'						</div>'+
			'						<a>'+
			'							<img src="https://img.themoin.com/public/img/ic-flag-ko.svg">한국어'+
			'						</a>'+
			'					</li>'+
			'					<li>'+
			'						<div class="spacer">'+
			'							'+
			'						</div>'+
			'						<a>'+
			'							<img src="https://img.themoin.com/public/img/ic-flag-en.svg">English'+
			'						</a>'+
			'					</li>'+
			'				</ul>'+
			'			</div>'+
			'		</div>'+
			'	</div>'+
			'</nav>'+
			'</head>'
		},
		main_body: ()=>{
			return '<div id="root">'+
			'<div>'+
			'<nav class="themoin-header">'+
			'<div>'+
			'<a class="logo">'+
			'<img src="https://img.themoin.com/public/img/img-new-moin-logo.svg">'+
			'</a>'+
			'<div class="spacer">'+
			'</div>'+
			'<a class="menu">'+
			'<div class="line1">'+
			'</div>'+
			'<div class="line2">'+
			'</div>'+
			'</a>'+
			'<ul class="">'+
			'<li>'+
			'<a>'+
			'로그인</a>'+
			'</li>'+
			'<li>'+
			'<a>'+
			'회원가입</a>'+
			'</li>'+
			'<li class="mobile">'+
			'<div class="themoin-language-dropdown" tabindex="0">'+
			'<img class="ic-flag" src="https://img.themoin.com/public/img/ic-flag-ko.svg">'+
			'<a>'+
			' <!-- -->'+
			'한국어<!-- -->'+
			' </a>'+
			'<img class="btn-open-list-blue" src="https://img.themoin.com/public/img/btn-open-list-blue.svg">'+
			'<ul>'+
			'<li>'+
			'<div class="spacer">'+
			'</div>'+
			'<a>'+
			'<img src="https://img.themoin.com/public/img/ic-flag-ko.svg">'+
			'한국어</a>'+
			'</li>'+
			'<li>'+
			'<div class="spacer">'+
			'</div>'+
			'<a>'+
			'<img src="https://img.themoin.com/public/img/ic-flag-en.svg">'+
			'English</a>'+
			'</li>'+
			'</ul>'+
			'</div>'+
			'</li>'+
			'</ul>'+
			'<div class="language">'+
			'<div class="themoin-language-dropdown" tabindex="0">'+
			'<img class="ic-flag" src="https://img.themoin.com/public/img/ic-flag-ko.svg">'+
			'<a>'+
			' <!-- -->'+
			'한국어<!-- -->'+
			' </a>'+
			'<img class="btn-open-list-blue" src="https://img.themoin.com/public/img/btn-open-list-blue.svg">'+
			'<ul>'+
			'<li>'+
			'<div class="spacer">'+
			'</div>'+
			'<a>'+
			'<img src="https://img.themoin.com/public/img/ic-flag-ko.svg">'+
			'한국어</a>'+
			'</li>'+
			'<li>'+
			'<div class="spacer">'+
			'</div>'+
			'<a>'+
			'<img src="https://img.themoin.com/public/img/ic-flag-en.svg">'+
			'English</a>'+
			'</li>'+
			'</ul>'+
			'</div>'+
			'</div>'+
			'</div>'+
			'</nav>'+
			'<div class="themoin-landing">'+
			'<div class="intro">'+
			'<img src="https://img.themoin.com/public/img/group-446.svg">'+
			'<div>'+
			'<div class="badge">'+
			'&lt;송금한도 향상 기념 이벤트&gt;</div>'+
			'<div class="newmoin-text-header">'+
			'건당 300만원 → 550만원</div>'+
			'<div class="newmoin-text-header">'+
			'연간 3150만원 → 5500만원</div>'+
			'<br>'+
			'<p class="newmoin-text-subtitle-grey">'+
			'송금 한도 향상을 애타게 기다리셨던 분들, 더 많이 송금해보세요<br>'+
			' 상담하기 누르면 쿠폰을 받아볼 수 있습니다'+
			'</p>'+
			'</div>'+
			'</div>'+
			'<div class="themoin-remit-component">'+
			'<div id="moin-event-amount" class="moin-event-amount">'+
			'<p class="color-deepgrey">'+
			'</p>'+
			'</div>'+
			'<div class="moin-amount">'+
			'<div class="money-graph">'+
			'<h3 class="index-money-title">'+
			'실제로 받는 금액</h3>'+
			'<div class="index-money-rank">'+
			'<div id="rank-moin" class="index-money-moin">'+
			'<div class="index-money-name">'+
			'모&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;인</div>'+
			'<div class="index-money-bar">'+
			'<div style="height: 100%; width: 100%;">'+
			'</div>'+
			'</div>'+
			'<div class="index-money-amount">'+
			'504,748</div>'+
			'<div class="index-money-unit">'+
			'JPY</div>'+
			'</div>'+
			'<div id="rank-woori" class="index-money-bank">'+
			'<div class="index-money-name">'+
			'우리은행</div>'+
			'<div class="index-money-bar">'+
			'<div style="height: 100%; width: 55.3206%;">'+
			'</div>'+
			'</div>'+
			'<div class="index-money-amount">'+
			'501,389</div>'+
			'<div class="index-money-unit">'+
			'JPY</div>'+
			'</div>'+
			'<div id="rank-hana" class="index-money-bank">'+
			'<div class="index-money-name">'+
			'하나은행</div>'+
			'<div class="index-money-bar">'+
			'<div style="height: 100%; width: 54.6555%;">'+
			'</div>'+
			'</div>'+
			'<div class="index-money-amount">'+
			'501,339</div>'+
			'<div class="index-money-unit">'+
			'JPY</div>'+
			'</div>'+
			'<div id="rank-kb" class="index-money-bank">'+
			'<div class="index-money-name">'+
			'국민은행</div>'+
			'<div class="index-money-bar">'+
			'<div style="height: 100%; width: 50%;">'+
			'</div>'+
			'</div>'+
			'<div class="index-money-amount">'+
			'500,989</div>'+
			'<div class="index-money-unit">'+
			'JPY</div>'+
			'</div>'+
			'<div id="rank-shinhan" class="index-money-bank">'+
			'<div class="index-money-name">'+
			'신한은행</div>'+
			'<div class="index-money-bar">'+
			'<div style="height: 100%; width: 49.3349%;">'+
			'</div>'+
			'</div>'+
			'<div class="index-money-amount">'+
			'500,939</div>'+
			'<div class="index-money-unit">'+
			'JPY</div>'+
			'</div>'+
			'<div id="rank-moin-verify" class="index-money-moin-event">'+
			'<div class="index-money-name">'+
			'학생인증</div>'+
			'<div class="index-money-bar">'+
			'<div style="height:100%">'+
			'</div>'+
			'</div>'+
			'<div class="index-money-amount">'+
			'0</div>'+
			'<div class="index-money-unit">'+
			'JPY</div>'+
			'</div>'+
			'<div id="rank-moin-event" class="index-money-moin-event">'+
			'<div class="index-money-name">'+
			'모인할인</div>'+
			'<div class="index-money-bar">'+
			'<div style="height:100%">'+
			'</div>'+
			'</div>'+
			'<div class="index-money-amount">'+
			'0</div>'+
			'<div class="index-money-unit">'+
			'JPY</div>'+
			'</div>'+
			'</div>'+
			'</div>'+
			'<div class="form-calculator main">'+
			'<div class="amount-row">'+
			'<div class="">'+
			'<p>'+
			'내가 보내는 금액 (수수료 포함)</p>'+
			'<input type="text" class="send-amount" value="5,500,000" tabindex="0">'+
			'</div>'+
			'<div class="unit-select disabled" tabindex="0">'+
			'<p>'+
			'대한민국</p>'+
			'<h3>'+
			'KRW</h3>'+
			'</div>'+
			'</div>'+
			'<div class="amount-row">'+
			'<div class="">'+
			'<p>'+
			'실제로 받는 금액 (직접입력 가능)</p>'+
			'<input type="text" class="receive-amount" value="504,748" tabindex="0">'+
			'</div>'+
			'<div class="unit-select receive" tabindex="0">'+
			'<p>'+
			'일본</p>'+
			'<h3>'+
			'JPY</h3>'+
			'</div>'+
			'</div>'+
			'<button type="submit" class="index-send-btn moin-body">'+
			'송금하기</button>'+
			'</div>'+
			'</div>'+
			'</div>'+
			'<div class="themoin-landing-countries">'+
			'<div>'+
			'<h1>'+
			'송금 가능 국가</h1>'+
			'<ul>'+
			'<li>'+
			'<img src="https://img.themoin.com/public/img/circle-flag-jp.svg">'+
			'<span class="newmoin-text-subtitle">'+
			'일본</span>'+
			'<p>'+
			'계좌송금</p>'+
			'<a href="https://blog.naver.com/moin_company/221488774973" target="_blank" rel="noopener noreferrer">'+
			'페이이지</a>'+
			'</li>'+
			'<li>'+
			'<img src="https://img.themoin.com/public/img/circle-flag-cn.svg">'+
			'<span class="newmoin-text-subtitle">'+
			'중국</span>'+
			'<p>'+
			'계좌송금</p>'+
			'</li>'+
			'<li>'+
			'<img src="https://img.themoin.com/public/img/circle-flag-us.svg">'+
			'<span class="newmoin-text-subtitle">'+
			'미국</span>'+
			'<p>'+
			'계좌송금</p>'+
			'</li>'+
			'<li>'+
			'<img src="https://img.themoin.com/public/img/circle-flag-sg.svg">'+
			'<span class="newmoin-text-subtitle">'+
			'싱가포르</span>'+
			'<p>'+
			'계좌송금</p>'+
			'</li>'+
			'<li>'+
			'<img src="https://img.themoin.com/public/img/circle-flag-au.svg">'+
			'<span class="newmoin-text-subtitle">'+
			'호주</span>'+
			'<p>'+
			'계좌송금</p>'+
			'</li>'+
			'<li>'+
			'<img src="https://img.themoin.com/public/img/circle-flag-gb.svg">'+
			'<span class="newmoin-text-subtitle">'+
			'영국</span>'+
			'<p>'+
			'계좌송금</p>'+
			'</li>'+
			'<li>'+
			'<img src="https://img.themoin.com/public/img/circle-flag-np.svg">'+
			'<span class="newmoin-text-subtitle">'+
			'네팔</span>'+
			'<p>'+
			'계좌송금</p>'+
			'</li>'+
			'<li>'+
			'<img src="https://img.themoin.com/public/img/circle-flag-de.svg">'+
			'<span class="newmoin-text-subtitle">'+
			'독일</span>'+
			'<p>'+
			'계좌송금</p>'+
			'</li>'+
			'<li>'+
			'<img src="https://img.themoin.com/public/img/circle-flag-fr.svg">'+
			'<span class="newmoin-text-subtitle">'+
			'프랑스</span>'+
			'<p>'+
			'계좌송금</p>'+
			'</li>'+
			'<li>'+
			'<img src="https://img.themoin.com/public/img/circle-flag-it.svg">'+
			'<span class="newmoin-text-subtitle">'+
			'이탈리아</span>'+
			'<p>'+
			'계좌송금</p>'+
			'</li>'+
			'<li>'+
			'<img src="https://img.themoin.com/public/img/circle-flag-nl.svg">'+
			'<span class="newmoin-text-subtitle">'+
			'네덜란드</span>'+
			'<p>'+
			'계좌송금</p>'+
			'</li>'+
			'<li>'+
			'<img src="https://img.themoin.com/public/img/circle-flag-pt.svg">'+
			'<span class="newmoin-text-subtitle">'+
			'포르투갈</span>'+
			'<p>'+
			'계좌송금</p>'+
			'</li>'+
			'<li class="hide">'+
			'<img src="https://img.themoin.com/public/img/circle-flag-es.svg">'+
			'<span class="newmoin-text-subtitle">'+
			'스페인</span>'+
			'<p>'+
			'계좌송금</p>'+
			'</li>'+
			'<li class="hide">'+
			'<img src="https://img.themoin.com/public/img/circle-flag-be.svg">'+
			'<span class="newmoin-text-subtitle">'+
			'벨기에</span>'+
			'<p>'+
			'계좌송금</p>'+
			'</li>'+
			'<li class="hide">'+
			'<img src="https://img.themoin.com/public/img/circle-flag-cy.svg">'+
			'<span class="newmoin-text-subtitle">'+
			'키프로스</span>'+
			'<p>'+
			'계좌송금</p>'+
			'</li>'+
			'<li class="hide">'+
			'<img src="https://img.themoin.com/public/img/circle-flag-ee.svg">'+
			'<span class="newmoin-text-subtitle">'+
			'에스토니아</span>'+
			'<p>'+
			'계좌송금</p>'+
			'</li>'+
			'<li class="hide">'+
			'<img src="https://img.themoin.com/public/img/circle-flag-fi.svg">'+
			'<span class="newmoin-text-subtitle">'+
			'핀란드</span>'+
			'<p>'+
			'계좌송금</p>'+
			'</li>'+
			'<li class="hide">'+
			'<img src="https://img.themoin.com/public/img/circle-flag-gr.svg">'+
			'<span class="newmoin-text-subtitle">'+
			'그리스</span>'+
			'<p>'+
			'계좌송금</p>'+
			'</li>'+
			'<li class="hide">'+
			'<img src="https://img.themoin.com/public/img/circle-flag-ie.svg">'+
			'<span class="newmoin-text-subtitle">'+
			'아일랜드</span>'+
			'<p>'+
			'계좌송금</p>'+
			'</li>'+
			'<li class="hide">'+
			'<img src="https://img.themoin.com/public/img/circle-flag-lv.svg">'+
			'<span class="newmoin-text-subtitle">'+
			'라트비아</span>'+
			'<p>'+
			'계좌송금</p>'+
			'</li>'+
			'<li class="hide">'+
			'<img src="https://img.themoin.com/public/img/circle-flag-lt.svg">'+
			'<span class="newmoin-text-subtitle">'+
			'리투아니아</span>'+
			'<p>'+
			'계좌송금</p>'+
			'</li>'+
			'<li class="hide">'+
			'<img src="https://img.themoin.com/public/img/circle-flag-lu.svg">'+
			'<span class="newmoin-text-subtitle">'+
			'룩셈부르크</span>'+
			'<p>'+
			'계좌송금</p>'+
			'</li>'+
			'<li class="hide">'+
			'<img src="https://img.themoin.com/public/img/circle-flag-mt.svg">'+
			'<span class="newmoin-text-subtitle">'+
			'몰타</span>'+
			'<p>'+
			'계좌송금</p>'+
			'</li>'+
			'<li class="hide">'+
			'<img src="https://img.themoin.com/public/img/circle-flag-mc.svg">'+
			'<span class="newmoin-text-subtitle">'+
			'모나코</span>'+
			'<p>'+
			'계좌송금</p>'+
			'</li>'+
			'<li class="hide">'+
			'<img src="https://img.themoin.com/public/img/circle-flag-sm.svg">'+
			'<span class="newmoin-text-subtitle">'+
			'산 마리노</span>'+
			'<p>'+
			'계좌송금</p>'+
			'</li>'+
			'<li class="hide">'+
			'<img src="https://img.themoin.com/public/img/circle-flag-sk.svg">'+
			'<span class="newmoin-text-subtitle">'+
			'슬로바키아</span>'+
			'<p>'+
			'계좌송금</p>'+
			'</li>'+
			'<li class="hide">'+
			'<img src="https://img.themoin.com/public/img/circle-flag-si.svg">'+
			'<span class="newmoin-text-subtitle">'+
			'슬로베니아</span>'+
			'<p>'+
			'계좌송금</p>'+
			'</li>'+
			'<li class="hide">'+
			'<img src="https://img.themoin.com/public/img/circle-flag-at.svg">'+
			'<span class="newmoin-text-subtitle">'+
			'오스트리아</span>'+
			'<p>'+
			'계좌송금</p>'+
			'</li>'+
			'<li class="empty hide">'+
			'</li>'+
			'<li class="empty hide">'+
			'</li>'+
			'</ul>'+
			'</div>'+
			'<div class="see-more">'+
			'총 28개의 송금 국가 확인하기<img class="img-close" src="https://img.themoin.com/public/img/ic-open-list-blue.svg">'+
			'</div>'+
			'</div>'+
			'<div class="section-confidence">'+
			'<div class="item-container">'+
			'<div class="item">'+
			'<img class="img-container" src="https://img.themoin.com/public/img/img-trophy-2.svg">'+
			'<h3 class="newmoin-text-subtitle-center">'+
			'금융감독원장상 수상</h3>'+
			'<p class="newmoin-text-body-center">'+
			'2016 금융개혁! 창업∙일자리 박람회 경진대회에서<br classname="desktop-line-break">'+
			'금융감독원장상을 수상하였습니다.</p>'+
			'</div>'+
			'<div class="item">'+
			'<img class="img-container" src="https://img.themoin.com/public/img/img-venture-capital-2.svg">'+
			'<h3 class="newmoin-text-subtitle-center">'+
			'한국·미국 VC로부터의 투자</h3>'+
			'<p class="newmoin-text-body-center">'+
			'은행권 연합회를 포함하여 다수의 한국/<br classname="desktop-line-break">'+
			'미국 VC로부터 투자를 받았습니다.</p>'+
			'</div>'+
			'<div class="item">'+
			'<img class="img-container" src="https://img.themoin.com/public/img/img-license-2.svg">'+
			'<h3 class="newmoin-text-subtitle-center">'+
			'정식 라이센스 취득</h3>'+
			'<p class="newmoin-text-body-center">'+
			'2018년 1월에 기재부로부터 소액외화이체업<br classname="desktop-line-break">'+
			'정식 라이센스를 취득하였습니다.</p>'+
			'</div>'+
			'</div>'+
			'</div>'+
			'<div class="pros">'+
			'<div>'+
			'<h1 class="moin-row">'+
			'모인 서비스의 장점</h1>'+
			'<div class="moin-row">'+
			'<div class="card-pros">'+
			'<div class="moin-index-box">'+
			'<h3>'+
			'저렴한 수수료</h3>'+
			'<p>'+
			'은행보다 최대 90%<br>'+
			'수수료가 저렴합니다.</p>'+
			'<a href="/faq">'+
			'어떻게 가능한가요?</a>'+
			'</div>'+
			'</div>'+
			'<div class="card-pros">'+
			'<div class="moin-index-box">'+
			'<h3>'+
			'빠른 송금 시간</h3>'+
			'<p>'+
			'중계은행을 거치지 않아<br>'+
			'송금 속도가 매우 빠릅니다.</p>'+
			'<a href="/faq">'+
			'얼마나 빠른가요?</a>'+
			'</div>'+
			'</div>'+
			'<div class="card-pros">'+
			'<div class="moin-index-box">'+
			'<h3>'+
			'편리한 방법</h3>'+
			'<p>'+
			'은행에 직접 가지 않아도 온라인으로<br>'+
			'언제 어디서든 송금할 수 있습니다.</p>'+
			'<a href="/faq">'+
			'송금 방법 보기</a>'+
			'</div>'+
			'</div>'+
			'<div class="card-pros">'+
			'<div class="moin-index-box">'+
			'<h3>'+
			'도착 알림 서비스</h3>'+
			'<p>'+
			'보내는 분과 받는 분이 모두<br>'+
			'안심하실 수 있도록, 송금 진행 상황을<br>'+
			'문자로 안내해드립니다.</p>'+
			'</div>'+
			'</div>'+
			'<div class="card-pros">'+
			'<div class="moin-index-box">'+
			'<h3>'+
			'철저한 보안</h3>'+
			'<p>'+
			'안전성이 보장된 블록체인<br>'+
			'기술을 기반으로 하며,<br>'+
			'모든 정보는 암호화 됩니다.</p>'+
			'</div>'+
			'</div>'+
			'</div>'+
			'</div>'+
			'</div>'+
			'<div class="themoin-landing-applink">'+
			'<h1>'+
			'모인 앱을 다운로드 받으세요</h1>'+
			'<div class="item-container">'+
			'<a class="btn-android">'+
			'<img src="https://img.themoin.com/public/img/page-1.svg">'+
			'<div class="hd-button">'+
			'안드로이드 앱 다운로드</div>'+
			'</a>'+
			'<a class="btn-ios">'+
			'<img src="https://img.themoin.com/public/img/img-apple.svg">'+
			'<div class="hd-button">'+
			'iOS 앱 다운로드</div>'+
			'</a>'+
			'</div>'+
			'</div>'+
			'<div class="section-student">'+
			'<div>'+
			'<h2>'+
			'해외에서 유학 및 교환학생 중인 학생들을 위한 선물!</h2>'+
			'<p>'+
			'모인으로 해외송금 수수료 할인 혜택을 받으세요!</p>'+
			'<a>'+
			'신청하기</a>'+
			'</div>'+
			'</div>'+
			'</div>'+
			'<div class="themoin-footer">'+
			'<div>'+
			'<div class="section top">'+
			'<div class="contact">'+
			'<h3>'+
			'언어별 고객 센터</h3>'+
			'<h3 class="phone ko">'+
			'한국어 : 02-2088-1583 / 070-5089-2017</h3>'+
			'<p>'+
			'<span>'+
			'평일 : 09:00 ~ 19:00 (주말/공휴일 휴무)</span>'+
			'<br>'+
			'(점심시간 : 12:30 ~ 13:30)<br>'+
			'팩스 : 0504-393-9687<br>'+
			'이메일 : support@themoin.com<br>'+
			'카카오톡 플러스친구 : @모인 MOIN</p>'+
			'<h3 class="phone np">'+
			'नेपाली : 070-4367-0297</h3>'+
			'<p>'+
			'<span>'+
			'Weekday : 12:45 ~ 21:45</span>'+
			'<br>'+
			'email : support_nepal@themoin.com</p>'+
			'<h3 class="business">'+
			'비즈니스 및 제휴 문의 : 070-4367-0113</h3>'+
			'</div>'+
			'<div class="spacer">'+
			'</div>'+
			'<div class="social">'+
			'<h3 class="desktop">'+
			'Follow Us</h3>'+
			'<a href="https://www.facebook.com/moincompany" target="new">'+
			'<img src="https://img.themoin.com/public/img/btn-facebook.svg">'+
			'<span class="desktop">'+
			'모인 페이스북 페이지</span>'+
			'</a>'+
			'<a href="http://blog.naver.com/moin_company" target="new">'+
			'<img src="https://img.themoin.com/public/img/btn-blog.svg">'+
			'<span class="desktop">'+
			'모인 네이버 블로그</span>'+
			'</a>'+
			'<a href="https://plus.kakao.com/home/ne7qlhac" target="new">'+
			'<img src="https://img.themoin.com/public/img/btn-kakaotalk.svg">'+
			'<span class="desktop">'+
			'모인 카카오톡 플러스친구</span>'+
			'</a>'+
			'</div>'+
			'<div class="spacer">'+
			'</div>'+
			'<div class="links">'+
			'<h3 class="desktop">'+
			'Company</h3>'+
			'<a class="caption">'+
			'회사 소개</a>'+
			'<a class="caption">'+
			'서비스 소개</a>'+
			'<a class="caption">'+
			'이용약관</a>'+
			'<a class="caption">'+
			'개인정보 취급방침</a>'+
			'<a class="caption">'+
			'F A Q</a>'+
			'<a class="caption">'+
			'공지사항</a>'+
			'<h3 class="event-univ">'+
			'학생 및 유학기관 할인</h3>'+
			'<a class="caption">'+
			'학생 및 유학기관 할인 통합페이지</a>'+
			'</div>'+
			'</div>'+
			'<div class="section bottom">'+
			'<div class="company">'+
			'<img src="https://img.themoin.com/public/img/footer-logo-2.svg">'+
			'<p>'+
			'(주)머니허브 | 대표이사 : 머니허브 | 사업자등록번호 : 123-11-33333<br>'+
			'해외소액송금업 등록번호 : 2019-11<br>'+
			'주소 : 서울시 <br>'+
			'© 2018 MONEYHUB, Inc. All Rights Reserved.</p>'+
			'</div>'+
			'<div class="spacer">'+
			'</div>'+
			'</div>'+
			'</div>'+
			'</div>'+
			'<div style="display:none">'+
			'</div>'+
			'</div>'+
			'</div>'
		}
}