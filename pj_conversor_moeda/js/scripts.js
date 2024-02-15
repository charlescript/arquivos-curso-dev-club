
const button = document.getElementById('convert-button');

const dolar = 5.2;


const convertValues = () => {
    // Pegando o volor do real no campo input
    const inputReal = document.getElementById('input-real').value;
    const realValueText = document.getElementById("real-value-text");

    // Pegando o valor do dolar e setando na apresentação
    const dolarValueText = document.getElementById("dolar-value-text");
    
    // setando valor do real na apresentação
    realValueText.innerHTML = `R$ ${inputReal}`;

    realValueText.innerHTML = new Intl.NumberFormat('pt-br',{
        style: 'currency',
        currency: 'BRL'
    }).format(inputReal);
    
    // cnvertendo real em dolar
    // const resultConversao = (inputReal / dolar).toFixed(2);
    // dolarValueText.innerHTML = `US$ ${resultConversao}`;

    dolarValueText.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency', 
        currency: 'USD'
    }).format(inputReal / dolar);

    
}

button.addEventListener('click', convertValues);
