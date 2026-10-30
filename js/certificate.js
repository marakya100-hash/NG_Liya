window.StoryCertificate={async create(C){
await document.fonts.ready;await Promise.all([document.fonts.load('600 120px "Cormorant Garamond"'),document.fonts.load('100px "Marck Script"'),document.fonts.load('600 30px Nunito')]);
const W=1800,H=1270,canvas=document.createElement('canvas');canvas.width=W;canvas.height=H;const g=canvas.getContext('2d');
const bg=g.createLinearGradient(0,0,W,H);bg.addColorStop(0,'#123c38');bg.addColorStop(.5,'#082b2c');bg.addColorStop(1,'#1c4940');g.fillStyle=bg;g.fillRect(0,0,W,H);
const gold=g.createLinearGradient(0,0,W,H);gold.addColorStop(0,'#917039');gold.addColorStop(.3,'#f8e1a3');gold.addColorStop(.65,'#bd9654');gold.addColorStop(1,'#e6c788');
g.strokeStyle=gold;g.lineWidth=3;g.strokeRect(26,26,W-52,H-52);g.lineWidth=1;g.strokeRect(39,39,W-78,H-78);
const paper=g.createLinearGradient(0,70,W,H);paper.addColorStop(0,'#fffdf4');paper.addColorStop(.6,'#f6eedc');paper.addColorStop(1,'#eadcc0');g.shadowColor='#00151299';g.shadowBlur=28;g.fillStyle=paper;g.fillRect(85,85,W-170,H-170);g.shadowBlur=0;
g.strokeStyle='#ba995c';g.lineWidth=1.5;g.strokeRect(106,106,W-212,H-212);g.strokeStyle='#ba995c55';g.strokeRect(119,119,W-238,H-238);
function star(x,y,r){g.save();g.translate(x,y);g.beginPath();for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,s=i%2?r*.43:r;i?g.lineTo(Math.cos(a)*s,Math.sin(a)*s):g.moveTo(Math.cos(a)*s,Math.sin(a)*s)}g.closePath();g.fillStyle=gold;g.fill();g.restore()}
function sprig(x,y,angle,scale=1){g.save();g.translate(x,y);g.rotate(angle);g.scale(scale,scale);g.strokeStyle='#3c6152';g.lineWidth=3;g.beginPath();g.moveTo(0,0);g.quadraticCurveTo(75,-20,155,-110);g.stroke();for(let i=0;i<10;i++){const px=i*13,py=-i*i*1.05;g.save();g.translate(px,py);g.strokeStyle=i%2?'#3c6152':'#75917b';g.lineWidth=2;for(let j=0;j<4;j++){g.beginPath();g.moveTo(0,0);g.lineTo(-18+j*3,-28-j*4);g.moveTo(0,0);g.lineTo(32+j*4,6-j*5);g.stroke()}g.restore()}g.restore()}
[[125,245,-.25],[W-125,245,Math.PI+.25],[125,H-245,.25],[W-125,H-245,Math.PI-.25]].forEach(a=>sprig(...a,1.2));
for(let i=0;i<22;i++){g.fillStyle=i%3?'#b38c4744':'#e3c17a';g.beginPath();g.arc(145+(i*139)%1510,148+(i*97)%955,1.5+i%3,0,7);g.fill()}
star(900,190,40);star(820,190,9);star(980,190,9);
g.textAlign='center';g.fillStyle='#9a7944';g.font='700 21px Nunito';g.fillText('РЕЗИДЕНЦИЯ ДЕДА МОРОЗА · СЕВЕРНЫЙ ПОЛЮС',900,265);
g.fillStyle='#153c36';g.font='600 128px "Cormorant Garamond"';g.fillText('Грамота',900,398);g.fillStyle='#9a773f';g.font='62px "Marck Script"';g.fillText('Хранителя новогоднего волшебства',900,474);
g.strokeStyle='#c4a770';g.beginPath();g.moveTo(620,510);g.lineTo(1180,510);g.stroke();
const load=src=>new Promise(resolve=>{const im=new Image();im.onload=()=>resolve(im);im.onerror=()=>resolve(null);im.src=src});
const raw=window.STORY_CONFIG||{},path=typeof raw.childPhoto==='string'&&/^(\.\/)?assets\/[\w/. -]+\.(webp|png|jpe?g)$/i.test(raw.childPhoto)?raw.childPhoto:'./assets/child-demo.webp';
const portrait=await load(path)||await load('./assets/child-demo.webp');
if(portrait){const cx=420,cy=708,r=141;g.save();g.beginPath();g.arc(cx,cy,r,0,Math.PI*2);g.clip();const ratio=Math.max(r*2/portrait.width,r*2/portrait.height);g.drawImage(portrait,cx-portrait.width*ratio/2,cy-portrait.height*ratio/2,portrait.width*ratio,portrait.height*ratio);g.restore();g.strokeStyle=gold;g.lineWidth=5;g.beginPath();g.arc(cx,cy,r+7,0,7);g.stroke();g.lineWidth=1;g.beginPath();g.arc(cx,cy,r+15,0,7);g.stroke();g.fillStyle='#866d43';g.font='700 18px Nunito';g.fillText('ГЕРОЙ НОВОГОДНЕГО ЧУДА',420,903)}
g.fillStyle='#88754e';g.font='700 20px Nunito';g.fillText('НАГРАЖДАЕТСЯ',1080,583);g.fillStyle='#17483b';let size=110;do{g.font=`${size}px "Marck Script"`;if(g.measureText(C.childName).width<=900)break;size-=4}while(size>32);g.fillText(C.childName,1080,705);
g.fillStyle='#4e5a4d';g.font='600 29px Nunito';['За доброе сердце и смелость,','за помощь сказочным друзьям','и исполнение секретной миссии Деда Мороза.'].forEach((t,i)=>g.fillText(t,1080,780+i*46));
g.strokeStyle='#c2aa7855';g.beginPath();g.moveTo(260,970);g.lineTo(1540,970);g.stroke();g.fillStyle='#1e4d40';g.font='51px "Marck Script"';g.fillText('С верой в твоё волшебство, Дед Мороз',800,1041);g.font='700 20px Nunito';g.fillStyle='#92784d';g.fillText(`НОВЫЙ ГОД ${C.newYear}`,800,1095);
const sx=1430,sy=1050;g.shadowColor='#58201344';g.shadowBlur=10;g.shadowOffsetY=5;g.fillStyle='#942d42';g.beginPath();for(let i=0;i<64;i++){const a=i*Math.PI/32,r=i%2?82:86;i?g.lineTo(sx+Math.cos(a)*r,sy+Math.sin(a)*r):g.moveTo(sx+r,sy)}g.closePath();g.fill();g.shadowBlur=0;g.shadowOffsetY=0;g.strokeStyle='#edcd89';g.lineWidth=2;g.beginPath();g.arc(sx,sy,71,0,7);g.stroke();star(sx,sy-5,30);g.fillStyle='#ffe6a6';g.font='700 12px Nunito';g.fillText('ДЕД МОРОЗ',sx,sy+46);
const blob=await new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(new Error('PNG export failed')),'image/png'));return{canvas,url:URL.createObjectURL(blob)};}};
