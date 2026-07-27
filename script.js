// Minimal interactive behavior for portfolio
document.addEventListener('DOMContentLoaded', function(){
  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
  document.querySelectorAll('.lang-switcher button').forEach(function(btn){
    btn.addEventListener('click', function(){
      document.body.setAttribute('data-lang', btn.dataset.lang);
      document.querySelectorAll('.lang-switcher button').forEach(function(b){b.classList.remove('active')});
      btn.classList.add('active');
    });
  });
  var cvs = document.querySelectorAll('#cv-download, #cv-download-2');
  cvs.forEach(function(b){ b.addEventListener('click', function(e){ e.preventDefault(); window.open('https://github.com/invernizziluca/invernizziluca.github.io/raw/main/CV.pdf','_blank'); }); });
});
