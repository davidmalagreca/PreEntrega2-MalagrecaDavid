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

//Agrego Evento con click para consola.
const añadirCarrito = document.getElementById("añadirCarrito");
añadirCarrito.addEventListener(`click`,function(){
    console.log(`Añadiste al carrito una remera $23.500`)
    alert("Agrego detalles de prenda en consola")
})


const añadirCarrito2 = document.getElementById("añadirCarrito2");
añadirCarrito2.addEventListener(`click`,function(){
    console.log(`Añadiste al carrito un buzo $45.000`)
    alert("Agrego detalles de prenda en consola")
})

const añadirCarrito3 = document.getElementById("añadirCarrito3");
añadirCarrito3.addEventListener(`click`,function(){
    console.log(`Añadiste al carrito un jean $75.000`)
    alert("Agrego detalles de prenda en consola")
})