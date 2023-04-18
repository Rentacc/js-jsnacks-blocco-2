let firstNames = ["Marco", "Antonio" , "Michele" , "Vincenzo", "Alessandro","Renato","Stefano","Andrea","Nicola","Carmine","Omar"];
let lastNames = ["Rossi","Russo","Bianchi","Esposito","De Vincentis", "Carta","Ferro","Canalis","Bonolis","Pane","Tronco","Tricarico"];

function generateRandomName() {
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    console.log(`${randomFirstName}` + " " + `${randomLastName}`)
    }

    const guestList = [];
    for (let i = 0; i < 10; i++) {
    guestList.push(generateRandomName());
    console.log(guestList[`${generateRandomName}`]);
    }


   