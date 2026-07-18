function initMain(){
const reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
const fine = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
const HAS_GSAP = (typeof gsap!=='undefined');
const HAS_ST = HAS_GSAP && (typeof ScrollTrigger!=='undefined');
if(HAS_ST) gsap.registerPlugin(ScrollTrigger);

/* CURSOR + GLOW */
const dot=document.getElementById('cdot'),ring=document.getElementById('cring'),glow=document.getElementById('glow');
if(fine && dot && ring && glow){
  let mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my,gx=mx,gy=my;
  addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY; if(dot) dot.style.transform=`translate(${mx}px,${my}px) translate(-50%,-50%)`;});
  (function loop(){rx+=(mx-rx)*.18;ry+=(my-ry)*.18;gx+=(mx-gx)*.08;gy+=(my-gy)*.08;
    if(ring) ring.style.transform=`translate(${rx}px,${ry}px) translate(-50%,-50%)`;
    if(glow) glow.style.transform=`translate(${gx}px,${gy}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);})();
  document.querySelectorAll('a,button,.svc,.ind,.tcell,.reg,.magnetic').forEach(el=>{
    el.addEventListener('mouseenter',()=>{ if(ring) ring.classList.add('hover'); });
    el.addEventListener('mouseleave',()=>{ if(ring) ring.classList.remove('hover'); });
  });
}

/* PRELOADER */
const loader=document.getElementById('loader');
function endLoad(){
  if(!loader) { document.body.style.overflow=''; if(!reduce && HAS_GSAP) heroIn(); else heroFallback(); return; }
  if(loader.classList.contains('done'))return;
  loader.classList.add('done');
  document.body.style.overflow='';
  if(!reduce && HAS_GSAP) heroIn(); else heroFallback();
}
document.body.style.overflow='hidden';
window.addEventListener('load',()=>setTimeout(endLoad,1400));
setTimeout(endLoad,2200);
function heroFallback(){
  document.querySelectorAll('[data-hero-logo]').forEach(e=>e.style.opacity='1');
  document.querySelectorAll('.hero h1 .line i').forEach(i=>i.style.transform='none');
  document.querySelectorAll('[data-hero-fade]').forEach(e=>{e.style.opacity='1';e.style.transform='none';});
}

function heroIn(){
  const tl=gsap.timeline({defaults:{ease:'power3.out'}});
  tl.to('[data-hero-logo]',{opacity:1,duration:1},0)
    .from('[data-hero-logo]',{y:24,duration:1.2},0)
    .to('.hero h1 .line i',{yPercent:0,duration:1.1,stagger:.12,ease:'power4.out'},.35)
    .from('[data-hero-fade]',{opacity:0,y:26,duration:1,stagger:.12},.75);
}
if(HAS_GSAP && !reduce){gsap.set('[data-hero-logo]',{opacity:0});}
if(reduce){heroFallback();}

/* NAV */
const nav=document.getElementById('nav');
addEventListener('scroll',()=>{ if(nav) nav.classList.toggle('shrink',scrollY>60); },{passive:true});
const burger=document.getElementById('burger'),drawer=document.getElementById('drawer');
if(burger && drawer){
  burger.addEventListener('click',()=>{drawer.classList.toggle('open');burger.classList.toggle('x');document.body.style.overflow=drawer.classList.contains('open')?'hidden':'';});
}
document.querySelectorAll('[data-link]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href');
    if(id&&id.startsWith('#')){e.preventDefault();const t=document.querySelector(id);
      if(t){ if(drawer) drawer.classList.remove('open'); if(burger) burger.classList.remove('x'); document.body.style.overflow='';
        t.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'});}}
  });
});

/* PRODUCT CATEGORIES DATA */
const categories=[
  ['Pearl Embellishments','Lustrous pearls set by hand into flowing motifs.','https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=700&q=80'],
  ['Beadwork','Glass, crystal & seed beads counted bead by bead.','https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80'],
  ['Sequins','Light-catching sequins laid in radiant fields.','https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=700&q=80'],
  ['Crystal Work','Precision-set crystal for couture brilliance.','https://images.unsplash.com/photo-1561526116-e2460f4d40a8?auto=format&fit=crop&w=700&q=80'],
  ['Cord Embroidery','Raised cord and soutache worked in relief.','https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80'],
  ['French Lace','Delicate lace grounds embellished by hand.','https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=80'],
  ['Bridal Fabrics','Heirloom surfaces for the couture bridal aisle.','https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&w=700&q=80'],
  ['Couture Fabrics','Signature surfaces for runway and atelier.','https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=700&q=80'],
  ['Evening Wear Fabrics','Fluid, light-responsive cloth for after dark.','https://images.unsplash.com/photo-1551048632-24e444b48a3e?auto=format&fit=crop&w=700&q=80'],
  ['Luxury Net Fabrics','Sheer nets grounded with fine embellishment.','https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=700&q=80'],
];
const cg=document.querySelector('[data-cat-grid]');
if(cg){
  categories.forEach((s,i)=>{
  const n=String(i+1).padStart(2,'0');
  const d=document.createElement('div');d.className='svc';
  d.innerHTML=`<img loading="lazy" src="${s[2]}" alt="${s[0]} — luxury surface embellishment"/><span class="border-stitch"></span>
    <div class="svc-bd"><span class="num">${n} · Collection</span><h3>${s[0]}</h3><div class="svc-x">${s[1]}</div></div>`;
  cg.appendChild(d);
  });
}

/* TRUST & CREDIBILITY DATA */
const trust=[
  ['30+','Years Industry Experience','Three decades perfecting luxury surface embellishment.'],
  ['02','Global Export Network','Delivering to buyers across four continents.'],
  ['03','Worldwide B2B Supply','A dependable partner for houses and manufacturers.'],
  ['04','Premium Quality Materials','Real metal, fine crystal and noble fibres only.'],
  ['05','Experienced Artisan Team','Master karigars carrying generational technique.'],
  ['06','Custom Surface Development','Bespoke motifs built from a sketch or a word.'],
  ['07','OEM & Private Label','Discreet production and private-label solutions.'],
];
const tg=document.querySelector('[data-trust]');
if(tg){
  trust.forEach(t=>{
    const d=document.createElement('div');d.className='tcell';
    d.innerHTML=`<div class="tnum">${t[0]}</div><div class="tt">${t[1]}</div><div class="td">${t[2]}</div><span class="tmark"></span>`;
    tg.appendChild(d);
  });
}

/* INDUSTRIES WE SERVE DATA */
const industries=[
  ['Fashion Designers','Signature surfaces for seasonal collections.'],
  ['Couture Houses','Bespoke embellishment for the runway.'],
  ['Bridal Designers','Heirloom fabrics for the couture bridal aisle.'],
  ['Apparel Manufacturers','Scaled embellishment for production runs.'],
  ['Exporters','Reliable supply for international trade.'],
  ['Wholesalers','Curated volume for luxury distribution.'],
  ['Retail Brands','Premium finishes for retail lines.'],
  ['Fashion Labels','Private-label surfaces under your name.'],
];
const ig=document.querySelector('[data-industries]');
if(ig){
  industries.forEach((s,i)=>{
    const n=String(i+1).padStart(2,'0');
    const d=document.createElement('div');d.className='ind';
    d.innerHTML=`<span class="in">${n}</span><div class="it">${s[0]}</div><div class="id">${s[1]}</div>`;
    ig.appendChild(d);
  });
}

/* REVEALS (IntersectionObserver) */
const io=new IntersectionObserver((es)=>{
  es.forEach(e=>{if(e.isIntersecting){
    const el=e.target;el.classList.add('in');
    if(el.hasAttribute('data-stagger')){
      [...el.children].forEach((c,i)=>{c.style.transitionDelay=(i*90)+'ms';});
    }
    io.unobserve(el);
  }});
},{threshold:.18,rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.r-up,.r-mask,[data-stagger],[data-fig]').forEach(el=>{
  if(el.hasAttribute('data-fig'))el.classList.add('r-up');
  io.observe(el);
});

/* HERO SILK PARALLAX */
if(!reduce && HAS_ST){
  gsap.to('#silk',{yPercent:18,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
  gsap.to('.hero-inner',{yPercent:-12,opacity:.4,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
}

/* COUNTERS */
document.querySelectorAll('[data-count]').forEach(el=>{
  const target=+el.getAttribute('data-count');
  const run=()=>{
    if(reduce || !HAS_GSAP){el.textContent=target;return;}
    const o={v:0};gsap.to(o,{v:target,duration:2,ease:'power2.out',onUpdate:()=>{el.textContent=Math.round(o.v);}});
  };
  if(HAS_ST){ScrollTrigger.create({trigger:el,start:'top 88%',once:true,onEnter:run});}
  else{const co=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){run();co.disconnect();}});},{threshold:.4});co.observe(el);} 
});

/* RUNWAY HORIZONTAL */
const track=document.getElementById('rwTrack'),prog=document.getElementById('rwProg');
if(track && prog && !reduce && fine && HAS_ST){
  function setupRunway(){
    const scrollLen=track.scrollWidth-window.innerWidth+ (window.innerWidth*0.05);
    gsap.to(track,{x:()=>-(scrollLen),ease:'none',
      scrollTrigger:{trigger:'#runway',start:'top top',end:()=>'+='+scrollLen,pin:true,scrub:1,invalidateOnRefresh:true,
        onUpdate:s=>{if(prog) prog.style.width=(s.progress*100)+'%';}}});
  }
  setupRunway();
}else{
  const outer=document.querySelector('.rw-track-outer');
  if(outer){ outer.style.overflowX='auto'; outer.style.scrollSnapType='x proximity'; }
  if(track) track.style.transform='none';
}

/* PROCESS TIMELINE */
const pline=document.getElementById('pline');
if(pline){
  const fill=document.createElement('span');fill.className='pfill';pline.appendChild(fill);
  const steps=[...pline.querySelectorAll('.pstep')];
  if(HAS_ST && !reduce){
    ScrollTrigger.create({trigger:pline,start:'top 75%',end:'bottom 60%',scrub:.6,
      onUpdate:s=>{
        const p=s.progress;fill.style.width=(p*90)+'%';
        const active=Math.floor(p*steps.length+.0001);
        steps.forEach((st,i)=>st.classList.toggle('on',i<=active && p>0));
      }});
  }else{
    const po=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){fill.style.transition='width 1.6s ease';fill.style.width='90%';steps.forEach(st=>st.classList.add('on'));po.disconnect();}});},{threshold:.2});
    po.observe(pline);
  }
}

/* TESTIMONIALS */
const cards=[...document.querySelectorAll('.tcard')],tdots=document.getElementById('tdots');
let ti=0,tTimer;
if(tdots && cards.length){
  cards.forEach((c,i)=>{const b=document.createElement('button');if(i===0)b.classList.add('on');
    b.addEventListener('click',()=>{showT(i);restartT();});tdots.appendChild(b);});
  function showT(i){ if(cards[ti]) cards[ti].classList.remove('active'); if(tdots.children[ti]) tdots.children[ti].classList.remove('on');
    ti=i; if(cards[ti]) cards[ti].classList.add('active'); if(tdots.children[ti]) tdots.children[ti].classList.add('on');}
  function nextT(){showT((ti+1)%cards.length);} 
  function restartT(){clearInterval(tTimer);tTimer=setInterval(nextT,5500);} 
  restartT();
}

/* MAGNETIC BUTTONS */
if(fine && !reduce && HAS_GSAP){
  document.querySelectorAll('.magnetic').forEach(btn=>{
    btn.addEventListener('mousemove',e=>{const r=btn.getBoundingClientRect();
      const x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;
      gsap.to(btn,{x:x*.32,y:y*.42,duration:.5,ease:'power3.out'});});
    btn.addEventListener('mouseleave',()=>gsap.to(btn,{x:0,y:0,duration:.6,ease:'elastic.out(1,.4)'}));
  });
}

/* NEWSLETTER */
const nb=document.getElementById('newsBtn'),ne=document.getElementById('newsEmail');
if(nb) nb.addEventListener('click',()=>{const v=(ne && ne.value?ne.value:'').trim();
  if(/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)){nb.textContent='Joined'; if(ne){ne.value=''; ne.placeholder='Welcome to the maison';} setTimeout(()=>nb.textContent='Join',2500);} 
  else{ if(ne){ne.placeholder='Enter a valid email'; ne.focus();} }});

/* refresh triggers after images settle */
  addEventListener('load',()=>setTimeout(()=>{if(HAS_ST)ScrollTrigger.refresh();},300));
}

if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',initMain);
}else{
  initMain();
}
