// Declaro una variable a utilizar más adelante.
var text;
console.log(text);

//Creo una función anónima y la asigno a la variable writeNum
//Ésta funcion toma como parámetro un número para imprimir en el texto.
var writeNum = (num) =>{
    //Empiezo la función guardando el valor que tenga el texto en la variable.
    text = document.getElementById("text").value;
    //Creo una nueva variable de texto que va a ser igual al texto actual más el numero que presioné.
    let newText = "" + text + num;
    console.log(newText);
    //Al elemento de ID "text" le cambio su valor al nuevo.
    document.getElementById('text').value=newText ; 
}