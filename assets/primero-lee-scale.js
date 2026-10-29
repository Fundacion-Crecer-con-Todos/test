if(location.pathname==='/primero-lee'||location.pathname==='/primero-lee/index.html'){
  const systemic=document.querySelector('.feature-systemic');
  if(systemic){
    systemic.style.gridColumn='1 / -1';
    systemic.style.gridTemplateColumns='36px minmax(0,1fr)';
    const figure=systemic.querySelector('.system-figure');
    if(figure){
      figure.style.gridColumn='1 / -1';
      figure.style.width='100%';
      figure.style.maxWidth='760px';
      figure.style.margin='18px auto 2px';
      figure.style.justifyContent='center';
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
        <div class="scale-map-stage">
          <img class="scale-map-image" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Chile_blank_map.svg" alt="Mapa de Chile" loading="lazy">
        </div>
        <div class="scale-stats">
          <div class="scale-stat"><span class="scale-arrow">▶</span><div><strong class="scale-number">15</strong><span class="scale-label">regiones</span></div></div>
          <div class="scale-stat"><span class="scale-arrow">▶</span><div><strong class="scale-number">80</strong><span class="scale-label">comunas</span></div></div>
          <div class="scale-stat"><span class="scale-arrow">▶</span><div><strong class="scale-label scale-label--big">Zona urbana</strong></div></div>
          <div class="scale-stat"><span class="scale-arrow">▶</span><div><strong class="scale-label scale-label--big">Zona rural</strong></div></div>
        </div>
      </div>`;
    card.appendChild(visual);

    const style=document.createElement('style');
    style.textContent=`
      .feature-systemic{grid-column:1/-1!important}
      .feature-systemic .system-figure{grid-column:1/-1!important;width:100%;max-width:760px;margin:18px auto 2px;justify-content:center}
      .feature-scalable{grid-column:1/-1;align-content:start;overflow:hidden}
      .scale-visual{grid-column:1/-1;margin-top:16px;display:grid;grid-template-columns:minmax(0,.94fr) minmax(0,1.06fr);gap:8px;align-items:stretch;background:#f7f3f8;border-radius:24px;padding:12px;border:1px solid rgba(134,68,144,.06);box-shadow:0 10px 24px rgba(35,38,42,.05)}
      .scale-intro{min-height:430px;padding:54px 36px;display:flex;flex-direction:column;justify-content:center;border-radius:18px;background:#f7f7f7}
      .scale-intro h4{margin:0;font-size:clamp(30px,3.15vw,44px);line-height:1.08;letter-spacing:-.035em;font-weight:600;color:#13aeca}
      .scale-line{width:min(100%,360px);height:4px;margin:22px 0 20px;border-radius:999px;background:#13b4ce}
      .scale-intro p{max-width:450px;margin:0;font-size:14px;line-height:1.55;color:#59636b}
      .scale-panel{min-height:430px;display:grid;grid-template-columns:minmax(170px,.82fr) minmax(0,1.18fr);gap:28px;align-items:center;padding:24px 30px 24px 22px;border-radius:18px;background:#d6d6d6;overflow:hidden}
      .scale-map-stage{position:relative;height:380px;display:flex;align-items:center;justify-content:center}
      .scale-map-image{display:block;width:auto;max-width:100%;height:360px;object-fit:contain;filter:invert(27%) sepia(35%) saturate(1700%) hue-rotate(224deg) brightness(82%) contrast(90%)}
      .scale-stats{display:grid;gap:6px}
      .scale-stat{display:grid;grid-template-columns:28px 1fr;gap:12px;align-items:center;padding:18px 0}
      .scale-arrow{font-size:22px;line-height:1;color:#5b3f9b;transform:scaleX(.88)}
      .scale-stat>div{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}
      .scale-number{font-size:clamp(40px,4vw,58px);line-height:.9;color:#5b3f9b;font-weight:700;letter-spacing:-.05em}
      .scale-label{font-size:clamp(19px,2vw,28px);line-height:1;color:#5b3f9b;font-weight:700;letter-spacing:-.02em}
      .scale-label--big{font-size:clamp(21px,2.35vw,31px);line-height:1.07}
      @media(max-width:900px){.scale-visual{grid-template-columns:1fr;gap:8px}.scale-intro{min-height:0;padding:32px 28px}.scale-panel{min-height:390px}}
      @media(max-width:620px){.scale-visual{padding:8px;border-radius:20px}.scale-intro{padding:26px 20px;border-radius:15px}.scale-intro h4{font-size:30px}.scale-intro p{font-size:13px}.scale-panel{grid-template-columns:125px minmax(0,1fr);gap:10px;min-height:330px;padding:18px 14px;border-radius:15px}.scale-map-stage{height:300px}.scale-map-image{height:292px}.scale-stat{grid-template-columns:20px 1fr;gap:7px;padding:12px 0}.scale-arrow{font-size:16px}.scale-number{font-size:34px}.scale-label{font-size:18px}.scale-label--big{font-size:18px}}
    `;
    document.head.appendChild(style);
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
          <div class="territory-model" role="img" aria-label="Modelo de trabajo territorial de Primero LEE, con Aprendizaje al centro, Escuela en el segundo nivel y SLEP en el nivel territorial">
            <div class="territory-outer">
              <span class="outer-label o1">Movilización del sistema,<br>reconocimiento e incentivos</span>
              <span class="outer-label o2">Planeamiento y<br>monitoreo</span>
              <span class="outer-label o3">Recursos para la<br>continuidad</span>
              <span class="outer-label o4">Condiciones para la<br>enseñanza y el aprendizaje</span>
              <span class="outer-label o5">Liderazgo y compromiso<br>político</span>
              <span class="outer-label o6">Fortalecimiento<br>de la gestión</span>
              <div class="territory-middle">
                <span class="middle-label m1">Formación y acompañamiento a<br>docentes y equipos directivos</span>
                <span class="middle-label m2">Materiales<br>de calidad</span>
                <span class="middle-label m3">Lineamientos<br>pedagógico-curriculares</span>
                <span class="middle-label m4">Reforzamiento y aceleración<br>de aprendizajes</span>
                <span class="middle-label m5">Evaluación de<br>aprendizajes</span>
                <div class="territory-center">Aprendizaje</div>
              </div>
            </div>
            <small>Adaptado de “Factores de éxito compartidos”, Instituto Natura.</small>
          </div>
          <div class="territory-explain">
            <article class="territory-note note-learning">
              <span class="territory-swatch"></span>
              <div><h3>Aprendizaje</h3><p>El centro de todo: que cada niño y niña aprenda a leer y comprender lo que lee a tiempo.</p></div>
            </article>
            <article class="territory-note note-school">
              <span class="territory-swatch"></span>
              <div><h3>Escuela: docentes, equipos directivos y UTP</h3><p>Lo que ocurre en el aula y en la gestión pedagógica: formación, materiales, evaluación y apoyo a quienes van más atrás.</p></div>
            </article>
            <article class="territory-note note-slep">
              <span class="territory-swatch"></span>
              <div><h3>SLEP: sostenedor y UATP</h3><p>Las condiciones para que la mejora sea efectiva y sostenible en el territorio: gestión, planificación, recursos y liderazgo.</p></div>
            </article>
          </div>
        </div>
      </div>`;
    features.insertAdjacentElement('afterend',section);

    const territoryStyle=document.createElement('style');
    territoryStyle.textContent=`
      .territory-section{background:#fff;padding:76px 0;overflow:hidden}
      .territory-section .container{width:min(100% - 40px,1320px);margin-inline:auto;box-sizing:border-box}
      .territory-section h2{max-width:760px;margin-right:0}
      .territory-grid{margin-top:32px;display:grid;grid-template-columns:minmax(0,.88fr) minmax(0,1.12fr);gap:42px;align-items:center;width:100%;min-width:0}
      .territory-model,.territory-explain{min-width:0}
      .territory-model{display:flex;flex-direction:column;align-items:center}
      .territory-outer{position:relative;width:min(100%,470px);aspect-ratio:1;border-radius:50%;background:#5d48a3;box-shadow:0 18px 44px rgba(74,55,133,.12)}
      .territory-middle{position:absolute;inset:20.5%;border-radius:50%;background:#b23aa0;border:3px solid rgba(255,255,255,.92)}
      .territory-center{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:28%;aspect-ratio:1;border-radius:50%;display:grid;place-items:center;background:#f28a31;color:#fff;font-size:clamp(12px,1.2vw,17px);font-weight:600;border:3px solid rgba(255,255,255,.92);text-align:center;padding:4px;box-sizing:border-box;white-space:nowrap}
      .outer-label,.middle-label{position:absolute;color:#fff;text-align:center;font-weight:500;line-height:1.08;z-index:2;box-sizing:border-box}
      .outer-label{font-size:clamp(7px,.62vw,9px);width:23%}
      .middle-label{font-size:clamp(5.8px,.54vw,7.6px);line-height:1.05}
      .o1{left:38.5%;top:5%}.o2{right:6%;top:29%}.o3{right:6%;bottom:24%}.o4{left:38.5%;bottom:5%}.o5{left:6%;bottom:24%}.o6{left:6%;top:29%}
      .m1{width:44%;left:28%;top:7%}.m2{width:24%;right:4%;top:39%}.m3{width:30%;right:8%;bottom:10%}.m4{width:32%;left:8%;bottom:10%}.m5{width:24%;left:4%;top:39%}
      .territory-model small{margin-top:12px;font-size:9px;color:#7a8188;font-style:italic;text-align:center}
      .territory-explain{display:grid;gap:20px;width:100%;max-width:100%}
      .territory-note{display:grid;grid-template-columns:34px minmax(0,1fr);gap:14px;align-items:start;padding-bottom:22px;border-bottom:1px solid #eee8f1;min-width:0}
      .territory-note:last-child{border-bottom:0;padding-bottom:0}
      .territory-note>div{min-width:0}
      .territory-swatch{width:34px;height:34px;border-radius:8px;display:block;margin-top:2px}
      .note-learning .territory-swatch{background:#f28a31}.note-school .territory-swatch{background:#b23aa0}.note-slep .territory-swatch{background:#5d48a3}
      .territory-note h3{margin:0 0 8px;font-size:clamp(17px,1.45vw,22px);line-height:1.18;color:#5d48a3;font-weight:600;letter-spacing:-.02em;overflow-wrap:anywhere}
      .territory-note p{margin:0;font-size:12.5px;line-height:1.55;color:#545d66;max-width:none;overflow-wrap:anywhere}
      @media(max-width:980px){.territory-grid{grid-template-columns:1fr;gap:34px}.territory-outer{width:min(100%,470px)}.territory-explain{max-width:720px;margin:0 auto}.territory-section h2{max-width:760px}}
      @media(max-width:560px){.territory-section{padding:58px 0}.territory-section .container{width:min(100% - 28px,1320px)}.territory-grid{margin-top:24px;gap:28px}.territory-outer{width:min(100%,340px)}.outer-label{font-size:6px;width:24%}.middle-label{font-size:5px}.territory-center{font-size:11px;width:30%}.territory-note{grid-template-columns:30px minmax(0,1fr);gap:11px}.territory-swatch{width:30px;height:30px}.territory-note h3{font-size:17px}.territory-note p{font-size:12px}}
    `;
    document.head.appendChild(territoryStyle);
  }
}
