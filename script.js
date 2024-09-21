const audio = document.getElementById("miMusica");

onload = () => {
    document.body.classList.remove("container");
  };


window.addEventListener('click', function() {
  const audio = document.getElementById("miMusica");
  audio.muted = false;
});
