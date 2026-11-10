(function(){
  var c=document.getElementById('clock');
  function tick(){try{c.textContent=new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata',hour:'2-digit',minute:'2-digit'})+' IST'}catch(e){}}
  tick();setInterval(tick,30000);
  var m=document.querySelector('.menu'),l=document.querySelector('.links');
  m.addEventListener('click',function(){l.classList.toggle('open')});
  l.addEventListener('click',function(){l.classList.remove('open')});
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
})();
