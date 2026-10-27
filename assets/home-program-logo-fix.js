if(location.pathname==='/'||location.pathname==='/index.html'){
  const programItems=[...document.querySelectorAll('#programas .acc-item')];
  const firstProgram=programItems[0];
  const secondProgram=programItems[1];
  const brand=firstProgram&&firstProgram.querySelector('.program-brand--primero');
  const viajeImg=secondProgram&&secondProgram.querySelector('.program-brand--viaje img');
  if(brand){
    brand.style.cssText='display:flex!important;align-items:center!important;justify-content:flex-start!important;width:184px!important;height:68px!important;min-height:68px!important;margin:0 0 10px 0!important;padding:0!important;overflow:visible!important;background:none!important;border:0!important;box-shadow:none!important;';
    let img=brand.querySelector('img');
    if(!img){
      img=document.createElement('img');
      brand.appendChild(img);
    }
    img.src='/assets/primero-lee-logo.png';
    img.alt='Primero LEE';
    img.style.cssText='display:block!important;width:184px!important;max-width:184px!important;height:68px!important;max-height:68px!important;margin:0!important;padding:0!important;transform:none!important;object-fit:contain!important;object-position:left center!important;mix-blend-mode:multiply!important;background:transparent!important;';
  }
  if(viajeImg){
    viajeImg.style.width='184px';
    viajeImg.style.maxWidth='184px';
    viajeImg.style.height='68px';
    viajeImg.style.maxHeight='68px';
    viajeImg.style.objectFit='contain';
    viajeImg.style.objectPosition='left center';
  }
}
