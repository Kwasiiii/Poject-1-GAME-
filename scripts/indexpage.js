function init(){
  const audioBtn = document.querySelector('i')
  
  const audio = new Audio('audio/themeaudio.mp3')
  function themeSong(event){
    if (audio.paused){
      event.target.classList.remove('fa-pause')
      event.target.classList.add('fa-play')
      audio.play()
    } else {
      event.target.classList.remove('fa-play')
      event.target.classList.add('fa-pause')
      audio.pause()
    } 
  }
  audioBtn.addEventListener('click', themeSong)
}
window.addEventListener('DOMContentLoaded', init)