var peso = prompt("Digite seu peso em kg:");

var altura = prompt("Digite sua altura em m:");

var imc = peso/(altura**2)

if ( 18.5 > imc )

{
        console.log("Você está abaixo do peso")
}

else if (imc > 24.9 )
{
        console.log("Você está acima do peso")
} 

else {
        console.log("Você está no peso ideal")
}
    console.log(imc)