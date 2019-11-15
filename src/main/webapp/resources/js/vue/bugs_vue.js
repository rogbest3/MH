"use strict"
var bugs_vue = bugs_vue || {}
bugs_vue ={
	bugs_form : ()=>{
		return '<div id="CHARTday">'+
		'<div class="listControls floatSubMenu" floataddclass="over" lmprop="width" style="margin-left: 0px;">'+
		'<div class="innerContainer">'+
		'<label class="checkbox">'+
		'<input type="checkbox" id="checkCHARTday" onclick="bugs.wiselog.area("list_tr_01_chart");" name="checkAll" title="곡 목록 전체">'+
		'</label>'+
		'<span class="btns">'+
		'<a href="javascript:;" onclick="bugs.wiselog.area("list_tr_02_chart");__trackListCHARTday.listen(this,true);'+
		'" class="btnNormal play" aria-label="새창"><span class="blind">선택된 곡 재생</span>듣기</a>'+
		'<a href="javascript:;" onclick="bugs.wiselog.area("list_tr_03_chart");__trackListCHARTday.listen(this,false);'+
		'" class="btnNormal addPlaylist" aria-label="새창">재생목록에 추가</a>'+
		'<a href="javascript:;" onclick="bugs.wiselog.area("list_tr_04_chart");__trackListCHARTday.addToMyAlbum(this);'+
		'" class="btnNormal addAlbum" aria-label="새창">내 앨범에 담기</a>'+
		'<a href="javascript:;" onclick=" bugs.wiselog.area("list_tr_05_chart");bugs.ui.showLoginLayer();" class="btnNormal download" aria-label="새창">다운로드</a>'+
		'</span>'+
		'<span class="btns play">'+
		'<span class="leftBar"></span>'+
		'<a href="javascript:;" onclick="bugs.wiselog.area("list_tr_06_chart");__trackListCHARTday.listenAll(this,"ALL", false);'+
		'" class="btnNormal play" aria-label="새창">전체 듣기<small>(재생목록 추가)</small></a>'+
		'<a href="javascript:;" onclick="bugs.wiselog.area("list_tr_18_chart");__trackListCHARTday.listenAll(this,"ALL", true);'+
		'" class="btnNormal play changePlaylist" aria-label="새창">전체 듣기<small>(재생목록 교체)</small></a>'+
		'</span>'+
		'</div>'+
		'</div>'+
		'<table class="list trackList byChart">'+
		'<caption>곡 목록</caption>'+
		'<thead>'+
		'<tr>'+
		'<th scope="col" class="check"></th>'+
		'<th scope="col" class="ranking"><span>순위</span></th>'+
		'<th scope="col" class="albumArt"></th>'+
		'<th scope="col" class="trackInfo"></th>'+
		'<th scope="col" class="title"><span>곡</span></th>'+
		'<th scope="col" class="artist"><span>아티스트</span></th>'+
		'<th scope="col" class="album"><span>앨범</span></th>'+
		'<th scope="col" class="action play"><span>듣기</span></th>'+
		'<th scope="col" class="action add01"><span>재생목록</span></th>'+
		'<th scope="col" class="action add02"><span>내앨범</span></th>'+
		'<th scope="col" class="action download"><span>다운</span></th>'+
		'<th scope="col" class="action mv"><span>영상</span></th>'+
		'<th scope="col" class="action etc"><span>기타</span></th>'+
		'</tr>'+
		'</thead>'+
		'<tbody>'+
		'<tr albumid="20287171" artistid="37709" mvid="560690" trackid="31746566" multiartist="N" rowtype="track">'+
		'<input type="hidden" name="_isStream" value="31746566">'+
		'<input type="hidden" name="_isDown" value="31746566">'+
		'<td class="check"><input type="checkbox" value="31746566" name="check" disc_id="1" title="늦은 밤 너의 집 앞 골목길에서" buyminquality="T"></td>'+
		'<td>'+
		'<div class="ranking">'+
		'<strong>1</strong>'+
		'<p class="change duration"><em>6일</em></p>'+
		'</div>'+
		'</td>'+
		'<td>'+
		'<a href="https://music.bugs.co.kr/album/20287171?wl_ref=list_tr_07_chart" class="thumbnail" onclick="'+
		'">'+
		'<span class="mask"></span>'+
		'<img src="https://image.bugsm.co.kr/album/images/50/202871/20287171.jpg?version=20191108002403.0" onerror="bugs.utils.imgError(this);" alt="늦은 밤 너의 집 앞 골목길에서 대표이미지">'+
		'</a>'+
		'</td>'+
		'<td>'+
		'<a href="https://music.bugs.co.kr/track/31746566?wl_ref=list_tr_08_chart" class="trackInfo" onclick="'+
		'">곡정보</a>'+
		'</td>'+
		'<th scope="row">'+
		'<p class="title" adult_yn="N">'+
		'<a href="javascript:;" adultcheckval="1" onclick="bugs.wiselog.area("list_tr_09_chart");bugs.music.listen("31746566",true);'+
		'" title="늦은 밤 너의 집 앞 골목길에서" aria-label="새창">늦은 밤 너의 집 앞 골목길에서</a>'+
		'</p>'+
		'</th>'+
		'<td class="left">'+
		'<p class="artist">'+
		'<a href="https://music.bugs.co.kr/artist/37709?wl_ref=list_tr_10_chart" title="노을" onclick="'+
		'">노을</a>'+
		'</p>'+
		'</td>'+
		'<td class="left">'+
		'<a href="https://music.bugs.co.kr/album/20287171?wl_ref=list_tr_11_chart" class="album" title="늦은 밤 너의 집 앞 골목길에서" onclick="'+
		'">늦은 밤 너의 집 앞 골목길에서</a>'+
		'</td>'+
		'<td>'+
		'<a href="javascript:;" adultcheckval="1" onclick="bugs.wiselog.area("list_tr_12_chart");bugs.music.listen("31746566",true);'+
		'" class="btn play" aria-label="새창">듣기</a>'+
		'</td>'+
		'<td>'+
		'<a href="javascript:;" adultcheckval="1" onclick="bugs.wiselog.area("list_tr_13_chart");bugs.music.listen("31746566");'+
		'" class="btn addPlaylist" aria-label="새창">재생목록에 추가</a>'+
		'</td>'+
		'<td>'+
		'<a href="javascript:;" onclick="bugs.wiselog.area("list_tr_14_chart");bugs.music.addTrackToMyAlbum(this,"31746566");'+
		'" track_title="늦은 밤 너의 집 앞 골목길에서" class="btn addAlbum">내 앨범에 담기</a>'+
		'</td>'+
		'<td>'+
		'<a href="javascript:;" adultcheckval="1" onclick="bugs.wiselog.area("list_tr_15_chart");bugs.layermenu.down(this,"31746566","true","true","44.1","true","96", null );'+
		'" class="btn download flac" aria-label="새창"><em class="flac">flac </em>다운로드</a>'+
		'</td>'+
		'<td>'+
		'<a href="javascript:;" onclick="bugs.wiselog.area("list_tr_16_chart");'+
		'bugs.layermenu.mv(this,31746566, 560690, "Y", "Y", "Y", "Y", 31746566, "N","OVER_12", "Y");'+
		'" class="btn viewMV" aria-label="새창">영상 재생</a>'+
		'</td>'+
		'<td>'+
		'<a href="javascript:;" onclick="bugs.wiselog.area("list_tr_17_chart");'+
		'bugs.layermenu.trackMoreAction(this,"31746566","0","20287171", "bugs.music.listenRadioFromSeed(\"31746566\",\"track\")","N", "Y", "_chart");'+
		' track_title="늦은 밤 너의 집 앞 골목길에서" artist_id="37709" artist_disp_nm="노을" layerpositiontarget="td" layer_type="CHART" class="btnActions">기타 기능</a>'+
		'</td>'+
		'</tr>'+
		'<tr albumid="20287979" artistid="13277" mvid="562390" trackid="31750841" multiartist="N" rowtype="track">'+
		'<input type="hidden" name="_isStream" value="31750841">'+
		'<input type="hidden" name="_isDown" value="31750841">'+
		'<td class="check"><input type="checkbox" value="31750841" name="check" disc_id="1" title="이 번호로 전화해줘" buyminquality="T"></td>'+
		'+</tr>'+
		'</tbody>'+
		'+</table>'+
		'</div>'
	}
};