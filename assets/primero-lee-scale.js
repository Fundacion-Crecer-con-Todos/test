if(location.pathname==='/primero-lee'||location.pathname==='/primero-lee/index.html'){
  const card=document.querySelector('.feature-scalable');
  if(card&&!card.querySelector('.scale-visual')){
    const visual=document.createElement('div');
    visual.className='scale-visual';
    visual.innerHTML=`
      <img class="scale-map-image" src="/assets/primero-lee-mapa.jpg" alt="Mapa de Chile con implementación de Primero LEE en 15 regiones, 80 comunas, zonas urbanas y rurales">
    `;
    card.appendChild(visual);

    const style=document.createElement('style');
    style.textContent=`
      .feature-scalable{grid-column:1/-1;align-content:start}
      .scale-visual{grid-column:1/-1;margin-top:14px;display:flex;justify-content:center;align-items:center;background:#dedede;border-radius:20px;overflow:hidden;border:1px solid rgba(134,68,144,.08);box-shadow:0 10px 24px rgba(35,38,42,.08)}
      .scale-map-image{display:block;width:min(100%,980px);height:auto;object-fit:contain;margin:0 auto}
      @media(max-width:700px){.scale-visual{border-radius:16px}.scale-map-image{width:100%}}
    `;
    document.head.appendChild(style);
  }
}
