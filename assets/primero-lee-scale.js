if(location.pathname==='/primero-lee'||location.pathname==='/primero-lee/index.html'){
  const card=document.querySelector('.feature-scalable');
  if(card&&!card.querySelector('.scale-visual')){
    const visual=document.createElement('div');
    visual.className='scale-visual';
    visual.setAttribute('aria-label','Implementación de Primero LEE en 15 regiones, 80 comunas, zonas urbanas y rurales');
    visual.innerHTML=`
      <div class="scale-map-wrap">
        <img class="scale-map-image" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Regions_of_Chile_(Blank).png" alt="Mapa de las regiones de Chile" loading="lazy">
      </div>
      <div class="scale-stats">
        <div class="scale-stat"><span class="scale-dot"></span><strong>15 regiones</strong></div>
        <div class="scale-stat"><span class="scale-dot"></span><strong>80 comunas</strong></div>
        <div class="scale-stat"><span class="scale-dot"></span><strong>Zona urbana</strong></div>
        <div class="scale-stat"><span class="scale-dot"></span><strong>Zona rural</strong></div>
      </div>`;
    card.appendChild(visual);

    const style=document.createElement('style');
    style.textContent=`
      .feature-scalable{grid-column:1/-1;align-content:start}
      .scale-visual{grid-column:1/-1;margin-top:14px;display:grid;grid-template-columns:minmax(180px,260px) minmax(0,1fr);gap:28px;align-items:center;background:#fff;border-radius:20px;padding:24px;border:1px solid rgba(134,68,144,.08);box-shadow:0 10px 24px rgba(35,38,42,.08)}
      .scale-map-wrap{display:flex;align-items:center;justify-content:center;min-height:360px;padding:14px;background:#f5f2f7;border-radius:16px;overflow:hidden}
      .scale-map-image{display:block;max-width:100%;width:auto;height:340px;object-fit:contain;filter:grayscale(1) contrast(1.08);opacity:.95}
      .scale-stats{display:grid;gap:2px}
      .scale-stat{display:grid;grid-template-columns:14px 1fr;gap:12px;align-items:center;padding:20px 0;border-bottom:1px solid #eee7f1}
      .scale-stat:last-child{border-bottom:0}
      .scale-dot{width:10px;height:10px;border-radius:50%;background:#864490;box-shadow:0 0 0 5px rgba(134,68,144,.1)}
      .scale-stat strong{font-size:clamp(20px,2.4vw,32px);line-height:1.1;color:#4d3d68;font-weight:600;letter-spacing:-.02em}
      @media(max-width:700px){.scale-visual{grid-template-columns:1fr;gap:18px;padding:16px}.scale-map-wrap{min-height:320px}.scale-map-image{height:300px}.scale-stat{padding:14px 0}.scale-stat strong{font-size:22px}}
    `;
    document.head.appendChild(style);
  }
}
