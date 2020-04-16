var burger = document.getElementById('burger');
var nav = document.getElementById('nav');
burger.addEventListener("click", function(){
	nav.classList.toggle("hide");
})

document.querySelector(".burger").onclick = function (argument) {
	document.querySelector(".burger_line").classList.toggle("burger_line_active");
}
