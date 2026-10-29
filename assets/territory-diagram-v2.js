(()=>{
  if(location.pathname!=='/primero-lee'&&location.pathname!=='/primero-lee/index.html') return;
  const apply=()=>{
    const model=document.querySelector('.territory-model');
    if(!model) return false;
    model.innerHTML=`
      <svg class="territory-svg" viewBox="0 0 560 560" role="img" aria-label="Modelo de trabajo territorial de Primero LEE">
        <circle cx="280" cy="280" r="248" fill="#5d48a3"/>
        <circle cx="280" cy="280" r="150" fill="#b23aa0" stroke="#fff" stroke-width="3"/>
        <circle cx="280" cy="280" r="54" fill="#f28a31" stroke="#fff" stroke-width="3"/>

        <g fill="#fff" font-family="Fredoka, sans-serif" font-weight="500" text-anchor="middle">
          <text x="280" y="64" font-size="12"><tspan x="280" dy="0">Movilización del sistema,</tspan><tspan x="280" dy="14">reconocimiento e incentivos</tspan></text>
          <text x="449" y="188" font-size="12"><tspan x="449" dy="0">Planeamiento y</tspan><tspan x="449" dy="14">monitoreo</tspan></text>
          <text x="451" y="393" font-size="12"><tspan x="451" dy="0">Recursos para la</tspan><tspan x="451" dy="14">continuidad</tspan></text>
          <text x="280" y="496" font-size="12"><tspan x="280" dy="0">Condiciones para la</tspan><tspan x="280" dy="14">enseñanza y el aprendizaje</tspan></text>
          <text x="109" y="393" font-size="12"><tspan x="109" dy="0">Liderazgo y compromiso</tspan><tspan x="109" dy="14">político</tspan></text>
          <text x="108" y="188" font-size="12"><tspan x="108" dy="0">Fortalecimiento</tspan><tspan x="108" dy="14">de la gestión</tspan></text>

          <text x="280" y="158" font-size="10.5"><tspan x="280" dy="0">Formación y acompañamiento a</tspan><tspan x="280" dy="12">docentes y equipos directivos</tspan></text>
          <text x="390" y="271" font-size="10.5"><tspan x="390" dy="0">Materiales</tspan><tspan x="390" dy="12">de calidad</tspan></text>
          <text x="372" y="382" font-size="10.5"><tspan x="372" dy="0">Lineamientos</tspan><tspan x="372" dy="12">pedagógico-</tspan><tspan x="372" dy="12">curriculares</tspan></text>
          <text x="188" y="382" font-size="10.5"><tspan x="188" dy="0">Reforzamiento y</tspan><tspan x="188" dy="12">aceleración de</tspan><tspan x="188" dy="12">aprendizajes</tspan></text>
          <text x="170" y="271" font-size="10.5"><tspan x="170" dy="0">Evaluación de</tspan><tspan x="170" dy="12">aprendizajes</tspan></text>

          <text x="280" y="287" font-size="18" font-weight="600">Aprendizaje</text>
        </g>
      </svg>
      <small>Adaptado de “Factores de éxito compartidos”, Instituto Natura.</small>`;

    if(!document.getElementById('territory-diagram-v2-style')){
      const s=document.createElement('style');
      s.id='territory-diagram-v2-style';
      s.textContent=`
        .territory-model{display:flex!important;flex-direction:column!important;align-items:center!important;min-width:0!important;overflow:visible!important}
        .territory-svg{display:block;width:min(100%,520px);height:auto;overflow:visible}
        .territory-model small{margin-top:12px!important;font-size:9px!important;color:#7a8188!important;font-style:italic!important;text-align:center!important}
        .territory-outer,.territory-middle,.territory-center,.outer-label,.middle-label{display:none!important}
        @media(max-width:560px){.territory-svg{width:min(100%,360px)}}
      `;
      document.head.appendChild(s);
    }
    return true;
  };
  if(!apply()){
    let n=0;
    const t=setInterval(()=>{n++;if(apply()||n>40)clearInterval(t)},100);
  }
})();
