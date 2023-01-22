/*Comentarios acesos!!! - mudança das cores dos comentarios no settings.json*/
const linkVideo = document.getElementById('video').src

function fecharVideo() {
  const botao = document.querySelector('.fechar-modal')
  const modal = document.querySelector('.modal')
  const video = document.getElementById('video')
  botao.addEventListener('click', () => {
    video.setAttribute('src', '')
    modal.classList.remove('aberto')
    //modal.classList.toggle("aberto")
    //modal.className = 'modal'
  })
}
function abrirVideo() {
  const botao = document.querySelector('.botao-trailer')
  const video = document.getElementById('video')
  const modal = document.querySelector('.modal')
  botao.addEventListener('click', () => {
    video.setAttribute('src', linkVideo)
    modal.classList.add('aberto')
    // modal.className = 'modal aberto'
    //modal.classList.toggle("aberto")
  })
}

abrirVideo()
fecharVideo()
