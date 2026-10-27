if(location.pathname==='/'||location.pathname==='/index.html'){
  const firstProgram=document.querySelector('#programas .acc-item');
  const brand=firstProgram&&firstProgram.querySelector('.program-brand--primero');
  if(brand){
    brand.style.cssText='display:flex!important;align-items:center!important;justify-content:flex-start!important;width:auto!important;height:auto!important;min-height:0!important;margin:0 0 10px 0!important;padding:0!important;overflow:visible!important;background:none!important;border:0!important;box-shadow:none!important;';
    let img=brand.querySelector('img');
    if(!img){
      img=document.createElement('img');
      brand.appendChild(img);
    }
    img.src='/assets/primero-lee-logo.png';
    img.alt='Primero LEE';
    img.style.cssText='display:block!important;width:150px!important;max-width:150px!important;height:auto!important;max-height:none!important;margin:0!important;padding:0!important;transform:none!important;object-fit:contain!important;object-position:left center!important;mix-blend-mode:multiply!important;background:transparent!important;';
  }
}
