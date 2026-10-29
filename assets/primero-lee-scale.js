if(location.pathname==='/primero-lee'||location.pathname==='/primero-lee/index.html'){
  const systemic=document.querySelector('.feature-systemic');
  if(systemic){
    systemic.style.gridColumn='1 / -1';
    systemic.style.gridTemplateColumns='36px minmax(0,1fr)';
    const figure=systemic.querySelector('.system-figure');
    if(figure){
      figure.className='systemic-levels';
      figure.setAttribute('aria-label','Niveles de implementación de Primero LEE: aula, escuela y sostenedor o SLEP');
      figure.innerHTML=`
        <div class="systemic-levels-head">
          <span class="systemic-levels-kicker">Niveles de implementación</span>
          <h4>Primero LEE conecta el aula, la escuela y el sostenedor.</h4>
          <p>El aprendizaje se fortalece cuando cada nivel del sistema educativo aporta capacidades y condiciones para sostener la mejora.</p>
        </div>
        <div class="systemic-levels-grid">
          <article class="systemic-level systemic-level--aula">
            <span class="systemic-level-number">01</span>
            <div class="systemic-level-dot" aria-hidden="true"></div>
            <span class="systemic-level-label">Aula</span>
            <h5>Docentes y estudiantes</h5>
            <p>Enseñanza, materiales, evaluación y apoyo para que cada niño y niña avance en sus aprendizajes.</p>
          </article>
          <div class="systemic-connector" aria-hidden="true">→</div>
          <article class="systemic-level systemic-level--escuela">
            <span class="systemic-level-number">02</span>
            <div class="systemic-level-dot" aria-hidden="true"></div>
            <span class="systemic-level-label">Escuela</span>
            <h5>Equipos directivos y UTP</h5>
            <p>Acompañamiento, gestión pedagógica y desarrollo de capacidades para sostener la implementación.</p>
          </article>
          <div class="systemic-connector" aria-hidden="true">→</div>
          <article class="systemic-level systemic-level--slep">
            <span class="systemic-level-number">03</span>
            <div class="systemic-level-dot" aria-hidden="true"></div>
            <span class="systemic-level-label">Sostenedor / SLEP</span>
            <h5>Condiciones para la mejora</h5>
            <p>Planificación, liderazgo, recursos y continuidad para escalar el trabajo y sostenerlo en el territorio.</p>
          </article>
        </div>
        <div class="systemic-levels-footer"><span></span><p>Un modelo sistémico: desde lo que ocurre en el aula hasta las condiciones que permiten sostener la mejora en el tiempo.</p></div>`;
    }
  }

  const card=document.querySelector('.feature-scalable');
  if(card&&!card.querySelector('.scale-visual')){
    const visual=document.createElement('div');
    visual.className='scale-visual';
    visual.setAttribute('aria-label','Implementación de Primero LEE en 15 regiones, 80 comunas, zonas urbanas y rurales');
    visual.innerHTML=`
      <div class="scale-intro">
        <div>
          <h4>Implementación en<br>diversos contextos</h4>
          <div class="scale-line"></div>
          <p>Experiencia implementando el programa en distintas realidades del sistema educativo.</p>
        </div>
      </div>
      <div class="scale-panel">
        <div class="scale-map-stage"><img class="scale-map-image" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Chile_blank_map.svg" alt="Mapa de Chile" loading="lazy"></div>
        <div class="scale-stats">
          <div class="scale-stat"><span class="scale-arrow">▶</span><div><strong class="scale-number">15</strong><span class="scale-label">regiones</span></div></div>
          <div class="scale-stat"><span class="scale-arrow">▶</span><div><strong class="scale-number">80</strong><span class="scale-label">comunas</span></div></div>
          <div class="scale-stat"><span class="scale-arrow">▶</span><div><strong class="scale-label scale-label--big">Zona urbana</strong></div></div>
          <div class="scale-stat"><span class="scale-arrow">▶</span><div><strong class="scale-label scale-label--big">Zona rural</strong></div></div>
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
    .feature-systemic{grid-column:1/-1!important}.systemic-levels{grid-column:1/-1!important;width:100%;margin:20px 0 2px;padding:30px;border-radius:24px;background:linear-gradient(135deg,#f5fbfd 0%,#fbf7fc 100%);border:1px solid rgba(93,72,163,.08);box-shadow:0 12px 28px rgba(35,38,42,.05);box-sizing:border-box}.systemic-levels-head{max-width:760px;margin-bottom:26px}.systemic-levels-kicker{display:inline-block;margin-bottom:10px;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#5d48a3}.systemic-levels-head h4{margin:0 0 10px;font-size:clamp(25px,2.6vw,38px);line-height:1.08;letter-spacing:-.035em;color:#23262a;font-weight:600}.systemic-levels-head p{margin:0;max-width:700px;font-size:14px;line-height:1.55;color:#616a72}.systemic-levels-grid{display:grid;grid-template-columns:minmax(0,1fr) 48px minmax(0,1fr) 48px minmax(0,1fr);align-items:stretch}.systemic-level{position:relative;min-width:0;padding:24px 22px 22px;border-radius:18px;background:#fff;border:1px solid rgba(0,0,0,.045);overflow:hidden}.systemic-level::before{content:"";position:absolute;inset:0 0 auto;height:5px}.systemic-level--aula::before{background:#13b4ce}.systemic-level--escuela::before{background:#b23aa0}.systemic-level--slep::before{background:#5d48a3}.systemic-level-number{position:absolute;top:18px;right:18px;font-size:11px;font-weight:700;letter-spacing:.08em;color:#a6adb3}.systemic-level-dot{width:42px;height:42px;margin-bottom:20px;border-radius:12px}.systemic-level--aula .systemic-level-dot{background:#dff6fa}.systemic-level--escuela .systemic-level-dot{background:#f6e5f3}.systemic-level--slep .systemic-level-dot{background:#ebe7f7}.systemic-level-label{display:block;margin-bottom:7px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em}.systemic-level--aula .systemic-level-label{color:#079ab5}.systemic-level--escuela .systemic-level-label{color:#a32d91}.systemic-level--slep .systemic-level-label{color:#5d48a3}.systemic-level h5{margin:0 0 9px;font-size:clamp(18px,1.65vw,23px);line-height:1.12;color:#24272b;font-weight:600;letter-spacing:-.025em}.systemic-level p{margin:0;font-size:13px;line-height:1.5;color:#5d666e}.systemic-connector{display:flex;align-items:center;justify-content:center;font-size:27px;color:#8fcbd6;font-weight:400}.systemic-levels-footer{margin-top:18px;padding-top:18px;border-top:1px solid rgba(93,72,163,.10);display:grid;grid-template-columns:40px minmax(0,1fr);gap:12px;align-items:center}.systemic-levels-footer span{display:block;width:40px;height:4px;border-radius:99px;background:linear-gradient(90deg,#13b4ce 0 33%,#b23aa0 33% 66%,#f28a31 66%)}.systemic-levels-footer p{margin:0;font-size:12.5px;line-height:1.45;color:#626a71}
    .feature-scalable{grid-column:1/-1;align-content:start;overflow:hidden}.scale-visual{grid-column:1/-1;margin-top:16px;display:grid;grid-template-columns:minmax(0,.94fr) minmax(0,1.06fr);gap:8px;align-items:stretch;background:#f7f3f8;border-radius:24px;padding:12px;border:1px solid rgba(134,68,144,.06);box-shadow:0 10px 24px rgba(35,38,42,.05)}
    .scale-intro{min-height:430px;padding:54px 36px;display:flex;flex-direction:column;justify-content:center;border-radius:18px;background:#f7f7f7}.scale-intro h4{margin:0;font-size:clamp(30px,3.15vw,44px);line-height:1.08;letter-spacing:-.035em;font-weight:600;color:#13aeca}.scale-line{width:min(100%,360px);height:4px;margin:22px 0 20px;border-radius:999px;background:#13b4ce}.scale-intro p{max-width:450px;margin:0;font-size:14px;line-height:1.55;color:#59636b}
    .scale-panel{min-height:430px;display:grid;grid-template-columns:minmax(170px,.82fr) minmax(0,1.18fr);gap:28px;align-items:center;padding:24px 30px 24px 22px;border-radius:18px;background:#d6d6d6;overflow:hidden}.scale-map-stage{position:relative;height:380px;display:flex;align-items:center;justify-content:center}.scale-map-image{display:block;width:auto;max-width:100%;height:360px;object-fit:contain;filter:invert(27%) sepia(35%) saturate(1700%) hue-rotate(224deg) brightness(82%) contrast(90%)}
    .scale-stats{display:grid;gap:6px}.scale-stat{display:grid;grid-template-columns:28px 1fr;gap:12px;align-items:center;padding:18px 0}.scale-arrow{font-size:22px;line-height:1;color:#5b3f9b;transform:scaleX(.88)}.scale-stat>div{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}.scale-number{font-size:clamp(40px,4vw,58px);line-height:.9;color:#5b3f9b;font-weight:700;letter-spacing:-.05em}.scale-label{font-size:clamp(19px,2vw,28px);line-height:1;color:#5b3f9b;font-weight:700;letter-spacing:-.02em}.scale-label--big{font-size:clamp(21px,2.35vw,31px);line-height:1.07}
    .territory-section{background:#fff;padding:76px 0;overflow:hidden}.territory-section .container{width:min(calc(100% - 40px),1320px);margin-inline:auto;box-sizing:border-box}.territory-section h2{max-width:760px}.territory-grid{margin-top:32px;display:grid;grid-template-columns:minmax(0,.88fr) minmax(0,1.12fr);gap:42px;align-items:center;width:100%;min-width:0}.territory-model,.territory-explain{min-width:0}.territory-model{display:flex;flex-direction:column;align-items:center}.territory-svg{display:block;width:min(100%,520px);height:auto;overflow:visible}.territory-model small{margin-top:12px;font-size:9px;color:#7a8188;font-style:italic;text-align:center}.territory-explain{display:grid;gap:20px;width:100%;max-width:100%}.territory-note{display:grid;grid-template-columns:34px minmax(0,1fr);gap:14px;align-items:start;padding-bottom:22px;border-bottom:1px solid #eee8f1;min-width:0}.territory-note:last-child{border-bottom:0;padding-bottom:0}.territory-note>div{min-width:0}.territory-swatch{width:34px;height:34px;border-radius:8px;display:block;margin-top:2px}.note-learning .territory-swatch{background:#f28a31}.note-school .territory-swatch{background:#b23aa0}.note-slep .territory-swatch{background:#5d48a3}.territory-note h3{margin:0 0 8px;font-size:clamp(17px,1.45vw,22px);line-height:1.18;color:#5d48a3;font-weight:600;letter-spacing:-.02em;overflow-wrap:anywhere}.territory-note p{margin:0;font-size:12.5px;line-height:1.55;color:#545d66;max-width:none;overflow-wrap:anywhere}
    @media(max-width:1180px){.territory-grid{grid-template-columns:1fr;gap:34px}.territory-model{max-width:560px;margin:0 auto;width:100%}.territory-explain{max-width:720px;margin:0 auto}.territory-section h2{max-width:760px}}
    @media(max-width:900px){.scale-visual{grid-template-columns:1fr;gap:8px}.scale-intro{min-height:0;padding:32px 28px}.scale-panel{min-height:390px}.systemic-levels{padding:24px}.systemic-levels-grid{grid-template-columns:1fr;gap:12px}.systemic-connector{height:18px;transform:rotate(90deg);font-size:22px}.systemic-level{padding:22px}.systemic-levels-head{margin-bottom:20px}}
    @media(max-width:620px){.scale-visual{padding:8px;border-radius:20px}.scale-intro{padding:26px 20px;border-radius:15px}.scale-intro h4{font-size:30px}.scale-intro p{font-size:13px}.scale-panel{grid-template-columns:125px minmax(0,1fr);gap:10px;min-height:330px;padding:18px 14px;border-radius:15px}.scale-map-stage{height:300px}.scale-map-image{height:292px}.scale-stat{grid-template-columns:20px 1fr;gap:7px;padding:12px 0}.scale-arrow{font-size:16px}.scale-number{font-size:34px}.scale-label{font-size:18px}.scale-label--big{font-size:18px}.systemic-levels{padding:18px;border-radius:18px}.systemic-levels-head h4{font-size:25px}.systemic-levels-head p{font-size:13px}.systemic-level{padding:20px 18px}.systemic-level h5{font-size:19px}.systemic-level p{font-size:12.5px}.systemic-levels-footer{grid-template-columns:32px 1fr}.systemic-levels-footer span{width:32px}}
    @media(max-width:560px){.territory-section{padding:58px 0}.territory-section .container{width:min(calc(100% - 28px),1320px)}.territory-grid{margin-top:24px;gap:28px}.territory-svg{width:min(100%,360px)}.territory-note{grid-template-columns:30px minmax(0,1fr);gap:11px}.territory-swatch{width:30px;height:30px}.territory-note h3{font-size:17px}.territory-note p{font-size:12px}}
  `;
  document.head.appendChild(style);
}
