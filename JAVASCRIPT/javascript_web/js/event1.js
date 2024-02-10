// const element = document.querySelector('button');

const element = document.querySelector('input');


// const myFunction = () => {
//     alert("Clicou no botão");
// }

// element.onclick = () => {
//     alert('Fui pressionado');
// }

element.onkeypress = () => {
    console.log('pressionei uma tecla');
}