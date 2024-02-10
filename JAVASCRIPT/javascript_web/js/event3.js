const input = document.querySelector('input');
const select = document.querySelector('select');
const button = document.querySelector('button');


const clickButton = () => {
    alert('O botão foi clicado');
}

input.addEventListener('focus', () => {
    console.log('Deu focus no input');
})


select.addEventListener('change', () => {
    console.log(select.value);
})

button.addEventListener('click', clickButton)