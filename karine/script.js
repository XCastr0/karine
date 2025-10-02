(function(){
  const dialog = document.getElementById('choiceDialog');
  const content = document.getElementById('dialogContent');
  const closeBtn = dialog.querySelector('.dialog-close');

  function openDialog(html){
    content.innerHTML = html;
    if(!dialog.open) dialog.showModal();
  }
  function closeDialog(){
    if(dialog.open) dialog.close();
  }

  closeBtn.addEventListener('click', closeDialog);
  dialog.addEventListener('click', (e) => {
    if(e.target === dialog) closeDialog();
  });

  function handleChoose(el){
    const isCinema = el.dataset.type === 'cinema';
    if(isCinema){
      openDialog(`
        <div class="dialog-content">
          <p id="dialogTitle">Boa escolha! Agora escolha seu filme 🎬</p>
          <a class="go-btn" target="_blank" rel="noopener noreferrer"
             href="https://www.ingresso.com/filmes/em-cartaz?city=salvador">
            Ir para os filmes
          </a>
        </div>
      `);
    } else {
      openDialog(`
        <div class="dialog-content">
          <p id="dialogTitle">Perfeita escolha! Já quero esse date com você 💖</p>
        </div>
      `);
    }
  }

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => handleChoose(card));
    card.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        handleChoose(card);
      }
    });
  });
})();
