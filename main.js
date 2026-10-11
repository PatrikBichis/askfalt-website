/* Askfält – webbplats v1.0. Ingen spårning, inga externa beroenden. */
(function(){
  'use strict';
  var d=document,root=d.documentElement,reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.classList.add('js');

  // Header: solid on scroll + mobile menu
  var header=d.querySelector('.site-header'),toggle=d.querySelector('.menu-toggle'),links=d.getElementById('nav-links');
  function onScroll(){if(header)header.classList.toggle('solid',window.scrollY>40)}
  onScroll();window.addEventListener('scroll',onScroll,{passive:true});
  function setMenu(open){root.classList.toggle('menu-open',open);if(toggle)toggle.setAttribute('aria-expanded',String(open))}
  if(toggle&&links){
    toggle.addEventListener('click',function(){setMenu(!root.classList.contains('menu-open'))});
    links.addEventListener('click',function(e){if(e.target.closest('a'))setMenu(false)});
    d.addEventListener('keydown',function(e){if(e.key==='Escape'&&root.classList.contains('menu-open')){setMenu(false);toggle.focus()}});
  }

  // Reveal on scroll
  var rev=d.querySelectorAll('[data-reveal]');
  if('IntersectionObserver' in window&&!reduce){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px',threshold:.08});
    rev.forEach(function(el){io.observe(el)});
  }else{rev.forEach(function(el){el.classList.add('in')})}

  // Hero parallax
  var bg=d.querySelector('.hero-bg');
  if(bg&&!reduce){
    var ticking=false;
    window.addEventListener('scroll',function(){
      if(ticking)return;ticking=true;
      requestAnimationFrame(function(){var y=window.scrollY;if(y<window.innerHeight*1.2)bg.style.transform='translate3d(0,'+(y*.22).toFixed(1)+'px,0)';ticking=false});
    },{passive:true});
  }

  // Drifting ash (canvas, paused offscreen / hidden tab)
  var cv=d.querySelector('.ash');
  if(cv&&cv.getContext&&!reduce){
    var ctx=cv.getContext('2d'),P=[],W=0,H=0,dpr=Math.min(window.devicePixelRatio||1,2),run=false,raf=0,last=0;
    function size(){var r=cv.getBoundingClientRect();W=r.width;H=r.height;cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
      var n=Math.round(Math.min(90,W*H/16000));while(P.length<n)P.push(mk(true));P.length=n}
    function mk(any){var ember=Math.random()<.12;return{x:Math.random()*W,y:any?Math.random()*H:-10,s:ember?1.6+Math.random()*1.4:1+Math.random()*2.2,vy:.15+Math.random()*.45,vx:-.1+Math.random()*.35,ph:Math.random()*6.28,a:.25+Math.random()*.5,e:ember}}
    function tick(t){var dt=Math.min(50,t-(last||t))/16.7;last=t;ctx.clearRect(0,0,W,H);
      for(var i=0;i<P.length;i++){var p=P[i];p.ph+=.012*dt;p.y+=p.vy*dt;p.x+=(p.vx+Math.sin(p.ph)*.25)*dt;
        if(p.y>H+10||p.x>W+10||p.x<-10){P[i]=mk(false);continue}
        ctx.globalAlpha=p.a*(p.e?(.6+.4*Math.sin(p.ph*3)):1);ctx.fillStyle=p.e?'#ffb061':'#d9d2c8';ctx.fillRect(p.x|0,p.y|0,p.s,p.s)}
      raf=requestAnimationFrame(tick)}
    function start(){if(!run){run=true;last=0;raf=requestAnimationFrame(tick)}}
    function stop(){run=false;cancelAnimationFrame(raf)}
    size();window.addEventListener('resize',size);
    if('IntersectionObserver' in window){new IntersectionObserver(function(es){es[0].isIntersecting?start():stop()}).observe(cv)}else start();
    d.addEventListener('visibilitychange',function(){d.hidden?stop():start()});
  }

  // Timeline: active step drives the sticky image stage
  var steps=d.querySelectorAll('.step'),frames=d.querySelectorAll('.stage .frame'),yearEl=d.querySelector('.stage-year');
  if(steps.length&&'IntersectionObserver' in window){
    var sio=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var i=+e.target.dataset.i;
      steps.forEach(function(s,k){s.classList.toggle('on',k===i)});frames.forEach(function(f,k){f.classList.toggle('on',k===i)});
      if(yearEl)yearEl.textContent=e.target.dataset.year})},{rootMargin:'-45% 0px -45% 0px'});
    steps.forEach(function(s){sio.observe(s)});
  }else{steps.forEach(function(s){s.classList.add('on')})}

  // Day/night compare
  d.querySelectorAll('.compare').forEach(function(c){var r=c.querySelector('input');if(!r)return;
    function upd(){c.style.setProperty('--pos',(100-r.value)+'%')}r.addEventListener('input',upd);upd()});

  // Lightbox
  var lb=d.getElementById('lightbox'),shots=[].slice.call(d.querySelectorAll('[data-full]'));
  if(lb&&shots.length&&typeof lb.showModal==='function'){
    var img=lb.querySelector('img'),cap=lb.querySelector('.lb-cap'),cnt=lb.querySelector('.lb-count'),cur=0;
    function show(i){cur=(i+shots.length)%shots.length;var s=shots[cur];img.src=s.dataset.full;img.alt=s.querySelector('img').alt;
      img.width=+s.dataset.w;img.height=+s.dataset.h;img.classList.toggle('pixel',true);cap.textContent=s.dataset.caption||'';cnt.textContent=(cur+1)+' / '+shots.length}
    shots.forEach(function(s,i){s.addEventListener('click',function(){show(i);lb.showModal()})});
    lb.querySelector('.lb-close').addEventListener('click',function(){lb.close()});
    lb.querySelector('.lb-prev').addEventListener('click',function(){show(cur-1)});
    lb.querySelector('.lb-next').addEventListener('click',function(){show(cur+1)});
    lb.addEventListener('click',function(e){if(e.target===lb||e.target.classList.contains('lb-stage'))lb.close()});
    lb.addEventListener('keydown',function(e){if(e.key==='ArrowRight')show(cur+1);if(e.key==='ArrowLeft')show(cur-1)});
    lb.addEventListener('close',function(){var s=shots[cur];if(s)s.focus()});
  }

  // Video: only load sources when a real video is configured and visible
  d.querySelectorAll('video[data-lazy]').forEach(function(v){
    if(!('IntersectionObserver' in window))return;
    new IntersectionObserver(function(es,o){if(!es[0].isIntersecting)return;o.disconnect();
      v.querySelectorAll('source[data-src]').forEach(function(s){s.src=s.dataset.src});v.load();
      if(!reduce&&v.hasAttribute('data-autoplay'))v.play().catch(function(){})},{rootMargin:'200px'}).observe(v);
  });
})();
