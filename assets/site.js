const favicon=document.createElement('link');favicon.rel='icon';favicon.type='image/jpeg';favicon.href='/assets/favicon.jpg';document.head.appendChild(favicon);
const heroStyle=document.createElement('link');heroStyle.rel='stylesheet';heroStyle.href='/assets/hero-refresh.css';document.head.appendChild(heroStyle);
const accentStyle=document.createElement('link');accentStyle.rel='stylesheet';accentStyle.href='/assets/theme-accent.css?v=all-wide-sections-20261022';document.head.appendChild(accentStyle);
const mobileNavStyle=document.createElement('link');mobileNavStyle.rel='stylesheet';mobileNavStyle.href='/assets/mobile-nav.css?v=all-wide-sections-20261022';document.head.appendChild(mobileNavStyle);
const navSolidStyle=document.createElement('link');navSolidStyle.rel='stylesheet';navSolidStyle.href='/assets/nav-solid.css';document.head.appendChild(navSolidStyle);
const newsStyle=document.createElement('link');newsStyle.rel='stylesheet';newsStyle.href='/assets/noticias.css?v=noticias-20261026e';document.head.appendChild(newsStyle);
if(location.pathname.length>1&&location.pathname.endsWith('/')){history.replaceState(null,'',location.pathname.replace(/\/+$/,'')+location.search+location.hash)}
document.querySelectorAll('.chev').forEach(c=>{c.innerHTML='<svg viewBox="0 0 12 8" aria-hidden="true" focusable="false"><path d="M1 1.5 6 6.5 11 1.5"/></svg>';Object.assign(c.style,{display:'inline-flex',alignItems:'center',justifyContent:'center',width:'12px',height:'8px',marginLeft:'6px',verticalAlign:'middle'});const s=c.querySelector('svg');Object.assign(s.style,{display:'block',width:'12px',height:'8px',overflow:'visible'});const p=s.querySelector('path');p.setAttribute('fill','none');p.setAttribute('stroke','currentColor');p.setAttribute('stroke-width','1.5');p.setAttribute('stroke-linecap','round');p.setAttribute('stroke-linejoin','round')});
const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);const arrowNodes=[];while(walker.nextNode())arrowNodes.push(walker.currentNode);arrowNodes.forEach(n=>{n.nodeValue=n.nodeValue.replace(/([→↗↑])(?!\uFE0E)/g,'$1\uFE0E')});
const navLinks=document.getElementById('links');if(navLinks&&!navLinks.querySelector('a[href="/noticias"]')){const newsNav=document.createElement('a');newsNav.className='nav-direct';newsNav.href='/noticias';newsNav.textContent='Noticias';const transparency=navLinks.querySelector('a[href="/transparencia"]');navLinks.insertBefore(newsNav,transparency||navLinks.querySelector('.lang')||null)}
document.querySelectorAll('.fcol').forEach(col=>{const heading=col.querySelector('h4');if(heading&&heading.textContent.trim()==='Recursos'&&!col.querySelector('a[href="/noticias"]')){const newsLink=document.createElement('a');newsLink.href='/noticias';newsLink.textContent='Noticias';const transparency=col.querySelector('a[href="/transparencia"]');col.insertBefore(newsLink,transparency||null)}});
/* Global discovery for Impacto */
const aboutButton=[...document.querySelectorAll('.nav-btn')].find(b=>b.textContent.replace(/\s+/g,' ').trim().startsWith('Quiénes somos'));
if(aboutButton){const aboutDrop=aboutButton.nextElementSibling;if(aboutDrop&&aboutDrop.classList.contains('drop')&&!aboutDrop.querySelector('a[href="/impacto"]')){const impactLink=document.createElement('a');impactLink.href='/impacto';impactLink.textContent='Impacto';aboutDrop.appendChild(impactLink)}}
document.querySelectorAll('.fcol').forEach(col=>{const heading=col.querySelector('h4');if(heading&&heading.textContent.trim()==='Quiénes somos'&&!col.querySelector('a[href="/impacto"]')){const impactLink=document.createElement('a');impactLink.href='/impacto';impactLink.textContent='Impacto';col.appendChild(impactLink)}});
if((location.pathname==='/'||location.pathname==='/index.html')&&!document.querySelector('.news-home')){const faq=document.querySelector('.faq');if(faq){const section=document.createElement('section');section.className='block news-home';section.id='noticias';section.innerHTML='<div class="container"><div class="news-home-head"><div><span class="tag">Noticias</span><h2 class="title">Historias y novedades que movilizan el aprendizaje.</h2></div><a class="news-home-all" href="/noticias">Ver todas las noticias →</a></div><article class="news-feature"><a class="news-feature-media" href="/noticias/compromiso-nacional-aprendizaje-lector" aria-label="Leer noticia"><img src="/assets/foto-principal-nota1.jpeg" alt="Encuentro del Compromiso Nacional por el Aprendizaje Lector en La Moneda" loading="lazy"></a><div class="news-feature-copy"><span class="news-date">13 de octubre de 2026</span><h3>Fundación Crecer con Todos reafirma su respaldo al Compromiso Nacional por el Aprendizaje Lector como una tarea de país</h3><p>Nuestra directora ejecutiva, Valentina Wagenreld, participó en el encuentro que renovó la meta de que todos los niños y niñas lean comprensivamente antes de finalizar segundo básico al 2030.</p><a class="news-read" href="/noticias/compromiso-nacional-aprendizaje-lector">Leer noticia →</a></div></article></div>';faq.parentNode.insertBefore(section,faq)}}
const btns=[...document.querySelectorAll('.nav-btn')];const closeNavDrops=(except=null)=>{document.querySelectorAll('.drop').forEach(x=>{if(x!==except)x.classList.remove('open')});btns.forEach(x=>{if(x.nextElementSibling!==except)x.setAttribute('aria-expanded','false')})};btns.forEach(b=>{const item=b.closest('.item'),d=b.nextElementSibling;let hoverTimer;b.onclick=e=>{e.stopPropagation();const open=!d.classList.contains('open');closeNavDrops(d);d.classList.toggle('open',open);b.setAttribute('aria-expanded',open)};if(item){item.addEventListener('mouseenter',()=>{if(!matchMedia('(hover:hover) and (pointer:fine)').matches)return;clearTimeout(hoverTimer);closeNavDrops(d);d.classList.add('open');b.setAttribute('aria-expanded','true')});item.addEventListener('mouseleave',()=>{if(!matchMedia('(hover:hover) and (pointer:fine)').matches)return;clearTimeout(hoverTimer);hoverTimer=setTimeout(()=>{d.classList.remove('open');b.setAttribute('aria-expanded','false')},180)})}});document.addEventListener('click',()=>closeNavDrops());const menu=document.getElementById('menu'),links=document.getElementById('links');if(menu&&links)menu.onclick=e=>{e.stopPropagation();links.classList.toggle('open')};document.querySelectorAll('.acc-item').forEach(x=>{const b=x.querySelector('.acc-btn');if(b)b.onclick=()=>x.classList.toggle('open')});const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(x=>io.observe(x));const nio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const el=e.target,t=+el.dataset.count;if(!t)return;const s=performance.now();function f(n){let p=Math.min(1,(n-s)/950),v=Math.round(t*(1-Math.pow(1-p,3)));el.textContent=new Intl.NumberFormat('es-CL').format(v)+(t>20?'+':'');if(p<1)requestAnimationFrame(f)}requestAnimationFrame(f);nio.unobserve(el)}}),{threshold:.6});document.querySelectorAll('[data-count]').forEach(x=>nio.observe(x));const prog=document.getElementById('progress'),topBtn=document.getElementById('top');function ui(){const d=document.documentElement.scrollHeight-innerHeight;if(prog)prog.style.width=(d?scrollY/d*100:0)+'%';if(topBtn)topBtn.classList.toggle('show',scrollY>600)}addEventListener('scroll',ui,{passive:true});ui();if(topBtn)topBtn.onclick=()=>scrollTo({top:0,behavior:'smooth'});
const motionTargets=[...document.querySelectorAll('.stat-box,.impact-card,.acc-item,.program-photo,.testimonial-photo,.join-card,.fecu-info,.fecu-year,.news-feature,.news-card')];motionTargets.forEach((el,i)=>{el.classList.add('scroll-item','delay-'+((i%4)+1))});const sio=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');sio.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -35px 0px'});motionTargets.forEach(el=>sio.observe(el));const navWrap=document.querySelector('.nav-wrap');let ticking=false;function motionScroll(){const y=window.scrollY;if(navWrap)navWrap.classList.toggle('scrolled',y>28);const steps=document.querySelector('.steps');if(steps){const shift=Math.max(-8,Math.min(12,(y-500)*.012));steps.style.transform=`translateY(${shift}px) rotate(${7+shift*.08}deg)`}const hs=document.querySelector('.hero-stat');if(hs&&y<850){hs.style.setProperty('--hero-shift',Math.min(12,y*.018)+'px')}ticking=false}addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(motionScroll);ticking=true}},{passive:true});motionScroll();
const teamPhotoMap={'Valentina Wagenreld':'valentina.png','María Paz Salinas':'maria-paz.jpg','Dania Budini':'dania.jpg','Daniela Armijo':'daniela.jpg','Macarena Portiño':'macarena.jpg','Ana María Calorio':'ana-maria-calorio.jpeg','Nibia Garrido':'nibia.jpg','Solange Loyola':'solange.jpg','Valeria Vera':'valeria.jpg','Victoria Marcenaro':'victoria.jpg','Lupe Alfaro':'lupe.jpg','Daniela García':'daniela-garcia.jpg','Liliana Vargas':'liliana.jpg','María Jesús Frontalura':'maria-jesus.jpg','Paula Acevedo':'paula.jpg','María Paz Swett':'maria-paz-sweet.jpg','Antonia Melendez':'antonia.jpg','Consuelo Yáñez':'consuelo.jpg','María Fernanda Riveros':'maria-fernanda-riveros.jpg','Carolina Acevedo':'carolina.jpg','Daniela Espinoza':'daniela-espinoza.jpg','Paulina Cáceres':'paulina.jpg','Dagoberto Alvear':'dagoberto.jpg','Camila Flores':'camila.jpg','Elisa Sepúlveda':'elisa.jpg','Aurora Saavedra':'aurora.jpg','Karla Martínez':'karla.jpg','Katherine Marín':'katherine.jpg','Natalia Acuña':'natalia.jpg','Alicia Castro':'alicia.jpg','Mariana Santiago':'mariana.jpg'};
if(document.querySelector('.team-page')){window.addEventListener('load',()=>{document.querySelectorAll('.team-page .photo-loader[data-alt]').forEach(box=>{const file=teamPhotoMap[box.dataset.alt];if(!file)return;const img=new Image();img.alt=box.dataset.alt;img.onload=()=>{box.querySelectorAll('img').forEach(x=>x.remove());box.appendChild(img);const card=box.closest('.person-card');if(card)card.classList.remove('no-photo')};img.src='/assets/'+file})})}
document.querySelectorAll('.drop a[href="/app"]').forEach(a=>{a.href='https://play.google.com/store/apps/details?id=fundacion.crecer.primeroLee&hl=es_CL';a.target='_blank';a.rel='noopener noreferrer'});
const i18nScript=document.createElement('script');i18nScript.src='/assets/i18n.js?v=container-wide-v3-20261022';document.body.appendChild(i18nScript);

/* Home impact: compact composition with photo + two clear CTAs */
if(location.pathname==='/'||location.pathname==='/index.html'){
  const impactCards=document.querySelector('#impacto .impact-cards');
  if(impactCards){
    if(!impactCards.querySelector('.impact-photo')){
      const photo=document.createElement('div');photo.className='impact-photo';photo.setAttribute('role','img');photo.setAttribute('aria-label','Niños y niñas aprendiendo a leer en comunidad');impactCards.prepend(photo);
    }
    const firstCard=impactCards.querySelector('.impact-card');
    if(firstCard&&!firstCard.querySelector('a[href="/impacto#evaluaciones"]')){
      const evalLink=document.createElement('a');evalLink.className='text-link';evalLink.href='/impacto#evaluaciones';evalLink.textContent='Ver evaluaciones →';firstCard.appendChild(evalLink);
    }
    const impactStyle=document.createElement('style');
    impactStyle.textContent=`#impacto .impact-cards{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:14px!important}#impacto .impact-photo{display:block!important;min-height:210px!important;border-radius:20px!important;background:url('/assets/impacto-principal.jpg') center/cover no-repeat!important;box-shadow:0 10px 24px rgba(35,39,44,.08)}#impacto .impact-card{min-height:210px!important;padding:23px 24px!important}#impacto .impact-card .text-link{margin-top:auto;padding-top:16px;font-size:13px;font-weight:600}#impacto .impact-card strong{margin-bottom:12px!important}@media(max-width:700px){#impacto .impact-cards{grid-template-columns:1fr!important}#impacto .impact-photo{min-height:220px!important}#impacto .impact-card{min-height:0!important}}`;
    document.head.appendChild(impactStyle);
  }
}

/* Home programs: restored earlier Primero LEE logo treatment */
if(location.pathname==='/'||location.pathname==='/index.html'){
  const programItems=[...document.querySelectorAll('#programas .acc-item')];
  const programLogos=[
    {src:'/assets/primero-lee-logo.png',alt:'Primero LEE',cls:'program-brand program-brand--primero'},
    {src:'/assets/viaje-por-las-letras.jpg',alt:'Viaje por las Letras',cls:'program-brand program-brand--viaje'}
  ];
  programItems.slice(0,2).forEach((item,i)=>{
    const body=item.querySelector('.acc-body > div');
    if(!body||body.querySelector('.program-brand'))return;
    const wrap=document.createElement('div');wrap.className=programLogos[i].cls;
    const img=document.createElement('img');img.src=programLogos[i].src;img.alt=programLogos[i].alt;wrap.appendChild(img);
    body.prepend(wrap);
  });
  const programStyle=document.createElement('style');
  programStyle.textContent=`#programas .program-brand{display:flex;align-items:center;margin:0 0 14px;min-height:52px;background:transparent!important;box-shadow:none!important;border:0!important;padding:0!important}#programas .program-brand img{display:block;height:auto;object-fit:contain;background:transparent!important}#programas .program-brand--primero{width:132px;height:46px;min-height:46px;overflow:hidden;margin-left:-8px!important;margin-top:0!important;margin-bottom:10px!important}#programas .program-brand--primero img{width:174px;max-width:none;max-height:none;transform:translate(-24px,-4px);transform-origin:left top;mix-blend-mode:multiply}#programas .program-brand--viaje img{width:180px;max-width:100%;max-height:62px;object-position:left center;border-radius:0!important;mix-blend-mode:multiply}@media(max-width:600px){#programas .program-brand--primero{width:122px;height:42px;min-height:42px;margin-left:-6px!important}#programas .program-brand--primero img{width:160px;transform:translate(-22px,-3px)}#programas .program-brand--viaje img{width:160px}}`;
  document.head.appendChild(programStyle);
}

/* Primero LEE: articulated books image spans the entire row */
if(location.pathname==='/primero-lee'||location.pathname==='/primero-lee/index.html'){
  const articulated=document.querySelector('.feature-articulated');
  if(articulated){
    articulated.style.gridColumn='1 / -1';
    articulated.style.gridTemplateColumns='36px minmax(0,1fr)';
    const artImg=articulated.querySelector('img[src*="articulado.png"]');
    if(artImg){
      const holder=artImg.parentElement;
      if(holder){
        holder.style.gridColumn='1 / -1';
        holder.style.width='100%';
        holder.style.marginTop='14px';
        holder.style.display='flex';
        holder.style.justifyContent='center';
      }
      artImg.style.display='block';
      artImg.style.width='min(100%, 980px)';
      artImg.style.maxWidth='980px';
      artImg.style.height='auto';
      artImg.style.objectFit='contain';
      artImg.style.margin='0 auto';
    }
  }
}
