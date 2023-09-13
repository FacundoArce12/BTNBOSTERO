botonDark = document.querySelector("#botonDark")
audio_fondo = document.querySelector("#BocaSong")
botonMusica = document.querySelector("#botonMusica")
Titulo=  document.querySelector("#Título")


botonMusica.addEventListener("click", () => {
    if (audio_fondo.paused){
        audio_fondo.load()
        audio_fondo.play()
    }else{
        audio_fondo.pause()
    }
   
    document.body.classList.toggle("bg-dark")
    botonMusica.classList.toggle("btn-light")
    Titulo.classList.toggle("text-dark")
})