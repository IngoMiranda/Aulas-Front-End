//acesso ao botão
const btnMenu= document.getElementById ("btn-menu");

//função a ser chamada no clique
function abriMenu(event){
    if (event.type === 'touchstart') event.preventDefault ()
    const menu= document.getElementById ("menu01");
    menu.classList.toggle('active')
}

//ao clicar chamar a função abrimenu
btnMenu.addEventListener('click', abriMenu);
btnMenu.addEventListener('touchstart', abriMenu);
// btnMenu.addEventListener('touch', abriMenu);

//slider
var intervalo= 0;

var maxSlider= document.querySelectorAll(".banner").length -1;

acao();

function acao(){
    let img = document.querySelectorAll(".banner")

    setInterval(function(){

        img[intervalo].style.display= "none";
        intervalo++;

        if(intervalo > maxSlider){

            intervalo = 0;
        }

        img[intervalo].style.display= "block";

    },5000)
}