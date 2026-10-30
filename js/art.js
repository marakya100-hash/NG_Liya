window.Art={
star:'<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50 3 62 35 97 37 69 59 78 94 50 75 22 94 31 59 3 37 38 35Z" fill="currentColor"/><path d="M50 12 50 70 27 85 36 57 12 40 42 40Z" fill="#fff6c8" opacity=".38"/></svg>',
item(type){const ids=['carrot','scarf','hat','left','right','button','broom','nuts'],i=Math.max(0,ids.indexOf(type));return `<span class="item-art" aria-hidden="true" style="--ix:${i%4};--iy:${Math.floor(i/4)}"></span>`},
lantern:'<img src="./assets/premium/lantern.webp" alt="Волшебный золотой фонарь">',
receiver(kind){const i=['bunny','squirrel','penguin'].indexOf(kind);return `<span class="animal-art" aria-hidden="true" style="--ai:${i}"></span>`},
wearAnchors:{hat:[.47,.17],carrot:[.56,.29],scarf:[.5,.5],left:[.14,.46],right:[.87,.45],button:[.53,.77],broom:[.17,.75]},
snowman(items,newItem=null){
// The fitted garment regions share a canvas and registration with the bare character.
const masks={
hat:'polygon(8% 0,82% 0,82% 30%,77% 31%,76% 23%,73% 18%,68% 14%,60% 12%,52% 13%,44% 16%,37% 20%,32% 25%,29% 30%,28% 35%,30% 39%,26% 41%,23% 38%,21% 27%,19% 22%,9% 19%)',
carrot:'polygon(50% 27%,64% 25%,66% 28%,61% 31%,51% 33%,49% 31%)',
scarf:'polygon(32% 40%,71% 39%,75% 43%,77% 50%,65% 51%,65% 61%,60% 67%,43% 65%,37% 68%,24% 62%,26% 54%,29% 48%,30% 44%)',
left:'polygon(2% 34%,18% 34%,26% 43%,26% 52%,21% 55%,12% 54%,3% 48%)',
right:'polygon(78% 37%,89% 33%,100% 35%,100% 52%,85% 54%,77% 49%)',
button:'ellipse(6% 5% at 53% 77%)',
broom:'polygon(10% 28%,16% 28%,20% 60%,25% 64%,31% 93%,20% 97%,0 97%,0 81%,12% 62%)'
};
const order=['hat','scarf','button','carrot','broom','left','right'];
const layers=order.filter(id=>items.includes(id)).map(id=>`<img class="fitted-layer ${id===newItem?'dressing':''}" data-worn="${id}" style="clip-path:${masks[id]};--anchor-x:${this.wearAnchors[id][0]*100}%;--anchor-y:${this.wearAnchors[id][1]*100}%" src="./assets/premium/snowman-dressed.webp" alt="">`).join('');
return `<div class="snow-character fitted-character" role="img" aria-label="Добрый снеговик: ${items.length} из 7 вещей"><img class="snow-body-art" src="./assets/premium/snowman-bare.webp" alt="">${layers}${items.length===7?'<img class="fully-dressed" src="./assets/premium/snowman-dressed.webp" alt="">':''}</div>`}
};
