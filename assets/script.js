/* Меню на мобильном и демо‑отправка формы */
function toggleMenu(){
  const nav = document.querySelector('.nav');
  if(!nav) return; 
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}
function demoSubmit(e){
  e.preventDefault();
  const note = document.getElementById('form-note');
  if(note){
    note.textContent = 'Форма в демо‑режиме: сообщение не отправлено (сайт офлайн).';
  }
  e.target.reset();
  return false;
}