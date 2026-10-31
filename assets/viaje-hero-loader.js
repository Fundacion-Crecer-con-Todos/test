(async()=>{
  const fetchText=async p=>{const r=await fetch(p,{cache:'no-store'});if(!r.ok)throw new Error(`HTTP ${r.status}`);return r.text()};

  const hero=document.querySelector('.viaje-hero-visual');
  if(hero){
    try{
      const heroParts=await Promise.all([1,2,3,4,5,6].map(i=>fetchText(`/assets/viaje-hero-part-${i}.txt?v=20261031-exact-v3`)));
      const heroB64=heroParts.join('').replace(/\s+/g,'');
      hero.style.setProperty('background-image',`url("data:image/jpeg;base64,${heroB64}")`,'important');
      hero.style.setProperty('background-size','cover','important');
      hero.style.setProperty('background-position','center','important');
      hero.style.setProperty('background-repeat','no-repeat','important');
    }catch(err){console.error('Viaje hero image:',err)}
  }

  const steps=document.querySelector('.steps-wrap');
  if(steps){
    const threshold=steps.querySelector('.threshold')?.textContent?.trim()||'';
    steps.innerHTML=`<div class="viaje-sequence-image"><img src="/assets/viajeporlasletras.jpg?v=20261031-uploaded" alt="Secuencia de 6 pasos por letra organizada en Día 1 y Día 2" loading="lazy"></div>${threshold?`<div class="threshold">${threshold}</div>`:''}`;
    const style=document.createElement('style');
    style.textContent=`.viaje-sequence-image{width:100%;display:flex;justify-content:center;align-items:center;background:transparent;padding:0;overflow:visible}.viaje-sequence-image img{display:block;width:min(100%,980px);height:auto;margin:0 auto;border-radius:14px}.steps-wrap{display:grid;gap:22px;justify-items:center}.steps-wrap .threshold{width:100%;margin-top:0}@media(max-width:700px){.viaje-sequence-image img{width:100%;border-radius:10px}}`;
    document.head.appendChild(style);
  }
})();