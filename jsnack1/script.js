let numeriDispari = [''];

for (let i = 1; i <= 6; i++){
   let numero = prompt("inserisci un numero");
   if (numero % 2 !== 0){
    numeriDispari.push(numero)
   }

   
}

alert(`i numeri aggiunti all'array sono: ${numeriDispari}` )


