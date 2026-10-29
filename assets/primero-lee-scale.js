if(location.pathname==='/primero-lee'||location.pathname==='/primero-lee/index.html'){
  const card=document.querySelector('.feature-scalable');
  if(card&&!card.querySelector('.scale-visual')){
    const visual=document.createElement('div');
    visual.className='scale-visual';
    visual.setAttribute('aria-label','Implementación de Primero LEE en 15 regiones, 80 comunas, zonas urbanas y rurales');
    visual.innerHTML=`
      <div class="scale-intro">
        <h4>Implementación en<br>diversos contextos</h4>
        <div class="scale-line"></div>
        <p>Experiencia implementando el programa en distintas realidades del sistema educativo.</p>
      </div>
      <div class="scale-panel">
        <div class="scale-map-stage">
          <img class="scale-map-image" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Chile_blank_map.svg" alt="Mapa de Chile" loading="lazy">
        </div>
        <div class="scale-stats">
          <div class="scale-stat"><span class="scale-arrow">▶</span><strong>15 regiones</strong></div>
          <div class="scale-stat"><span class="scale-arrow">▶</span><strong>80 comunas</strong></div>
          <div class="scale-stat"><span class="scale-arrow">▶</span><strong>Zona urbana</strong></div>
          <div class="scale-stat"><span class="scale-arrow">▶</span><strong>Zona rural</strong></div>
        </div>
      </div>`;
    card.appendChild(visual);

    const style=document.createElement('style');
    style.textContent=`
      .feature-scalable{grid-column:1/-1;align-content:start;overflow:hidden}
      .scale-visual{grid-column:1/-1;margin-top:16px;display:grid;grid-template-columns:minmax(0,.92fr) minmax(0,1.08fr);gap:16px;align-items:stretch;background:#fff;border-radius:24px;padding:16px;border:1px solid rgba(134,68,144,.07);box-shadow:0 12px 30px rgba(35,38,42,.06)}
      .scale-intro{min-height:430px;padding:54px 36px;display:flex;flex-direction:column;justify-content:center;border-radius:18px;background:#fff}
      .scale-intro h4{margin:0;font-size:clamp(30px,3.15vw,44px);line-height:1.08;letter-spacing:-.035em;font-weight:600;color:#13aeca}
      .scale-line{width:min(100%,360px);height:4px;margin:22px 0 20px;border-radius:999px;background:#13b4ce}
      .scale-intro p{max-width:450px;margin:0;font-size:14px;line-height:1.55;color:#59636b}
      .scale-panel{min-height:430px;display:grid;grid-template-columns:minmax(170px,.82fr) minmax(0,1.18fr);gap:28px;align-items:center;padding:24px 30px 24px 22px;border-radius:18px;background:#dedede;overflow:hidden}
      .scale-map-stage{position:relative;height:380px;display:flex;align-items:center;justify-content:center}
      .scale-map-image{display:block;width:auto;max-width:100%;height:360px;object-fit:contain;filter:invert(27%) sepia(35%) saturate(1700%) hue-rotate(224deg) brightness(82%) contrast(90%)}
      .scale-stats{display:grid;gap:8px}
      .scale-stat{display:grid;grid-template-columns:28px 1fr;gap:12px;align-items:center;padding:20px 0}
      .scale-arrow{font-size:22px;line-height:1;color:#5b3f9b;transform:scaleX(.88)}
      .scale-stat strong{font-size:clamp(21px,2.35vw,31px);line-height:1.07;color:#5b3f9b;font-weight:700;letter-spacing:-.025em}
      @media(max-width:900px){.scale-visual{grid-template-columns:1fr}.scale-intro{min-height:0;padding:32px 28px}.scale-panel{min-height:390px}}
      @media(max-width:620px){.scale-visual{padding:10px;border-radius:20px}.scale-intro{padding:26px 20px;border-radius:15px}.scale-intro h4{font-size:30px}.scale-intro p{font-size:13px}.scale-panel{grid-template-columns:125px minmax(0,1fr);gap:10px;min-height:330px;padding:18px 14px;border-radius:15px}.scale-map-stage{height:300px}.scale-map-image{height:292px}.scale-stat{grid-template-columns:20px 1fr;gap:7px;padding:14px 0}.scale-arrow{font-size:16px}.scale-stat strong{font-size:18px}}
    `;
    document.head.appendChild(style);
  }
}
