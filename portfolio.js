document.querySelectorAll('nav a').forEach(anchor=>{
  
  anchor.addEventListener('click', event=>{
    event.preventDefault();
    
    document.querySelector(event.target.getAttribute('href')).scrollingView({
      behaviour:'smooth'
    });
  });
});