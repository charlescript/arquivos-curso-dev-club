

function tabuada( number ){

    let num = number;

    if(num >= 1 && num <= 10){

        for(let cont = 1; cont <= 10; cont++){
          console.log(`${num} X ${cont} = ${num * cont}`);
        }
    } else {
        console.log("Valor inserido dever ser de 1 a 10 !");
    }

}

tabuada(10);