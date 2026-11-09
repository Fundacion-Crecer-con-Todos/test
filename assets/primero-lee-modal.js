(function(){
  const onPage=location.pathname==='/primero-lee'||location.pathname==='/primero-lee/index.html';
  if(!onPage)return;
  const diagram=document.querySelector('.model-diagram');
  if(!diagram)return;

  document.querySelectorAll('.model-detail,.model-interactive-hint').forEach(el=>el.remove());

  const content=[
    {title:'Programa innovador y equilibrado',text:'Primero LEE se basa en un modelo pedagógico balanceado que desarrolla de manera sistemática los distintos ejes del lenguaje: lectura, escritura y comunicación oral. Para ello, cuenta con planificaciones estructuradas y una Guía del Estudiante que articulan el trabajo en torno a unidades temáticas y la lectura de cuentos, facilitando una implementación organizada y consistente en el aula.'},
    {title:'Sistema de evaluación y monitoreo',text:'Primero LEE cuenta con un sistema de evaluación permanente que permite monitorear el avance de los aprendizajes a lo largo del año. Los resultados se disponibilizan a través de una plataforma de resultados, reportería e informes, facilitando la identificación de brechas y la toma de decisiones pedagógicas basadas en evidencia, tanto a nivel de curso como de cada estudiante.'},
    {title:'Apoyo a niños y niñas con aprendizajes descendidos',text:'Primero LEE cuenta con programas de refuerzo focalizados para estudiantes que presentan mayores brechas de aprendizaje. A partir de los resultados de las evaluaciones, se identifican sus necesidades y se entregan recursos pedagógicos específicos a través de Primero LEE+, Refuerzo Lector y Plan de Aceleramiento, para fortalecer habilidades clave y favorecer el avance de cada estudiante.'},
    {title:'Acompañamiento',text:'Primero LEE cuenta con mentoras que acompañan a docentes y equipos directivos en cada escuela, a través de visitas presenciales y acompañamiento virtual. Estas instancias incluyen modelaje de estrategias, retroalimentación, reflexión pedagógica y análisis de dato, contribuyendo al desarrollo de capacidades y a la sostenibilidad de la mejora en el tiempo.'},
    {title:'Capacitaciones',text:'Primero LEE ofrece instancias de formación continua para docentes y equipos directivos, abordando contenidos y estrategias pedagógicas clave para la enseñanza de la lectura y la escritura. Estas capacitaciones buscan fortalecer sus conocimientos, potenciar la implementación del programa y su impacto en el aprendizaje de los estudiantes.'},
    {title:'Trabajo con familias',text:'Primero LEE promueve la participación de las familias en el proceso de aprendizaje de niños y niñas, entregando orientaciones y recursos que les permiten acompañar y reforzar la lectura y la escritura desde el hogar. De esta manera, se busca fortalecer el vínculo entre la escuela y las familias y favorecer el desarrollo de hábitos lectores.'}
  ];

  const isEnglish=new URLSearchParams(location.search).get('lang')==='en';
  const englishContent=[{"title":"Innovative and balanced program","text":"Primero LEE uses a balanced teaching model that systematically develops reading, writing and oral communication. Structured lesson plans and a Student Guide connect learning through thematic units and storytelling, helping teachers deliver consistent, well-organized instruction in the classroom."},{"title":"Assessment and monitoring system","text":"Primero LEE includes ongoing assessment throughout the year to monitor students’ learning progress. Results are available through a reporting platform with dashboards and reports, helping educators identify learning gaps and make evidence-based decisions for both classes and individual students."},{"title":"Support for students who are falling behind","text":"Primero LEE offers targeted reinforcement programs for students experiencing greater learning gaps. Assessment results help identify their needs, and tailored teaching resources are provided through Primero LEE+, Reading Reinforcement and the Acceleration Plan to strengthen key skills and help every student make progress."},{"title":"Ongoing coaching and support","text":"Primero LEE mentors support teachers and school leadership teams through in-person visits and online coaching. These sessions include instructional modeling, feedback, pedagogical reflection and data analysis, helping schools build capacity and sustain improvement over time."},{"title":"Training","text":"Primero LEE provides ongoing professional development for teachers and school leadership teams, covering key content and teaching strategies for reading and writing. Training strengthens their knowledge, improves program implementation and increases its impact on students’ learning."},{"title":"Working with families","text":"Primero LEE encourages families to take part in their children’s learning by providing guidance and resources to support reading and writing at home. This helps strengthen school–family relationships and develop lasting reading habits."}];
  const localizedContent=isEnglish?englishContent:content;

  const style=document.createElement('style');
  style.textContent=`
    .model-node{cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,filter .18s ease}
    .model-node::after{content:'+';position:absolute;right:10px;bottom:10px;width:28px;height:28px;border-radius:50%;display:grid;place-items:center;background:#fff;color:#5d48a3;border:2px solid rgba(93,72,163,.18);box-shadow:0 5px 14px rgba(42,34,74,.14);font-size:20px;font-weight:600;line-height:1;z-index:4;transition:transform .18s ease,background .18s ease,color .18s ease,border-color .18s ease}
    .model-node:focus-visible{outline:3px solid rgba(134,68,144,.34);outline-offset:4px}
    @media(hover:hover) and (pointer:fine){
      .model-node:hover{transform:translate(-50%,-50%) scale(1.045);box-shadow:0 14px 28px rgba(30,51,57,.18);filter:saturate(1.04)}
      .model-node:hover::after{transform:rotate(90deg) scale(1.06);background:#5d48a3;color:#fff;border-color:#5d48a3}
    }

    /* El centro es solo la identidad visual: no abre información duplicada. */
    .model-center{cursor:default!important}
    .model-center::after{content:none!important;display:none!important}
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
    @media(max-width:560px){
      .model-node::after{right:7px;bottom:7px;width:24px;height:24px;font-size:17px}
      .model-modal{padding:16px;align-items:flex-end}.model-modal-card{width:100%;max-height:78vh;border-radius:22px 22px 16px 16px;padding:28px 22px 24px}.model-modal-card h3{font-size:22px;padding-right:38px}.model-modal-card p{font-size:14px;line-height:1.62}.model-modal-close{top:14px;right:14px}
    }
  `;
  document.head.appendChild(style);

  const modal=document.createElement('div');
  modal.className='model-modal';
  modal.setAttribute('role','dialog');
  modal.setAttribute('aria-modal','true');
  modal.setAttribute('aria-hidden','true');
  modal.innerHTML='<div class="model-modal-card"><button class="model-modal-close" type="button" aria-label="Cerrar">×</button><span class="model-modal-kicker">Modelo Primero LEE</span><h3></h3><p></p></div>';
  document.body.appendChild(modal);
  if(isEnglish){modal.querySelector('.model-modal-kicker').textContent='Primero LEE Model';modal.querySelector('.model-modal-close').setAttribute('aria-label','Close');}

  const title=modal.querySelector('h3');
  const body=modal.querySelector('p');
  const closeBtn=modal.querySelector('.model-modal-close');
  let lastTrigger=null;

  function openModal(i,trigger){
    lastTrigger=trigger||null;
    title.textContent=localizedContent[i].title;
    body.textContent=localizedContent[i].text;
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

  const items=[...diagram.querySelectorAll('.model-node')];
  const center=diagram.querySelector('.model-center');
  if(center){center.removeAttribute('role');center.removeAttribute('tabindex');center.removeAttribute('aria-label');center.style.cursor='default';}
  items.forEach((el,i)=>{
    if(!el)return;
    el.setAttribute('role','button');
    el.setAttribute('tabindex','0');
    el.setAttribute('aria-label',(isEnglish?'View information: ':'Ver información: ')+localizedContent[i].title);
  });

  document.addEventListener('click',e=>{
    const trigger=e.target.closest('.model-node');
    if(!trigger||!diagram.contains(trigger))return;
    e.preventDefault();
    e.stopImmediatePropagation();
    const i=items.indexOf(trigger);
    if(i>=0)openModal(i,trigger);
  },true);

  document.addEventListener('keydown',e=>{
    const trigger=e.target.closest&&e.target.closest('.model-node');
    if(!trigger||!diagram.contains(trigger))return;
    if(e.key==='Enter'||e.key===' '){e.preventDefault();e.stopImmediatePropagation();const i=items.indexOf(trigger);if(i>=0)openModal(i,trigger)}
  },true);
})();