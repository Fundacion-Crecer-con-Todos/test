if(location.pathname==='/primero-lee'||location.pathname==='/primero-lee/index.html'){
  const card=document.querySelector('.feature-scalable');
  if(card&&!card.querySelector('.scale-visual')){
    const visual=document.createElement('div');
    visual.className='scale-visual';
    visual.setAttribute('aria-label','Implementación de Primero LEE en 15 regiones, 80 comunas, zonas urbanas y rurales');
    visual.innerHTML=`
      <div class="scale-map-wrap" aria-hidden="true">
        <svg class="scale-map" viewBox="0 0 180 520" role="img" aria-label="Mapa estilizado de Chile">
          <path d="M101 14c-9 18-5 35-12 49-8 17-4 33-11 48-8 18-3 35-9 52-7 19-4 38-11 55-7 18-5 35-11 51-6 16-3 31-9 47-5 14-4 28-8 42-4 12-3 26-7 38-4 11-2 23-5 34-4 14-1 28-5 41-3 11-2 23-3 34-1 7-2 15-1 22 2 12 9 20 20 23 8 2 14-2 18-8 3-5 1-12-3-16-6-7-5-13-3-22 2-10 10-18 14-27 5-11 5-23 9-34 4-12 3-26 7-38 4-15 4-30 8-45 4-16 7-31 11-47 3-14 4-30 8-45 4-17 5-34 9-51 5-18 9-35 14-53 4-15 2-31 7-45 4-12 11-23 11-37 0-12-6-22-13-32z" fill="#65459b"/>
          <path d="M39 470c17 3 28 8 40 16 12 7 24 10 35 17" fill="none" stroke="#9bb65b" stroke-width="9" stroke-linecap="round"/>
          <path d="M31 488c14 4 22 9 31 17" fill="none" stroke="#9bb65b" stroke-width="6" stroke-linecap="round"/>
          <circle cx="89" cy="92" r="7" fill="#00a9c7"/><circle cx="76" cy="176" r="7" fill="#c3549a"/><circle cx="67" cy="269" r="7" fill="#f28a16"/><circle cx="55" cy="361" r="7" fill="#00a9c7"/><circle cx="42" cy="443" r="7" fill="#c3549a"/>
        </svg>
      </div>
      <div class="scale-stats">
        <div class="scale-stat"><span class="scale-arrow">→</span><div><strong>15 regiones</strong><small>presencia a lo largo de Chile</small></div></div>
        <div class="scale-stat"><span class="scale-arrow">→</span><div><strong>80 comunas</strong><small>implementación en distintos contextos</small></div></div>
        <div class="scale-stat"><span class="scale-arrow">→</span><div><strong>Zona urbana</strong><small>adaptación a comunidades diversas</small></div></div>
        <div class="scale-stat"><span class="scale-arrow">→</span><div><strong>Zona rural</strong><small>el mismo modelo, con flexibilidad territorial</small></div></div>
      </div>`;
    card.appendChild(visual);
    const style=document.createElement('style');
    style.textContent=`
      .feature-scalable{align-content:start}
      .scale-visual{grid-column:1/-1;margin-top:10px;display:grid;grid-template-columns:150px minmax(0,1fr);gap:24px;align-items:center;background:#fff;border-radius:18px;padding:22px 24px;border:1px solid rgba(134,68,144,.08)}
      .scale-map-wrap{display:flex;align-items:center;justify-content:center;min-height:300px;background:linear-gradient(180deg,#f6f2f8 0%,#eef9fb 100%);border-radius:16px;overflow:hidden}
      .scale-map{width:94px;height:300px;display:block}
      .scale-stats{display:grid;gap:10px}
      .scale-stat{display:grid;grid-template-columns:28px 1fr;gap:10px;align-items:center;padding:14px 0;border-bottom:1px solid #eee7f1}
      .scale-stat:last-child{border-bottom:0}
      .scale-arrow{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;background:#864490;color:#fff;font-size:13px;font-weight:600}
      .scale-stat strong{display:block;font-size:18px;line-height:1.15;color:#4d3d68;font-weight:600}
      .scale-stat small{display:block;margin-top:4px;font-size:11.5px;line-height:1.35;color:#6c7379}
      @media(max-width:700px){.scale-visual{grid-template-columns:100px minmax(0,1fr);gap:16px;padding:16px}.scale-map-wrap{min-height:260px}.scale-map{width:74px;height:250px}.scale-stat{grid-template-columns:24px 1fr;gap:8px;padding:11px 0}.scale-arrow{width:24px;height:24px}.scale-stat strong{font-size:15px}.scale-stat small{font-size:10.5px}}
    `;
    document.head.appendChild(style);
  }
}
