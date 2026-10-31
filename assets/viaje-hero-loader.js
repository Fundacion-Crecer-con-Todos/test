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
    try{
      const seqParts=await Promise.all([1,2,3].map(i=>fetchText(`/assets/viaje-secuencia-part-${i}.txt?v=20261031-sequence-v2`)));
      const seqB64=seqParts.join('').replace(/\s+/g,'');
      const threshold=steps.querySelector('.threshold')?.textContent?.trim()||'';
      steps.innerHTML=`<div class="viaje-sequence-image"><img alt="Secuencia de 6 pasos por letra organizada en Día 1 y Día 2"></div>${threshold?`<div class="threshold">${threshold}</div>`:''}`;
      const img=steps.querySelector('.viaje-sequence-image img');
      img.src=`data:image/jpeg;base64,${seqB64}`;
      const style=document.createElement('style');
      style.textContent=`.viaje-sequence-image{width:100%;display:flex;justify-content:center;align-items:center;background:transparent;border-radius:0;padding:0;box-sizing:border-box;overflow:visible}.viaje-sequence-image img{display:block;width:auto;height:auto;max-width:min(860px,100%);border-radius:0;image-rendering:auto}.steps-wrap{display:grid;gap:22px;justify-items:center}.steps-wrap .threshold{width:100%;margin-top:0}@media(max-width:900px){.viaje-sequence-image img{max-width:min(760px,100%)}}@media(max-width:700px){.viaje-sequence-image img{width:100%;max-width:100%}}`;
      document.head.appendChild(style);
    }catch(err){console.error('Viaje sequence image:',err)}
  }
})();