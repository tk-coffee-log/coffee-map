// 各ページの小さな地図。ページ内の <script type="application/json" id="pins"> を読んでピンを立てる。
(function(){
  var el=document.getElementById("pmap"), data=document.getElementById("pins");
  if(!el||!data||typeof L==="undefined") return;
  var pins=JSON.parse(data.textContent||"[]").filter(function(p){return p.lat!=null});
  if(!pins.length){el.hidden=true;return;}
  var map=L.map(el,{scrollWheelZoom:false});
  L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png",{minZoom:5,maxZoom:18,
    attribution:'<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank" rel="noopener">地理院タイル</a>'}).addTo(map);
  var pts=[];
  pins.forEach(function(p){
    var cls="mk"+(p.k?" "+p.k:""), s=p.k==="pick"?26:p.k==="unv"?16:p.k==="here"?30:22;
    var icon=L.divIcon({className:"",html:'<div class="'+cls+'"></div>',iconSize:[s,s],iconAnchor:[s/2,s/2]});
    var m=L.marker([p.lat,p.lng],{icon:icon,title:p.n,alt:p.n,zIndexOffset:p.k==="here"?2000:p.k==="pick"?1000:0}).addTo(map);
    if(p.u) m.on("click",function(){location.href=p.u});
    pts.push([p.lat,p.lng]);
  });
  if(pts.length===1) map.setView(pts[0],16); else map.fitBounds(pts,{padding:[24,24],maxZoom:16});
})();
