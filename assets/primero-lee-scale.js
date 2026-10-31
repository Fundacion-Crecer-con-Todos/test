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
        <div>
          <h4>Implementación en diversos contextos</h4>
          <div class="scale-line"></div>
          <p>Experiencia implementando el programa en distintas realidades del sistema educativo.</p>
        </div>
      </div>
      <div class="scale-map-wrap">
        <div class="scale-map-stage scale-map-stage--regions" aria-label="Cobertura territorial de Primero LEE en Chile">
          <img class="scale-map-image scale-map-image--regions" src="/assets/mapa.svg" alt="Mapa de Chile que representa la cobertura territorial de Primero LEE" loading="lazy">
        </div>
        <div class="scale-map-caption">Cobertura territorial de Primero LEE en Chile</div>
      </div>
      <div class="scale-stats-card">
        <div class="scale-stats-kicker">Presencia territorial</div>
        <div class="scale-stats">
          <div class="scale-stat"><span class="scale-stat-arrow">→</span><div><strong class="scale-number">15</strong><span class="scale-label">regiones</span></div></div>
          <div class="scale-stat"><span class="scale-stat-arrow">→</span><div><strong class="scale-number">80</strong><span class="scale-label">comunas</span></div></div>
          <div class="scale-stat scale-stat--context"><span class="scale-stat-arrow">→</span><div><strong class="scale-label scale-label--big">Presencia urbana y rural</strong></div></div>
        </div>
      </div>`;
    card.appendChild(visual);
  }

  const features=document.querySelector('.features-section');
  if(features&&!document.querySelector('.territory-section')){
    const section=document.createElement('section');
    section.className='primero-section territory-section';
    section.innerHTML=`
      <div class="container">
        <span class="section-eyebrow">Cómo trabajamos en el territorio</span>
        <h2>Primero LEE en el aula, la escuela y el SLEP</h2>
        <div class="territory-grid">
          <div class="territory-model">
            <svg class="territory-svg" viewBox="0 0 560 560" role="img" aria-label="Modelo de trabajo territorial de Primero LEE">
              <circle cx="280" cy="280" r="248" fill="#5d48a3"/>
              <circle cx="280" cy="280" r="150" fill="#b23aa0" stroke="#fff" stroke-width="3"/>
              <circle cx="280" cy="280" r="54" fill="#f28a31" stroke="#fff" stroke-width="3"/>
              <g fill="#fff" font-family="Fredoka, sans-serif" font-weight="500" text-anchor="middle">
                <text x="280" y="62" font-size="12"><tspan x="280">Movilización del sistema,</tspan><tspan x="280" dy="14">reconocimiento e incentivos</tspan></text>
                <text x="450" y="188" font-size="12"><tspan x="450">Planeamiento y</tspan><tspan x="450" dy="14">monitoreo</tspan></text>
                <text x="432" y="400" font-size="9.5"><tspan x="432">Recursos para</tspan><tspan x="432" dy="12">la continuidad</tspan></text>
                <text x="280" y="486" font-size="11.5"><tspan x="280">Condiciones para la</tspan><tspan x="280" dy="14">enseñanza y el aprendizaje</tspan></text>
                <text x="128" y="394" font-size="9.5"><tspan x="128">Liderazgo y</tspan><tspan x="128" dy="12">compromiso</tspan><tspan x="128" dy="12">político</tspan></text>
                <text x="110" y="188" font-size="12"><tspan x="110">Fortalecimiento</tspan><tspan x="110" dy="14">de la gestión</tspan></text>
                <text x="280" y="170" font-size="10"><tspan x="280">Formación y acompañamiento a</tspan><tspan x="280" dy="12">docentes y equipos directivos</tspan></text>
                <text x="390" y="271" font-size="10.5"><tspan x="390">Materiales</tspan><tspan x="390" dy="12">de calidad</tspan></text>
                <text x="345" y="360" font-size="8.8"><tspan x="345">Lineamientos</tspan><tspan x="345" dy="10.5">pedagógico-</tspan><tspan x="345" dy="10.5">curriculares</tspan></text>
                <text x="215" y="360" font-size="8.8"><tspan x="215">Reforzamiento y</tspan><tspan x="215" dy="10.5">aceleración de</tspan><tspan x="215" dy="10.5">aprendizajes</tspan></text>
                <text x="170" y="271" font-size="10.5"><tspan x="170">Evaluación de</tspan><tspan x="170" dy="12">aprendizajes</tspan></text>
                <text x="280" y="287" font-size="18" font-weight="600">Aprendizaje</text>
              </g>
            </svg>
            <small>Adaptado de “Factores de éxito compartidos”, Instituto Natura.</small>
          </div>
          <div class="territory-explain">
            <article class="territory-note note-learning"><span class="territory-swatch"></span><div><h3>Aprendizaje</h3><p>El centro de todo: que cada niño y niña aprenda a leer y comprender lo que lee a tiempo.</p></div></article>
            <article class="territory-note note-school"><span class="territory-swatch"></span><div><h3>Escuela: docentes, equipos directivos y UTP</h3><p>Lo que ocurre en el aula y en la gestión pedagógica: formación, materiales, evaluación y apoyo a quienes van más atrás.</p></div></article>
            <article class="territory-note note-slep"><span class="territory-swatch"></span><div><h3>SLEP: sostenedor y UATP</h3><p>Las condiciones para que la mejora sea efectiva y sostenible en el territorio: gestión, planificación, recursos y liderazgo.</p></div></article>
          </div>
        </div>
      </div>`;
    features.insertAdjacentElement('afterend',section);
  }

  const style=document.createElement('style');
  style.textContent=`
    .feature-systemic{grid-column:1/-1!important}.systemic-reference{grid-column:1/-1!important;width:100%;margin:22px 0 2px}.systemic-reference-label{margin-bottom:12px;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#5d48a3}.systemic-reference-stage{padding:16px;border-radius:26px;background:#f6f3f8;border:1px solid rgba(93,72,163,.08);box-shadow:0 12px 28px rgba(35,38,42,.05)}.systemic-layer{position:relative;display:grid;grid-template-columns:minmax(210px,.68fr) minmax(0,1.32fr);align-items:center;min-height:142px;border-radius:22px;padding:22px 24px 22px 28px;box-sizing:border-box}.systemic-layer--slep{background:#5d48a3;color:#fff}.systemic-layer--school{background:#b23aa0;color:#fff;margin-left:20px;min-height:116px}.systemic-layer--classroom{background:#20b5cf;color:#fff;margin-left:20px;min-height:90px}.systemic-layer-copy{padding-right:24px;min-width:0}.systemic-layer-copy span{display:block;margin-bottom:5px;font-size:10px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;opacity:.78}.systemic-layer-copy strong{display:block;font-size:clamp(17px,1.55vw,22px);line-height:1.08;font-weight:600;letter-spacing:-.025em}.systemic-layer-copy p{margin:7px 0 0;font-size:11.5px;line-height:1.4;color:rgba(255,255,255,.86)}.systemic-layer--school>.systemic-layer-copy,.systemic-layer--classroom>.systemic-layer-copy{align-self:center}.systemic-core{justify-self:end;width:124px;height:124px;margin-right:2px;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;background:#f28a31;color:#fff;border:5px solid rgba(255,255,255,.9);box-shadow:0 10px 24px rgba(76,52,29,.16)}.systemic-core span{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;opacity:.9}.systemic-core strong{margin-top:4px;font-size:18px;line-height:1.02}.systemic-reference-note{margin:14px 4px 0;font-size:12.5px;line-height:1.5;color:#616a72;max-width:820px}

    .feature-scalable{grid-column:1/-1;align-content:start;overflow:hidden}.scale-visual{grid-column:1/-1;margin-top:16px;display:grid;grid-template-columns:minmax(280px,.84fr) minmax(360px,1.08fr) minmax(250px,.68fr);gap:18px;align-items:center;min-height:540px;background:linear-gradient(145deg,#f5f1f7 0%,#eee8f2 100%);border-radius:26px;padding:28px 34px;border:1px solid rgba(134,68,144,.07);box-shadow:0 12px 30px rgba(35,38,42,.06)}.scale-intro{padding:10px 4px 10px 8px}.scale-intro h4{margin:0;max-width:420px;font-size:clamp(34px,3.25vw,48px);line-height:1.03;letter-spacing:-.04em;font-weight:600;color:#13aeca}.scale-line{width:min(100%,250px);height:4px;margin:20px 0 18px;border-radius:999px;background:#13b4ce}.scale-intro p{max-width:390px;margin:0;font-size:14px;line-height:1.6;color:#59636b}.scale-map-wrap{display:flex;flex-direction:column;align-items:center;justify-content:center;min-width:0}.scale-map-stage--regions{width:100%;height:500px;display:flex;align-items:center;justify-content:center}.scale-map-image--regions{display:block;width:auto;max-width:100%;height:492px;object-fit:contain;filter:hue-rotate(58deg) saturate(1.65) brightness(1.08)}.scale-map-caption{margin-top:-6px;font-size:10px;font-weight:600;letter-spacing:.01em;color:#746b7d;text-align:center}.scale-stats-card{align-self:center;padding:4px 0;background:transparent}.scale-stats-kicker{margin:0 0 10px 44px;font-size:10px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:#8a7d93}.scale-stats{display:grid;gap:0}.scale-stat{display:grid;grid-template-columns:34px minmax(0,1fr);gap:10px;align-items:center;padding:20px 0;border-bottom:1px solid rgba(91,63,155,.11)}.scale-stat:last-child{border-bottom:0}.scale-stat-arrow{display:block;color:#f28a31;font-size:34px;line-height:.8;font-weight:700;transform:translateX(-2px)}.scale-stat>div{display:flex;align-items:baseline;gap:8px;flex-wrap:wrap}.scale-number{font-size:clamp(40px,3.4vw,54px);line-height:.9;color:#5b3f9b;font-weight:700;letter-spacing:-.05em}.scale-label{font-size:clamp(18px,1.55vw,23px);line-height:1;color:#5b3f9b;font-weight:700;letter-spacing:-.02em}.scale-label--big{font-size:clamp(18px,1.5vw,22px);line-height:1.08}.scale-stat--context{padding-top:20px;padding-bottom:6px}

    .territory-section{background:#fff;padding:76px 0;overflow:hidden}.territory-section .container{width:min(calc(100% - 40px),1320px);margin-inline:auto;box-sizing:border-box}.territory-section h2{max-width:760px}.territory-grid{margin-top:32px;display:grid;grid-template-columns:minmax(0,.88fr) minmax(0,1.12fr);gap:42px;align-items:center;width:100%;min-width:0}.territory-model,.territory-explain{min-width:0}.territory-model{display:flex;flex-direction:column;align-items:center}.territory-svg{display:block;width:min(100%,520px);height:auto;overflow:visible}.territory-model small{margin-top:12px;font-size:9px;color:#7a8188;font-style:italic;text-align:center}.territory-explain{display:grid;gap:20px;width:100%;max-width:100%}.territory-note{display:grid;grid-template-columns:34px minmax(0,1fr);gap:14px;align-items:start;padding-bottom:22px;border-bottom:1px solid #eee8f1;min-width:0}.territory-note:last-child{border-bottom:0;padding-bottom:0}.territory-note>div{min-width:0}.territory-swatch{width:34px;height:34px;border-radius:8px;display:block;margin-top:2px}.note-learning .territory-swatch{background:#f28a31}.note-school .territory-swatch{background:#b23aa0}.note-slep .territory-swatch{background:#5d48a3}.territory-note h3{margin:0 0 8px;font-size:clamp(17px,1.45vw,22px);line-height:1.18;color:#5d48a3;font-weight:600;letter-spacing:-.02em;overflow-wrap:anywhere}.territory-note p{margin:0;font-size:12.5px;line-height:1.55;color:#545d66;max-width:none;overflow-wrap:anywhere}
    @media(max-width:1180px){.scale-visual{grid-template-columns:minmax(250px,.8fr) minmax(330px,1fr) minmax(220px,.7fr);gap:10px;padding:24px}.territory-grid{grid-template-columns:1fr;gap:34px}.territory-model{max-width:560px;margin:0 auto;width:100%}.territory-explain{max-width:720px;margin:0 auto}.territory-section h2{max-width:760px}}
    @media(max-width:900px){.scale-visual{grid-template-columns:1fr 1fr;gap:10px;min-height:0;padding:24px}.scale-intro{grid-column:1/-1;padding:8px 4px 2px}.scale-intro h4{max-width:620px}.scale-map-stage--regions{height:390px}.scale-map-image--regions{height:382px}.scale-stats-card{padding-right:10px}.systemic-reference-stage{padding:12px}.systemic-layer{grid-template-columns:1fr;gap:14px;min-height:0;padding:22px}.systemic-layer--school,.systemic-layer--classroom{margin-left:12px}.systemic-core{justify-self:start;width:106px;height:106px}.systemic-layer-copy{padding-right:0}}
    @media(max-width:620px){.scale-visual{grid-template-columns:1fr;padding:16px 14px;border-radius:20px}.scale-intro{grid-column:auto;padding:8px 6px 0}.scale-intro h4{font-size:32px}.scale-intro p{font-size:13px}.scale-map-stage--regions{height:320px}.scale-map-image--regions{height:312px}.scale-map-caption{font-size:9.5px}.scale-stats-card{padding:0 8px 4px}.scale-stats-kicker{margin-left:40px}.scale-stat{grid-template-columns:30px 1fr;gap:8px;padding:13px 0}.scale-stat-arrow{font-size:29px}.scale-number{font-size:36px}.scale-label{font-size:18px}.scale-label--big{font-size:17px}.systemic-reference-stage{padding:9px;border-radius:20px}.systemic-layer{padding:18px;border-radius:17px}.systemic-layer--school,.systemic-layer--classroom{margin-left:8px}.systemic-layer-copy strong{font-size:18px}.systemic-layer-copy p{font-size:11px}.systemic-core{width:92px;height:92px;border-width:4px}.systemic-core strong{font-size:15px}.systemic-reference-note{font-size:11.5px}}
    @media(max-width:560px){.territory-section{padding:58px 0}.territory-section .container{width:min(calc(100% - 28px),1320px)}.territory-grid{margin-top:24px;gap:28px}.territory-svg{width:min(100%,360px)}.territory-note{grid-template-columns:30px minmax(0,1fr);gap:11px}.territory-swatch{width:30px;height:30px}.territory-note h3{font-size:17px}.territory-note p{font-size:12px}}
  `;
  document.head.appendChild(style);
}