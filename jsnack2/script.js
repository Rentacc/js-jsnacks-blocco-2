let firstNames = ["Marco", "Antonio" , "Michele" , "Vincenzo", "Alessandro","Renato","Stefano","Andrea","Nicola","Carmine","Omar"];
let lastNames = ["Rossi","Russo","Bianchi","Esposito","De Vincentis", "Carta","Ferro","Canalis","Bonolis","Pane","Tronco","Tricarico"];
let guestList = [];

for (let i = 0; i < 10; i++) {
  let randomFirstname = firstNames[Math.floor(Math.random() * firstNames.length)];
  let randomLastname = lastNames[Math.floor(Math.random() * lastNames.length)];
  guestList.push(randomFirstname + " " + randomLastname);
}

console.log(guestList);