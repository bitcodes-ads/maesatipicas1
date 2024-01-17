const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");

menu.addEventListener("click", () => nav.classList.toggle("active"));


let  count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImagem()
}, 3000)

function nextImagem(){
    count++;
    if(count>2){
        count = 1
    }

    document.getElementById("radio" + count).checked = true;

}

// Efeito de abrir e Feicha as fotos dos evetos
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
}

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});