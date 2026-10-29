if(location.pathname==='/'||location.pathname==='/index.html'){
  const programItems=[...document.querySelectorAll('#programas .acc-item')].slice(0,2);

  const cleanupStyle=document.createElement('style');
  cleanupStyle.textContent=`
    #programas .program-copy .acc-item:first-child .acc-btn>span:first-child:after{
      display:none!important;
      content:none!important;
    }
    #programas .acc-btn .program-title-with-logo{
      display:inline-flex!important;
      align-items:center!important;
      gap:16px!important;
      min-width:0!important;
    }
    #programas .acc-btn .program-brand{
      display:inline-flex!important;
      align-items:center!important;
      justify-content:flex-start!important;
      margin:0!important;
      padding:0!important;
      min-height:0!important;
      height:auto!important;
      width:auto!important;
      overflow:visible!important;
      background:transparent!important;
      border:0!important;
      box-shadow:none!important;
      flex:0 0 auto!important;
    }
    #programas .acc-btn .program-brand img{
      display:block!important;
      width:auto!important;
      height:38px!important;
      max-width:110px!important;
      max-height:38px!important;
      margin:0!important;
      padding:0!important;
      transform:none!important;
      object-fit:contain!important;
      object-position:left center!important;
      background:transparent!important;
      border:0!important;
      border-radius:0!important;
      box-shadow:none!important;
      mix-blend-mode:multiply!important;
    }
    #programas .acc-btn .program-brand--viaje img{
      height:42px!important;
      max-height:42px!important;
      max-width:105px!important;
    }

    /* Impacto: foto a la izquierda + 3 cards apiladas a la derecha */
    #impacto .impact-grid{
      display:grid!important;
      grid-template-columns:minmax(0,1.08fr) minmax(360px,.92fr)!important;
      grid-template-areas:'photo cards'!important;
      gap:20px!important;
      align-items:stretch!important;
      margin-top:42px!important;
      border:0!important;
    }
    #impacto .impact-photo{
      grid-area:photo!important;
      display:flex!important;
      align-items:center!important;
      justify-content:center!important;
      min-height:500px!important;
      border-radius:22px!important;
      overflow:hidden!important;
      background:#fff!important;
      box-shadow:0 12px 34px rgba(36,42,48,.06)!important;
    }
    #impacto .impact-photo img{
      display:block!important;
      width:100%!important;
      height:100%!important;
      max-height:500px!important;
      object-fit:cover!important;
      object-position:center center!important;
      background:#fff!important;
    }
    #impacto .impact-cards{
      grid-area:cards!important;
      display:grid!important;
      grid-template-columns:1fr!important;
      grid-template-rows:repeat(3,minmax(0,1fr))!important;
      gap:12px!important;
      align-content:stretch!important;
      border:0!important;
      min-width:0!important;
    }
    #impacto .impact-cards>.impact-card:nth-child(n){
      min-height:0!important;
      padding:22px 24px!important;
      border:0!important;
      border-radius:18px!important;
      display:flex!important;
      flex-direction:column!important;
      justify-content:center!important;
      box-shadow:none!important;
    }
    #impacto .impact-cards>.impact-card:nth-of-type(1){background:#e8f8fb!important}
    #impacto .impact-cards>.impact-card:nth-of-type(2){background:#f4edf6!important}
    #impacto .impact-cards>.impact-card:nth-of-type(3){background:#fff1df!important}
    #impacto .impact-cards>.impact-card strong{
      font-size:clamp(27px,2.3vw,36px)!important;
      line-height:1.05!important;
      margin:0 0 8px!important;
      color:var(--fcct-p)!important;
    }
    #impacto .impact-cards>.impact-card h3{
      font-size:15px!important;
      line-height:1.3!important;
      margin:0 0 7px!important;
    }
    #impacto .impact-cards>.impact-card p{
      font-size:12.5px!important;
      line-height:1.5!important;
      margin:0!important;
    }
    @media(max-width:900px){
      #impacto .impact-grid{
        grid-template-columns:1fr!important;
        grid-template-areas:'photo' 'cards'!important;
      }
      #impacto .impact-photo{min-height:0!important}
      #impacto .impact-photo img{height:auto!important;max-height:none!important;object-fit:contain!important}
      #impacto .impact-cards{grid-template-columns:repeat(3,minmax(0,1fr))!important;grid-template-rows:none!important}
      #impacto .impact-cards>.impact-card:nth-child(n){min-height:210px!important}
    }
    @media(max-width:700px){
      #programas .acc-btn .program-title-with-logo{gap:10px!important}
      #programas .acc-btn .program-brand img{height:31px!important;max-height:31px!important;max-width:86px!important}
      #programas .acc-btn .program-brand--viaje img{height:34px!important;max-height:34px!important;max-width:82px!important}
      #impacto .impact-cards{grid-template-columns:1fr!important}
      #impacto .impact-cards>.impact-card:nth-child(n){min-height:0!important}
    }
  `;
  document.head.appendChild(cleanupStyle);

  programItems.forEach(item=>{
    const btn=item.querySelector('.acc-btn');
    const title=btn&&btn.querySelector(':scope > span:first-child');
    const brand=item.querySelector('.program-brand');
    if(!btn||!title||!brand)return;

    if(!title.classList.contains('program-title-with-logo')){
      title.classList.add('program-title-with-logo');
    }

    if(brand.parentElement!==title){
      title.appendChild(brand);
    }
  });

  const impactGrid=document.querySelector('#impacto .impact-grid');
  if(impactGrid){
    let impactPhoto=impactGrid.querySelector('.impact-photo');
    if(!impactPhoto){
      impactPhoto=document.createElement('div');
      impactPhoto.className='impact-photo';
      impactPhoto.setAttribute('role','img');
      impactPhoto.setAttribute('aria-label','Niños y niñas participantes de Primero LEE');
    }
    if(!impactPhoto.querySelector('img')){
      impactPhoto.innerHTML='<img src="/assets/impacto-principal.jpg" alt="Niños y niñas participantes de Primero LEE">';
    }
    const impactCards=impactGrid.querySelector('.impact-cards');
    impactGrid.insertBefore(impactPhoto, impactGrid.firstChild);
    if(impactCards) impactGrid.appendChild(impactCards);
  }
}
