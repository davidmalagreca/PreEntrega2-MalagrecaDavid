//FUCTION
function saludar(saludar) {
    console.log(saludar);
}

saludar("Bienvenidos a nuestra comunidad. Explora y elige tu estilo.");
saludar("¡Eliga entre los articulos deseados para fijar precios!");

//-----------------------------------------------------------------------------------

//VARIABLES & CONSTANTES-------------------------------------------------------------


const remera = 23500;
const buzo = 45000;
const pantalon = 75000;
const cardigan = 55000;

let total = 0;
let indumentaria;

while (true) {
    indumentaria = prompt("¿Qué indumentaria quieres comprar? (remera, buzo, pantalon, cardigan o escribe 'terminar' para finalizar)");

    if (indumentaria.toLowerCase() === "terminar") {
        break;
    }

    let precio;

    switch (indumentaria.toLowerCase()) {
        case "remera":
            precio = remera;
            break;
        case "buzo":
            precio = buzo;
            break;
        case "pantalon":
            precio = pantalon;
            break;
        case "cardigan":
            precio = cardigan;
            break;
        default:
            console.log("No has elegido una indumentaria válida. Por favor, elige entre remera, buzo, pantalon o cardigan.");
            continue;
    }

    total += precio;
    console.log(`Agregaste ${indumentaria} que cuesta ${precio.toLocaleString('es-ES')} pesos.`);
}

console.log(`El total de tu compra es: ${total.toLocaleString('es-ES')} pesos.`);

//Agrego Evento con click para consola.////////////////////////////////////////////////////
const añadirCarrito = document.getElementById("añadirCarrito");
const descontarCarrito = document.getElementById("descontarCarrito");
let totalRemera = 0;

añadirCarrito.addEventListener('click', function () {
    totalRemera++; 
    console.log(`Añadiste al carrito una remera $23.500. Total en el carrito: ${totalRemera}`);
    alert("Agregaste una remera al carrito");
});

descontarCarrito.addEventListener('click', function () {
    if (totalRemera > 0) {
        totalRemera--; 
        console.log(`Quitaste una remera. Total en el carrito: ${totalRemera}`);
        alert("Quitaste una remera del carrito");
    } else {
        alert("No hay artículos en el carrito para quitar.");
    }
});

/////////////////////////////////////////////////////////////////////////////////////////

const añadirCarrito2 = document.getElementById("añadirCarrito2");
const descontarCarrito2 = document.getElementById("descontarCarrito2");
let totalBuzo = 0;

añadirCarrito2.addEventListener(`click`, function () {
    totalBuzo++;
    console.log(`Añadiste al carrito un buzo $45.000. Total en el carrito: ${totalBuzo}`);
    alert("Agregaste un buzo al carrito")
})
descontarCarrito2.addEventListener('click', function () {
    if (totalBuzo > 0) {
        totalBuzo--; 
        console.log(`Quitaste una buzo. Total en el carrito: ${totalBuzo}`);
        alert("Quitaste una buzo del carrito");
    } else {
        alert("No hay artículos en el carrito para quitar.");
    }
});
////////////////////////////////////////////////////////////////////////////////////////

const añadirCarrito3 = document.getElementById("añadirCarrito3");
const descontarCarrito3 = document.getElementById("descontarCarrito3");
let totalJean = 0;

añadirCarrito3.addEventListener(`click`, function () {
    console.log(`Añadiste al carrito un jean $75.000`)
    alert("Agregaste un jean al carrito")
})
descontarCarrito3.addEventListener('click', function () {
    if (totalJean > 0) {
        totalJean--; 
        console.log(`Quitaste una jean. Total en el carrito: ${totalJean}`);
        alert("Quitaste una jean del carrito");
    } else {
        alert("No hay artículos en el carrito para quitar.");
    }
});
