function sum (firstNumber , secondNumber){
    return firstNumber + secondNumber;   
}

function multi (firstNumber , secondNumber){
    return firstNumber * secondNumber;   
}

const person = {
    name: "Charles",
    age: 28,
    talk: function(){
        console.log(this.name);
    }
};

//person.talk();

function myFunction(){
    //console.log(this)
    console.log("Agora sou o global")
}

myFunction()



 //module.exports = {sum, multi, person};

this.persona = person;
this.soma = sum;
this.multi = multi;