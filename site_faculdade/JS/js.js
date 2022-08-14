//acesso ao botão
const btnMenu= document.getElementById ("btn-menu");

//função a ser chamada no clique
function abriMenu(){
    const menu= document.getElementById ("menu01");
    menu.classList.toggle('active')
}

//ao clicar chamar a função abrimenu
btnMenu.addEventListener('click', abriMenu);
// btnMenu.addEventListener('touch', abriMenu);
