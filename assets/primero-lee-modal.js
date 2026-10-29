(function(){
  const onPage=location.pathname==='/primero-lee'||location.pathname==='/primero-lee/index.html';
  if(!onPage)return;
  const diagram=document.querySelector('.model-diagram');
  if(!diagram)return;

  document.querySelectorAll('.model-detail,.model-interactive-hint').forEach(el=>el.remove());

  const content=[
    {title:'Primero LEE',text:'Primero LEE se basa en un modelo pedagógico balanceado que desarrolla de manera sistemática los distintos ejes del lenguaje: lectura, escritura y comunicación oral. Para ello, cuenta con planificaciones estructuradas y una Guía del Estudiante que articulan el trabajo en torno a unidades temáticas y la lectura de cuentos, facilitando una implementación organizada y consistente en el aula.'},
    {title:'Programa innovador y equilibrado',text:'El programa articula una propuesta pedagógica estructurada y equilibrada para trabajar lectura, escritura y comunicación oral de manera sistemática, con unidades temáticas, cuentos y recursos que facilitan una implementación consistente en el aula.'},
    {title:'Sistema de evaluación y monitoreo',text:'Primero LEE cuenta con un sistema de evaluación permanente que permite monitorear el avance de los aprendizajes a lo largo del año. Los resultados se disponibilizan a través de una plataforma de resultados, reportería e informes, facilitando la identificación de brechas y la toma de decisiones pedagógicas basadas en evidencia, tanto a nivel de curso como de cada estudiante.'},
    {title:'Apoyo a niños y niñas con aprendizajes descendidos',text:'Primero LEE cuenta con programas de refuerzo focalizados para estudiantes que presentan mayores brechas de aprendizaje. A partir de los resultados de las evaluaciones, se identifican sus necesidades y se entregan recursos pedagógicos específicos a través de Primero LEE+, Refuerzo Lector y Plan de Aceleramiento, para fortalecer habilidades clave y favorecer el avance de cada estudiante.'},
    {title:'Acompañamiento',text:'Primero LEE cuenta con mentoras que acompañan a docentes y equipos directivos en cada escuela, a través de visitas presenciales y acompañamiento virtual. Estas instancias incluyen modelaje de estrategias, retroalimentación, reflexión pedagógica y análisis de dato, contribuyendo al desarrollo de capacidades y a la sostenibilidad de la mejora en el tiempo.'},
    {title:'Capacitaciones',text:'Primero LEE ofrece instancias de formación continua para docentes y equipos directivos, abordando contenidos y estrategias pedagógicas clave para la enseñanza de la lectura y la escritura. Estas capacitaciones buscan fortalecer sus conocimientos, potenciar la implementación del programa y su impacto en el aprendizaje de los estudiantes.'},
    {title:'Trabajo con familias',text:'Primero LEE promueve la participación de las familias en el proceso de aprendizaje de niños y niñas, entregando orientaciones y recursos que les permiten acompañar y reforzar la lectura y la escritura desde el hogar. De esta manera, se busca fortalecer el vínculo entre la escuela y las familias y favorecer el desarrollo de hábitos lectores.'}
  ];

  const style=document.createElement('style');
  style.textContent=`
    .model-center,.model-node{cursor:pointer}
    .model-center:focus-visible,.model-node:focus-visible{outline:3px solid rgba(134,68,144,.34);outline-offset:4px}
    .model-modal{position:fixed;inset:0;z-index:9999;display:none;align-items:center;justify-content:center;padding:24px;background:rgba(20,25,30,.5);backdrop-filter:blur(4px)}
    .model-modal.is-open{display:flex}
    .model-modal-card{position:relative;width:min(100%,680px);max-height:min(82vh,720px);overflow:auto;background:#fff;border-radius:24px;padding:34px 34px 30px;box-shadow:0 30px 80px rgba(18,24,30,.28);animation:modelModalIn .18s ease-out}
    .model-modal-kicker{display:block;margin-bottom:9px;font-size:10px;letter-spacing:.09em;text-transform:uppercase;font-weight:600;color:#00a9c7}
    .model-modal-card h3{margin:0;padding-right:42px;font-size:28px;line-height:1.14;font-weight:500;color:#342f37;letter-spacing:-.02em}
    .model-modal-card p{margin:16px 0 0;font-size:15px;line-height:1.68;color:#5e6871}
    .model-modal-close{position:absolute;top:18px;right:18px;width:38px;height:38px;border:0;border-radius:50%;background:#f2f4f5;color:#34383d;font-size:22px;line-height:1;display:grid;place-items:center;cursor:pointer;transition:.18s ease}
    .model-modal-close:hover{background:#e8ecee}
    body.model-modal-open{overflow:hidden}
    @keyframes modelModalIn{from{opacity:0;transform:translateY(8px) scale(.985)}to{opacity:1;transform:none}}
    @media(max-width:560px){.model-modal{padding:16px;align-items:flex-end}.model-modal-card{width:100%;max-height:78vh;border-radius:22px 22px 16px 16px;padding:28px 22px 24px}.model-modal-card h3{font-size:22px;padding-right:38px}.model-modal-card p{font-size:14px;line-height:1.62}.model-modal-close{top:14px;right:14px}}
  `;
  document.head.appendChild(style);

  const modal=document.createElement('div');
  modal.className='model-modal';
  modal.setAttribute('role','dialog');
  modal.setAttribute('aria-modal','true');
  modal.setAttribute('aria-hidden','true');
  modal.innerHTML='<div class="model-modal-card"><button class="model-modal-close" type="button" aria-label="Cerrar">×</button><span class="model-modal-kicker">Modelo Primero LEE</span><h3></h3><p></p></div>';
  document.body.appendChild(modal);

  const title=modal.querySelector('h3');
  const body=modal.querySelector('p');
  const closeBtn=modal.querySelector('.model-modal-close');
  let lastTrigger=null;

  function openModal(i,trigger){
    lastTrigger=trigger||null;
    title.textContent=content[i].title;
    body.textContent=content[i].text;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden','false');
    document.body.classList.add('model-modal-open');
    requestAnimationFrame(()=>closeBtn.focus());
  }
  function closeModal(){
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden','true');
    document.body.classList.remove('model-modal-open');
    if(lastTrigger)lastTrigger.focus();
  }

  closeBtn.addEventListener('click',closeModal);
  modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('is-open'))closeModal()});

  const items=[diagram.querySelector('.model-center'),...diagram.querySelectorAll('.model-node')];
  items.forEach((el,i)=>{
    if(!el)return;
    el.setAttribute('role','button');
    el.setAttribute('tabindex','0');
    el.setAttribute('aria-label','Ver información: '+content[i].title);
  });

  document.addEventListener('click',e=>{
    const trigger=e.target.closest('.model-center,.model-node');
    if(!trigger||!diagram.contains(trigger))return;
    e.preventDefault();
    e.stopImmediatePropagation();
    const i=items.indexOf(trigger);
    if(i>=0)openModal(i,trigger);
  },true);

  document.addEventListener('keydown',e=>{
    const trigger=e.target.closest&&e.target.closest('.model-center,.model-node');
    if(!trigger||!diagram.contains(trigger))return;
    if(e.key==='Enter'||e.key===' '){e.preventDefault();e.stopImmediatePropagation();const i=items.indexOf(trigger);if(i>=0)openModal(i,trigger)}
  },true);
})();