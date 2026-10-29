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
    #impacto .impact-grid{
      display:grid!important;
      grid-template-columns:minmax(0,1.08fr) minmax(360px,.92fr)!important;
      gap:18px!important;
      align-items:stretch!important;
      margin-top:42px!important;
    }
    #impacto .impact-photo{
      display:block!important;
      min-height:610px!important;
      border-radius:22px!important;
      background:url('impacto-principal.jpg') center center/cover no-repeat!important;
      overflow:hidden!important;
    }
    #impacto .impact-cards{
      display:grid!important;
      grid-template-columns:1fr!important;
      gap:12px!important;
      align-content:stretch!important;
    }
    #impacto .impact-cards>.impact-card:nth-child(n){
      min-height:0!important;
      padding:24px 26px!important;
      border-radius:18px!important;
      justify-content:center!important;
    }
    #impacto .impact-cards>.impact-card strong{
      font-size:clamp(28px,2.6vw,38px)!important;
      margin-bottom:10px!important;
    }
    @media(max-width:900px){
      #impacto .impact-grid{grid-template-columns:1fr!important}
      #impacto .impact-photo{min-height:420px!important}
      #impacto .impact-cards{grid-template-columns:repeat(3,minmax(0,1fr))!important}
      #impacto .impact-cards>.impact-card:nth-child(n){min-height:220px!important}
    }
    @media(max-width:700px){
      #programas .acc-btn .program-title-with-logo{gap:10px!important}
      #programas .acc-btn .program-brand img{height:31px!important;max-height:31px!important;max-width:86px!important}
      #programas .acc-btn .program-brand--viaje img{height:34px!important;max-height:34px!important;max-width:82px!important}
      #impacto .impact-photo{min-height:300px!important}
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
  if(impactGrid&&!impactGrid.querySelector('.impact-photo')){
    const impactPhoto=document.createElement('div');
    impactPhoto.className='impact-photo';
    impactPhoto.setAttribute('role','img');
    impactPhoto.setAttribute('aria-label','Niños y niñas participantes de Primero LEE');
    impactGrid.prepend(impactPhoto);
  }
}
