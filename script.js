function removeTransition(e) {
  if (e.propertyName != "transform") return;

  this.classList.remove("playing");
}

window.addEventListener("keydown", function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div.key[data-key="${e.keyCode}"]`);
  console.log(key);
  key.classList.add("playing");

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
});

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
