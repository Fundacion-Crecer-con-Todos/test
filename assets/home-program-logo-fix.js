if(location.pathname==='/'||location.pathname==='/index.html'){
  const programItems=[...document.querySelectorAll('#programas .acc-item')].slice(0,2);

  const cleanupStyle=document.createElement('style');
  cleanupStyle.textContent=`
    .fcct-utility{display:none!important}
    .access-card{transition:background .18s ease,border-color .18s ease!important}
    .access-card:hover{transform:none!important;background:rgba(255,255,255,.16)!important;border-color:rgba(255,255,255,.42)!important}

    #programas .program-copy .acc-item:first-child .acc-btn>span:first-child:after{display:none!important;content:none!important}
    #programas .acc-btn .program-title-with-logo{display:inline-flex!important;align-items:center!important;gap:16px!important;min-width:0!important}
    #programas .acc-btn .program-brand{display:inline-flex!important;align-items:center!important;justify-content:flex-start!important;margin:0!important;padding:0!important;min-height:0!important;height:auto!important;width:auto!important;overflow:visible!important;background:transparent!important;border:0!important;box-shadow:none!important;flex:0 0 auto!important}
    #programas .acc-btn .program-brand img{display:block!important;width:auto!important;height:38px!important;max-width:110px!important;max-height:38px!important;margin:0!important;padding:0!important;transform:none!important;object-fit:contain!important;object-position:left center!important;background:transparent!important;border:0!important;border-radius:0!important;box-shadow:none!important;mix-blend-mode:multiply!important}
    #programas .acc-btn .program-brand--viaje img{height:42px!important;max-height:42px!important;max-width:105px!important}

    #impacto .impact-grid{display:grid!important;grid-template-columns:minmax(0,1.08fr) minmax(360px,.92fr)!important;grid-template-areas:'photo cards'!important;gap:20px!important;align-items:stretch!important;margin-top:42px!important;border:0!important}
    #impacto .impact-photo{grid-area:photo!important;display:flex!important;align-items:center!important;justify-content:center!important;min-height:500px!important;border-radius:22px!important;overflow:hidden!important;background:#fff!important;box-shadow:0 12px 34px rgba(36,42,48,.06)!important}
    #impacto .impact-photo img{display:block!important;width:100%!important;height:100%!important;max-height:500px!important;object-fit:cover!important;object-position:center 48%!important;transform:scale(1.12)!important;transform-origin:center center!important;background:#fff!important}
    #impacto .impact-cards{grid-area:cards!important;display:grid!important;grid-template-columns:1fr!important;grid-template-rows:repeat(3,minmax(0,1fr))!important;gap:12px!important;align-content:stretch!important;border:0!important;min-width:0!important}
    #impacto .impact-cards>.impact-card:nth-child(n){min-height:0!important;padding:22px 24px!important;border:0!important;border-radius:18px!important;display:flex!important;flex-direction:column!important;justify-content:center!important;box-shadow:none!important}
    #impacto .impact-cards>.impact-card:nth-of-type(1){background:#e8f8fb!important}
    #impacto .impact-cards>.impact-card:nth-of-type(2){background:#f4edf6!important}
    #impacto .impact-cards>.impact-card:nth-of-type(3){background:#fff1df!important}
    #impacto .impact-cards>.impact-card strong{font-size:clamp(27px,2.3vw,36px)!important;line-height:1.05!important;margin:0 0 8px!important;color:var(--fcct-p)!important}
    #impacto .impact-cards>.impact-card h3{font-size:15px!important;line-height:1.3!important;margin:0 0 7px!important}
    #impacto .impact-cards>.impact-card p{font-size:12.5px!important;line-height:1.5!important;margin:0!important}

    .home-alliances{padding:88px 0;background:#f4edf6}
    .home-alliances .home-alliances-head{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:36px;align-items:end;margin-bottom:34px}
    .home-alliances .tag{margin-bottom:14px}
    .home-alliances h2{margin:0;max-width:760px;font-size:clamp(34px,4vw,52px);line-height:1.05;letter-spacing:-.04em;font-weight:400;color:var(--fcct-ink)}
    .home-alliances p{margin:18px 0 0;max-width:720px;font-size:15px;line-height:1.7;color:#657078}
    .home-alliances-meta{display:flex;flex-direction:column;align-items:flex-end;gap:12px;padding-bottom:4px}
    .home-alliances-count{font-size:14px;font-weight:600;color:var(--fcct-p);white-space:nowrap}
    .home-alliances .cta{white-space:nowrap}
    .home-alliances-logos{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:10px}
    .home-alliances-logo{height:112px;background:#fff;border:1px solid rgba(34,36,40,.07);border-radius:16px;display:flex;align-items:center;justify-content:center;padding:18px;box-sizing:border-box;box-shadow:0 8px 20px rgba(24,40,50,.035)}
    .home-alliances-logo img{display:block;max-width:100%;max-height:62px;width:auto;height:auto;object-fit:contain}

    @media(max-width:900px){
      #impacto .impact-grid{grid-template-columns:1fr!important;grid-template-areas:'photo' 'cards'!important}
      #impacto .impact-photo{min-height:0!important}
      #impacto .impact-photo img{height:auto!important;max-height:none!important;object-fit:cover!important;transform:scale(1.08)!important}
      #impacto .impact-cards{grid-template-columns:repeat(3,minmax(0,1fr))!important;grid-template-rows:none!important}
      #impacto .impact-cards>.impact-card:nth-child(n){min-height:210px!important}
      .home-alliances{padding:70px 0}
      .home-alliances .home-alliances-head{grid-template-columns:1fr;gap:22px}
      .home-alliances-meta{align-items:flex-start}
      .home-alliances-logos{grid-template-columns:repeat(4,minmax(0,1fr))}
    }
    @media(max-width:700px){
      #programas .acc-btn .program-title-with-logo{gap:10px!important}
      #programas .acc-btn .program-brand img{height:31px!important;max-height:31px!important;max-width:86px!important}
      #programas .acc-btn .program-brand--viaje img{height:34px!important;max-height:34px!important;max-width:82px!important}
      #impacto .impact-cards{grid-template-columns:1fr!important}
      #impacto .impact-cards>.impact-card:nth-child(n){min-height:0!important}
      .home-alliances-logos{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
      .home-alliances-logo{height:100px;padding:16px}
      .home-alliances-logo img{max-height:54px}
    }
  `;
  document.head.appendChild(cleanupStyle);

  programItems.forEach(item=>{
    const btn=item.querySelector('.acc-btn');
    const title=btn&&btn.querySelector(':scope > span:first-child');
    const brand=item.querySelector('.program-brand');
    if(!btn||!title||!brand)return;
    if(!title.classList.contains('program-title-with-logo')) title.classList.add('program-title-with-logo');
    if(brand.parentElement!==title) title.appendChild(brand);
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
    if(!impactPhoto.querySelector('img')) impactPhoto.innerHTML='<img src="/assets/impacto-principal.jpg" alt="Niños y niñas participantes de Primero LEE">';
    const impactCards=impactGrid.querySelector('.impact-cards');
    impactGrid.insertBefore(impactPhoto, impactGrid.firstChild);
    if(impactCards) impactGrid.appendChild(impactCards);
  }

  if(!document.querySelector('.home-alliances')){
    const faq=document.querySelector('#faq');
    if(faq){
      const section=document.createElement('section');
      section.className='home-alliances';
      section.innerHTML=`
        <div class="container">
          <div class="home-alliances-head">
            <div>
              <span class="tag">Alianzas</span>
              <h2>Crecemos junto a quienes comparten nuestra misión.</h2>
              <p>Trabajamos con servicios locales de educación pública, fundaciones, empresas, sostenedores y redes que hacen posible llevar nuestros programas a más comunidades educativas.</p>
            </div>
            <div class="home-alliances-meta">
              <span class="home-alliances-count">40+ organizaciones aliadas</span>
              <a class="cta" href="/alianzas">Conoce nuestras alianzas <b>→</b></a>
            </div>
          </div>
          <div class="home-alliances-logos" aria-label="Servicios Locales de Educación Pública aliados">
            <div class="home-alliances-logo"><img src="/assets/Sta Corina.png" alt="SLEP Santa Corina"></div>
            <div class="home-alliances-logo"><img src="/assets/los libertadores.png" alt="SLEP Los Libertadores"></div>
            <div class="home-alliances-logo"><img src="/assets/Puelche.png" alt="SLEP Puelche"></div>
            <div class="home-alliances-logo"><img src="/assets/Chinchorro.png" alt="SLEP Chinchorro"></div>
            <div class="home-alliances-logo"><img src="/assets/Puerto Cordillera.png" alt="SLEP Puerto Cordillera"></div>
            <div class="home-alliances-logo"><img src="/assets/del pino.png" alt="SLEP Del Pino"></div>
            <div class="home-alliances-logo"><img src="/assets/Magallanes.png" alt="SLEP Magallanes"></div>
          </div>
        </div>`;
      faq.parentNode.insertBefore(section,faq);
    }
  }
  // Localize home sections built after the main translation script has run.
  if(new URLSearchParams(location.search).get('lang')==='en'){
    const translated={
      'Alianzas':'Partnerships',
      'Crecemos junto a quienes comparten nuestra misión.':'We grow alongside those who share our mission.',
      'Trabajamos con servicios locales de educación pública, fundaciones, empresas, sostenedores y redes que hacen posible llevar nuestros programas a más comunidades educativas.':'We work with local public education services, foundations, companies, school administrators and networks that help bring our programs to more educational communities.',
      '40+ organizaciones aliadas':'40+ partner organizations',
      'Conoce nuestras alianzas':'Explore our partnerships',
      'Conoce nuestras alianzas →':'Explore our partnerships →',
      'Servicios Locales de Educación Pública aliados':'Partner Local Public Education Services',
      'Niños y niñas participantes de Primero LEE':'Children participating in Primero LEE'
    };
    document.querySelectorAll('.home-alliances,.impact-photo').forEach(root=>{
      const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
      while(walker.nextNode()){const node=walker.currentNode;const key=node.nodeValue.trim();if(translated[key])node.nodeValue=node.nodeValue.replace(key,translated[key]);}
      root.querySelectorAll('[aria-label],[alt]').forEach(el=>{for(const k of ['aria-label','alt']){const val=el.getAttribute(k);if(translated[val])el.setAttribute(k,translated[val]);}});
      root.querySelectorAll('a[href^="/"]').forEach(a=>{const u=new URL(a.getAttribute('href'),location.origin);u.searchParams.set('lang','en');a.setAttribute('href',u.pathname+u.search+u.hash)});
    });
  }

}
