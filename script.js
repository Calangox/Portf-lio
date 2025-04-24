const menu = document.querySelector(".portfólio");
const project = document.querySelector(".projetos");
const contato = document.querySelector(".contato");

let projectIsVisible = true;
let menuIsVisible = false;
let contatoVisible = true;

// Chamando menu.
function btnmenu() {
    if (menuIsVisible) {

        // Adiciona a classe para a animação de saída
        menu.classList.remove("animation-menu-push"); 
        menu.classList.add("animation-menu-pull");
    } else {
        
        // Adiciona a classe para a animação de entrada
        menu.classList.remove("animation-menu-pull");
        menu.classList.add("animation-menu-push");
    }
    menuIsVisible = !menuIsVisible; 
}

// Chamando projetos.
function btnprojetos() {
    if (projectIsVisible) {

        // Adiciona a classe para a animação de saída
        project.classList.remove("animation-projetos-push"); 
        project.classList.add("animation-projetos-pull");
    } else {
        
        // Adiciona a classe para a animação de entrada
        project.classList.remove("animation-projetos-pull");
        project.classList.add("animation-projetos-push");
    }
    projectIsVisible = !projectIsVisible; 
}

function btncontato() {
    if (contatoVisible) {

        // Adiciona a classe para a animação de saída
        contato.classList.remove("animation-contato-push"); 
        contato.classList.add("animation-contato-pull");
    }
    else {
        
        // Adiciona a classe para a animação de entrada
        contato.classList.remove("animation-contato-pull");
        contato.classList.add("animation-contato-push");
    }
    contatoVisible = !contatoVisible;
}