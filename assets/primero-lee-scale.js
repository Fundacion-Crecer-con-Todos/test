if(location.pathname==='/primero-lee'||location.pathname==='/primero-lee/index.html'){
  const systemic=document.querySelector('.feature-systemic');
  if(systemic){
    systemic.style.gridColumn='1 / -1';
    systemic.style.gridTemplateColumns='36px minmax(0,1fr)';
    const figure=systemic.querySelector('.system-figure');
    if(figure){
      figure.className='systemic-reference';
      figure.setAttribute('aria-label','Primero LEE trabaja sistémicamente desde el aprendizaje en el aula, la escuela y el sostenedor o SLEP');
      figure.innerHTML=`
        <div class="systemic-reference-label">Niveles de implementación</div>
        <div class="systemic-reference-stage">
          <div class="systemic-layer systemic-layer--slep">
            <div class="systemic-layer-copy"><span>Sostenedor / SLEP</span><strong>Condiciones para sostener la mejora</strong><p>Liderazgo, planificación, recursos y continuidad para escalar el trabajo en el territorio.</p></div>
            <div class="systemic-layer systemic-layer--school">
              <div class="systemic-layer-copy"><span>Escuela</span><strong>Equipos directivos y UTP</strong><p>Gestión pedagógica, acompañamiento y desarrollo de capacidades para sostener la implementación.</p></div>
              <div class="systemic-layer systemic-layer--classroom">
                <div class="systemic-layer-copy"><span>Aula</span><strong>Docentes y estudiantes</strong><p>Enseñanza, materiales, evaluación y apoyo para que cada niño y niña avance.</p></div>
                <div class="systemic-core"><span>Aprendizaje</span><strong>Primero LEE</strong></div>
              </div>
            </div>
          </div>
        </div>
        <p class="systemic-reference-note">Un modelo sistémico: cada nivel del sistema aporta capacidades y condiciones para que los aprendizajes se sostengan en el tiempo.</p>`;
    }
  }

  const card=document.querySelector('.feature-scalable');
  if(card&&!card.querySelector('.scale-visual')){
    const visual=document.createElement('div');
    visual.className='scale-visual';
    visual.setAttribute('aria-label','Implementación de Primero LEE en 15 regiones, 80 comunas y contextos urbanos y rurales');
    visual.innerHTML=`
      <div class="scale-intro">
        <h4>Implementación en diversos contextos</h4>
        <div class="scale-line"></div>
        <p>Experiencia implementando el programa en distintas realidades del sistema educativo.</p>
      </div>
      <div class="scale-coverage-card">
        <div class="scale-map-wrap" aria-label="Cobertura territorial de Primero LEE en Chile">
          <img class="scale-map-image" src="/assets/mapa.svg" alt="Mapa de Chile que representa la cobertura territorial de Primero LEE">
        </div>
        <div class="scale-stats">
          <div class="scale-stat"><span class="scale-stat-arrow">▶</span><div><strong class="scale-number">15</strong><span class="scale-label">regiones</span></div></div>
          <div class="scale-stat"><span class="scale-stat-arrow">▶</span><div><strong class="scale-number">80</strong><span class="scale-label">comunas</span></div></div>
          <div class="scale-stat"><span class="scale-stat-arrow">▶</span><div><strong class="scale-label scale-label--big">Presencia urbana y rural</strong></div></div>
        </div>
      </div>`;
    card.appendChild(visual);
  }

  const style=document.createElement('style');
  style.textContent=`
    .feature-systemic{grid-column:1/-1!important}
    .systemic-reference{grid-column:1/-1!important;width:100%;margin:22px 0 2px}
    .systemic-reference-label{margin-bottom:12px;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#5d48a3}
    .systemic-reference-stage{padding:16px;border-radius:26px;background:#f6f3f8;border:1px solid rgba(93,72,163,.08);box-shadow:0 12px 28px rgba(35,38,42,.05)}
    .systemic-layer{position:relative;display:grid;grid-template-columns:minmax(210px,.68fr) minmax(0,1.32fr);align-items:center;min-height:142px;border-radius:22px;padding:22px 24px 22px 28px;box-sizing:border-box}
    .systemic-layer--slep{background:#5d48a3;color:#fff}.systemic-layer--school{background:#b23aa0;color:#fff;margin-left:20px;min-height:116px}.systemic-layer--classroom{background:#20b5cf;color:#fff;margin-left:20px;min-height:90px}
    .systemic-layer-copy{padding-right:24px;min-width:0}.systemic-layer-copy span{display:block;margin-bottom:5px;font-size:10px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;opacity:.78}.systemic-layer-copy strong{display:block;font-size:clamp(17px,1.55vw,22px);line-height:1.08;font-weight:600;letter-spacing:-.025em}.systemic-layer-copy p{margin:7px 0 0;font-size:11.5px;line-height:1.4;color:rgba(255,255,255,.86)}
    .systemic-core{justify-self:end;width:124px;height:124px;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;background:#f28a31;color:#fff;border:5px solid rgba(255,255,255,.9)}
    .systemic-core span{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em}.systemic-core strong{margin-top:4px;font-size:18px}.systemic-reference-note{margin:14px 4px 0;font-size:12.5px;line-height:1.5;color:#616a72;max-width:none;white-space:nowrap}

    .feature-scalable{grid-column:1/-1;align-content:start;overflow:hidden}
    .scale-visual{grid-column:1/-1;margin-top:16px;display:grid;grid-template-columns:minmax(360px,1fr) 520px;gap:10px;align-items:center;min-height:500px;background:#f7f3f8;border-radius:26px;padding:20px 22px;border:1px solid rgba(134,68,144,.07);box-shadow:0 12px 30px rgba(35,38,42,.06)}
    .scale-intro{padding:12px 8px 12px 4px}.scale-intro h4{margin:0;max-width:470px;font-size:clamp(36px,3.35vw,50px);line-height:1.03;letter-spacing:-.04em;font-weight:600;color:#13aeca}.scale-line{width:min(100%,280px);height:4px;margin:20px 0 18px;border-radius:999px;background:#13b4ce}.scale-intro p{max-width:430px;margin:0;font-size:14px;line-height:1.6;color:#59636b}
    .scale-coverage-card{display:grid;grid-template-columns:210px 1fr;gap:4px;align-items:center;justify-self:end;width:520px;min-height:420px;padding:14px 18px;border-radius:24px;background:#e6e4e8;box-shadow:inset 0 0 0 1px rgba(93,72,163,.05);box-sizing:border-box}
    .scale-map-wrap{height:390px;display:flex;align-items:center;justify-content:center;overflow:hidden}
    .scale-map-image{display:block;width:190px;height:390px;max-width:none;object-fit:cover;object-position:center;filter:hue-rotate(58deg) saturate(1.65) brightness(1.08)}
    .scale-stats{display:grid;gap:2px;padding-left:2px}
    .scale-stat{display:grid;grid-template-columns:22px minmax(0,1fr);gap:6px;align-items:center;padding:18px 0}
    .scale-stat-arrow{display:block;color:#5b3f9b;font-size:21px;line-height:1}.scale-stat>div{display:flex;align-items:baseline;gap:6px;flex-wrap:wrap}
    .scale-number{font-size:clamp(40px,3.15vw,52px);line-height:.9;color:#5b3f9b;font-weight:700;letter-spacing:-.05em}.scale-label{font-size:clamp(18px,1.5vw,22px);line-height:1;color:#5b3f9b;font-weight:700;letter-spacing:-.02em}.scale-label--big{font-size:clamp(18px,1.4vw,20px);line-height:1.08}

    @media(max-width:1180px){.scale-visual{grid-template-columns:minmax(300px,1fr) 500px}.scale-coverage-card{width:500px;grid-template-columns:200px 1fr}.scale-map-image{width:180px}}
    @media(max-width:900px){.scale-visual{grid-template-columns:1fr;gap:18px;min-height:0;padding:24px}.scale-coverage-card{width:min(100%,520px);justify-self:center}.scale-intro h4{max-width:650px}.systemic-layer{grid-template-columns:1fr;gap:14px}.systemic-layer--school,.systemic-layer--classroom{margin-left:12px}.systemic-core{justify-self:start}.systemic-reference-note{max-width:100%;white-space:normal}}
    @media(max-width:620px){.scale-visual{padding:14px;border-radius:20px}.scale-intro h4{font-size:32px}.scale-intro p{font-size:13px}.scale-coverage-card{grid-template-columns:1fr;gap:8px;width:100%;min-height:0;padding:18px 14px;border-radius:20px}.scale-map-wrap{height:300px}.scale-map-image{width:150px;height:300px}.scale-stats{padding:0 8px}.scale-stat{padding:13px 0}.scale-number{font-size:36px}.scale-label{font-size:18px}.scale-label--big{font-size:17px}.systemic-layer{padding:18px;border-radius:17px}.systemic-layer--school,.systemic-layer--classroom{margin-left:8px}.systemic-layer-copy{padding-right:0}.systemic-core{width:92px;height:92px;border-width:4px}}
  `;
  document.head.appendChild(style);
}