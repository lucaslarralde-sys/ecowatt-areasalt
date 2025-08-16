// Lightbox for gallery images
const lb = document.getElementById('lightbox');
const lbImg = lb?.querySelector('.lightbox-img');
const lbClose = lb?.querySelector('.lightbox-close');

document.querySelectorAll('.gallery img').forEach(img=>{
  img.addEventListener('click', ()=>{
    if(!lb || !lbImg) return;
    lbImg.src = img.getAttribute('data-full') || img.src;
    lb.removeAttribute('hidden');
  });
});

lbClose?.addEventListener('click', ()=> lb?.setAttribute('hidden',''));

lb?.addEventListener('click', (e)=>{
  if(e.target === lb) lb.setAttribute('hidden','');
});
