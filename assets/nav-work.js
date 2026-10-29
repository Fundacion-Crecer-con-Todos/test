(()=>{
  const links=document.getElementById('links');
  if(!links)return;

  const norm=s=>(s||'').replace(/\s+/g,' ').trim();

  // Remove standalone links that now belong under “Nuestro trabajo”.
  [...links.querySelectorAll(':scope > a')].forEach(a=>{
    const label=norm(a.textContent);
    if(label==='Noticias'||label==='Transparencia')a.remove();
  });

  // Keep “Quiénes somos” focused on institutional pages.
  [...links.querySelectorAll('.item')].forEach(item=>{
    const button=item.querySelector('.nav-btn');
    if(!button||!norm(button.textContent).startsWith('Quiénes somos'))return;
    item.querySelectorAll('.drop a').forEach(a=>{
      const label=norm(a.textContent);
      if(label==='Alianzas'||label==='Impacto')a.remove();
    });
  });

  // Avoid duplicates if this script is evaluated more than once.
  links.querySelectorAll('.nav-work-item').forEach(el=>el.remove());

  const resourcesItem=[...links.querySelectorAll('.item')].find(item=>{
    const b=item.querySelector('.nav-btn');
    return b&&norm(b.textContent).startsWith('Recursos');
  });

  const work=document.createElement('div');
  work.className='item nav-work-item';
  work.innerHTML=`<button class="nav-btn" aria-expanded="false">Nuestro trabajo <span class="chev" aria-hidden="true">⌄</span></button><div class="drop"><a href="/noticias">Noticias</a><a href="/impacto">Impacto</a><a href="/alianzas">Alianzas</a><a href="/transparencia">Transparencia</a></div>`;
  links.insertBefore(work,resourcesItem||links.querySelector('.lang')||null);

  const btn=work.querySelector('.nav-btn');
  const drop=work.querySelector('.drop');
  const chev=work.querySelector('.chev');
  if(chev){
    chev.innerHTML='<svg viewBox="0 0 12 8" aria-hidden="true" focusable="false"><path d="M1 1.5 6 6.5 11 1.5"/></svg>';
    Object.assign(chev.style,{display:'inline-flex',alignItems:'center',justifyContent:'center',width:'12px',height:'8px',marginLeft:'6px',verticalAlign:'middle'});
    const svg=chev.querySelector('svg');Object.assign(svg.style,{display:'block',width:'12px',height:'8px',overflow:'visible'});
    const path=svg.querySelector('path');path.setAttribute('fill','none');path.setAttribute('stroke','currentColor');path.setAttribute('stroke-width','1.5');path.setAttribute('stroke-linecap','round');path.setAttribute('stroke-linejoin','round');
  }

  let hoverTimer;
  const close=()=>{drop.classList.remove('open');btn.setAttribute('aria-expanded','false')};
  const open=()=>{document.querySelectorAll('.drop.open').forEach(d=>{if(d!==drop)d.classList.remove('open')});drop.classList.add('open');btn.setAttribute('aria-expanded','true')};
  btn.addEventListener('click',e=>{e.stopPropagation();drop.classList.contains('open')?close():open()});
  work.addEventListener('mouseenter',()=>{if(!matchMedia('(hover:hover) and (pointer:fine)').matches)return;clearTimeout(hoverTimer);open()});
  work.addEventListener('mouseleave',()=>{if(!matchMedia('(hover:hover) and (pointer:fine)').matches)return;clearTimeout(hoverTimer);hoverTimer=setTimeout(close,180)});
  document.addEventListener('click',close);
})();