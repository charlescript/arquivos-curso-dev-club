
const button = document.getElementById('convert-button');

const dolar = 5.2;


const convertValues = () => {
    // Pegando o volor do real no campo input
    const inputReal = document.getElementById('input-real').value;
    const realValueText = document.getElementById("real-value-text");
    
    // setando valor do real na apresentação
    realValueText.innerHTML = `R$ ${inputReal}`;

    // cnvertendo real em dolar
    const resultConversao = (inputReal / dolar).toFixed(2);
    console.log(resultConversao);


    // Pegando o valor do dolar e setando na apresentação
    const dolarValueText = document.getElementById("dolar-value-text");
    dolarValueText.innerHTML = `US$ ${resultConversao}`; 

    
}

button.addEventListener('click', convertValues);
