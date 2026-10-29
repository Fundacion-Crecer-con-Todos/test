if(location.pathname==='/primero-lee'||location.pathname==='/primero-lee/index.html'){
  const card=document.querySelector('.feature-scalable');
  if(card&&!card.querySelector('.scale-visual')){
    const visual=document.createElement('div');
    visual.className='scale-visual';
    visual.setAttribute('aria-label','Implementación de Primero LEE en 15 regiones, 80 comunas, zonas urbanas y rurales');
    visual.innerHTML=`
      <div class="scale-intro">
        <span class="scale-kicker">Presencia territorial</span>
        <h4>Implementación en<br>diversos contextos</h4>
        <div class="scale-line"></div>
        <p>Experiencia implementando el programa en distintas realidades del sistema educativo.</p>
        <div class="scale-blocks" aria-hidden="true">
          <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
        </div>
      </div>
      <div class="scale-panel">
        <div class="scale-map-stage">
          <div class="scale-map-wrap">
            <img class="scale-map-image" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Regions_of_Chile_(Blank).png" alt="Mapa de las regiones de Chile" loading="lazy">
          </div>
          <img class="scale-pin pin-1" src="/assets/primero-lee-logo.png" alt="" aria-hidden="true">
          <img class="scale-pin pin-2" src="/assets/primero-lee-logo.png" alt="" aria-hidden="true">
          <img class="scale-pin pin-3" src="/assets/primero-lee-logo.png" alt="" aria-hidden="true">
          <img class="scale-pin pin-4" src="/assets/primero-lee-logo.png" alt="" aria-hidden="true">
          <img class="scale-pin pin-5" src="/assets/primero-lee-logo.png" alt="" aria-hidden="true">
          <img class="scale-pin pin-6" src="/assets/primero-lee-logo.png" alt="" aria-hidden="true">
          <img class="scale-pin pin-7" src="/assets/primero-lee-logo.png" alt="" aria-hidden="true">
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
      .scale-visual{grid-column:1/-1;margin-top:16px;display:grid;grid-template-columns:minmax(0,.82fr) minmax(0,1.18fr);gap:18px;align-items:stretch;background:#fff;border-radius:24px;padding:18px;border:1px solid rgba(134,68,144,.08);box-shadow:0 14px 34px rgba(35,38,42,.08)}
      .scale-intro{position:relative;min-height:430px;padding:48px 34px 34px;display:flex;flex-direction:column;justify-content:center;overflow:hidden;border-radius:18px;background:linear-gradient(145deg,#fbfdfe 0%,#f5fbfc 100%)}
      .scale-kicker{display:block;margin-bottom:14px;font-size:10px;letter-spacing:.09em;text-transform:uppercase;font-weight:700;color:#00a9c7}
      .scale-intro h4{margin:0;font-size:clamp(28px,3vw,42px);line-height:1.06;letter-spacing:-.035em;font-weight:600;color:#13aeca}
      .scale-line{width:min(100%,360px);height:4px;margin:22px 0 18px;border-radius:999px;background:#13b4ce}
      .scale-intro p{max-width:430px;margin:0;font-size:14px;line-height:1.55;color:#59636b}
      .scale-blocks{display:flex;align-items:flex-end;gap:5px;margin-top:auto;padding-top:32px}
      .scale-blocks i{display:block;width:22px;height:22px;border-radius:3px;background:#8cc63f}
      .scale-blocks i:nth-child(2),.scale-blocks i:nth-child(8){height:14px;background:#ef4e4e}
      .scale-blocks i:nth-child(3),.scale-blocks i:nth-child(9){background:#f28a16}
      .scale-blocks i:nth-child(4),.scale-blocks i:nth-child(7),.scale-blocks i:nth-child(11){background:#5b3f9b}
      .scale-blocks i:nth-child(5),.scale-blocks i:nth-child(12){background:#13b4ce}
      .scale-blocks i:nth-child(6),.scale-blocks i:nth-child(10){background:#c3549a}
      .scale-panel{min-height:430px;display:grid;grid-template-columns:minmax(190px,.95fr) minmax(0,1.05fr);gap:18px;align-items:center;padding:26px 26px 26px 22px;border-radius:18px;background:#d9d9d9;overflow:hidden}
      .scale-map-stage{position:relative;height:372px;display:flex;align-items:center;justify-content:center;overflow:visible}
      .scale-map-wrap{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;overflow:hidden}
      .scale-map-image{display:block;width:auto;max-width:100%;height:360px;object-fit:contain;filter:grayscale(1) contrast(.82) brightness(1.12);opacity:.95;mix-blend-mode:multiply}
      .scale-pin{position:absolute;z-index:2;width:64px;height:auto;object-fit:contain;filter:drop-shadow(0 3px 7px rgba(33,24,42,.16));transform:translate(-50%,-50%) rotate(-2deg)}
      .pin-1{left:54%;top:10%}.pin-2{left:49%;top:24%;transform:translate(-50%,-50%) rotate(2deg)}.pin-3{left:45%;top:39%}.pin-4{left:43%;top:53%;transform:translate(-50%,-50%) rotate(3deg)}.pin-5{left:42%;top:67%}.pin-6{left:40%;top:80%;transform:translate(-50%,-50%) rotate(2deg)}.pin-7{left:36%;top:91%}
      .scale-stats{display:grid;gap:0;padding-left:4px}
      .scale-stat{display:grid;grid-template-columns:30px 1fr;gap:10px;align-items:center;padding:20px 0}
      .scale-arrow{font-size:24px;line-height:1;color:#5b3f9b;transform:scaleX(.82)}
      .scale-stat strong{font-size:clamp(21px,2.3vw,31px);line-height:1.06;color:#5b3f9b;font-weight:700;letter-spacing:-.025em}
      @media(max-width:900px){.scale-visual{grid-template-columns:1fr}.scale-intro{min-height:0;padding:32px 28px}.scale-blocks{margin-top:28px;padding-top:0}.scale-panel{min-height:390px}}
      @media(max-width:620px){.scale-visual{padding:10px;border-radius:20px}.scale-intro{padding:26px 20px;border-radius:15px}.scale-intro h4{font-size:30px}.scale-intro p{font-size:13px}.scale-panel{grid-template-columns:130px minmax(0,1fr);gap:10px;min-height:330px;padding:18px 14px;border-radius:15px}.scale-map-stage{height:300px}.scale-map-image{height:292px}.scale-pin{width:46px}.scale-stat{grid-template-columns:20px 1fr;gap:7px;padding:14px 0}.scale-arrow{font-size:16px}.scale-stat strong{font-size:18px}.scale-blocks i{width:18px;height:18px}}
    `;
    document.head.appendChild(style);
  }
}
