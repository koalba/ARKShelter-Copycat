document.querySelectorAll(".video__play").forEach(element => element.addEventListener("click", playVideo, false));


function playVideo(e){
    e.preventDefault();
    this.setAttribute("style", "display:none");
    this.previousElementSibling.play();
    this.previousElementSibling.setAttribute("controls", "controls");
}