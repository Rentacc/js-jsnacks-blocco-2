let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

debugger

for (let i = 0; i < arr.length; i++) {
  if (i % 2 !== 0) {
    sum += arr[i];
  }
}

console.log("La somma degli elementi in posizione dispari è: " + sum);