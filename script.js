// small helper scripts for nav toggle and simple form handling
document.addEventListener('DOMContentLoaded', function(){
  // year in footer
  const yearEls = document.querySelectorAll('#year,#year2,#year3,#year4,#year5,#year6');
  yearEls.forEach(el => { if(el) el.textContent = new Date().getFullYear(); });

  // nav toggle
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('nav-toggle');
  if(toggle){
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  // simple contact form validation
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const msg = document.getElementById('message');
      if(!name.value.trim() || !email.value.trim() || !msg.value.trim()){
        e.preventDefault();
        alert('Please fill in all fields before sending.');
        return false;
      }
      // form uses mailto fallback; let the browser handle it
    });
  }
});
