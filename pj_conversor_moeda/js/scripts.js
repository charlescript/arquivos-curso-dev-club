
const button = document.getElementById('convert-button');

const dolar = 5.2;


const convertValues = () => {
    const inputReal = document.getElementById('input-real').value;

    console.log((inputReal / dolar).toFixed(2));
}

button.addEventListener('click', convertValues);
