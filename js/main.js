//-----------------------------segunda pre-entrega-------------------------------//
alert("Bienvenidos a TiendaMultimarca. A continuacion realizaremos una serie de preguntas para ayudarte con la busqueda (no es necesario que contestes todas) ")


let marca = prompt("Ingrese la marca que andas buscando").toLowerCase();
let prenda = prompt("Ingrese la prenda que te interesa").toLowerCase();
let maximo = Number(prompt("Ingrese el maximo de dinero que quieras gastar en la prenda"))
let talles = prompt("Ingrese el talle de la prenda (S, M, L, XL)")
let color = prompt("Ingrese el color de la prenda").toLowerCase();


const tiendas = [
    {
        marca: 'Adidas',
        prenda: 'Zapatilla',
        precio: 45000,
        talles: ['S', 'L', 'XL'],
        color: 'Rojo'
    },
    {
        marca: 'Adidas',
        prenda: 'Remera',
        precio: 19500,
        talles: ['S', 'M', 'XL'],
        color: 'Negro'
    },
    {
        marca: 'Adidas',
        prenda: 'Pantalón',
        precio: 32800,
        talles: ['S', 'M', 'L', 'XL'],
        color: 'Blanco'
    },
    {
        marca: 'Nike',
        prenda: 'Zapatilla',
        precio: 82000,
        talles: ['M', 'L', 'XL'],
        color: 'Gris'
    },
    {
        marca: 'Nike',
        prenda: 'Remera',
        precio: 25000,
        talles: ['S', 'M', 'L', 'XL'],
        color: 'Rojo'
    },
    {
        marca: 'Nike',
        prenda: 'Pantalón',
        precio: 36900,
        talles: ['S', 'M', 'XL'],
        color: 'Negro'
    },
    {
        marca: 'Puma',
        prenda: 'Zapatilla',
        precio: 34500,
        talles: ['S', 'M', 'L', 'XL'],
        color: 'Blanco'
    },
    {
        marca: 'Puma',
        prenda: 'Remera',
        precio: 15000,
        talles: ['S', 'M', 'L'],
        color: 'Gris'
    },
    {
        marca: 'Puma',
        prenda: 'Pantalón',
        precio: 24700,
        talles: ['S', 'M', 'L', 'XL'],
        color: 'Rojo'
    },
    {
        marca: 'Adidas',
        prenda: 'Zapatilla',
        precio: 61000,
        talles: ['S', 'L', 'XL'],
        color: 'Negro'
    },
    {
        marca: 'Adidas',
        prenda: 'Remera',
        precio: 20000,
        talles: ['M', 'L', 'XL'],
        color: 'Blanco'
    },
    {
        marca: 'Adidas',
        prenda: 'Pantalón',
        precio: 26000,
        talles: ['S', 'M', 'L', 'XL'],
        color: 'Gris'
    },
    {
        marca: 'Nike',
        prenda: 'Zapatilla',
        precio: 63000,
        talles: ['S', 'M',],
        color: 'Rojo'
    },
    {
        marca: 'Nike',
        prenda: 'Remera',
        precio: 28400,
        talles: ['S', 'M', 'L', 'XL'],
        color: 'Negro'
    },
    {
        marca: 'Nike',
        prenda: 'Pantalón',
        precio: 31600,
        talles: ['S', 'XL'],
        color: 'Blanco'
    },
    {
        marca: 'Puma',
        prenda: 'Zapatilla',
        precio: 43600,
        talles: ['S', 'M', 'L', 'XL'],
        color: 'Gris'
    },
    {
        marca: 'Puma',
        prenda: 'Remera',
        precio: 19300,
        talles: ['S', 'M', 'L', 'XL'],
        color: 'Rojo'
    },
    {
        marca: 'Puma',
        prenda: 'Pantalón',
        precio: 28600,
        talles: ['S', 'M', 'L', 'XL'],
        color: 'Negro'
    },
    {
        marca: 'Adidas',
        prenda: 'Zapatilla',
        precio: 95300,
        talles: ['S', 'L', 'XL'],
        color: 'Blanco'
    },
    {
        marca: 'Adidas',
        prenda: 'Remera',
        precio: 22600,
        talles: ['S', 'M', 'XL'],
        color: 'Gris'
    },
];


function mostrarTiendas(tiendas) {
    tiendas.forEach((tienda) => console.log("Marca: " + tienda.marca + " - Prenda: " + tienda.prenda + " - Precio: " + tienda.precio + "$ - Talles: " + tienda.talles + " - Color: " + tienda.color))
}


function filtrarTiendas() {
    const resultado = tiendas.filter(filtrarMarca).filter(filtrarPrenda).filter(filtrarMaximo).filter(filtrarTalles).filter(filtrarColor);
    if (resultado.length > 0) {
        mostrarTiendas(resultado)
    } else {
        console.log("No tenemos disponible disculpa")
    }

}


function filtrarMarca(tienda) {
    if (marca) {
        return tienda.marca.toLowerCase() === marca
    }
    return tienda;
}


function filtrarPrenda(tienda) {
    if (prenda) {
        return tienda.prenda.toLowerCase() === prenda
    }
    return tienda;
}

function filtrarMaximo(tienda) {
    if (maximo) {
        return tienda.precio <= maximo
    }
    return tienda;
}

function filtrarTalles(tienda) {
    if (talles) {
        return tienda.talles.includes(talles);
    }
    return tienda;
}

function filtrarColor(tienda) {
    if (color) {
        return tienda.color.toLowerCase() === color
    }
    return tienda;
}


filtrarTiendas()


//-----------------------------------------------------------------//
//----------------------primer preentrega--------------------------//
//-----------------------------------------------------------------//



let total = 0

//funciones//

function valorDonacion(donacion) {
    total = total + donacion;
    console.log("Ingresa el valor de " + " " + donacion + " pesos")
}

function cuotasInteres(cuotas) {
    return ((total * 0.06 * cuotas) + total) / cuotas;
}

function cuotasTotal(cuotas) {
    return (total * 0.06 * cuotas) + total
}

// proyecto//
let nombre = prompt("Ingrese su Nombre y Apellido")
console.log("Bienvenido " + nombre + ". Que desea llevar?")

let ventaProducto = prompt("Ingrese aqui la prenda, marca y talle que desea llevar")

console.log("Usted llevara un/a " + ventaProducto + ". A continuacion ingrese el precio de la prenda por favor. ")

let pesos = Number(prompt("Coloque aqui el valor de la prenda"))

valorDonacion(pesos)

console.log("El unico medio de pago en esta plataforma es con tarjeta de credito, y contamos con hasta 12 cuotas con interes")

let cuotas = Number(prompt("En cuantas cuotas deseas realizar el pago?"))

let montoCuotas = cuotasInteres(cuotas)
const totalPago = cuotasTotal(cuotas)

if (cuotas == 1) {
    console.log("Usted va a pagar " + total + "$.")
} else if (cuotas > 1 && cuotas <= 12) {
    console.log("Usted va a pagar " + cuotas + " cuotas de " + montoCuotas + " $. " + "Siendo un total de " + totalPago + "$.");
} else {
    console.log("Lo sentimos, pero no puedes pagar en tantas cuotas");
}



let realizarPago = prompt("¿Desea realizar el pago? (si/no)");
if (realizarPago.toLowerCase() == "si") {
    console.log("¡El pago fue realizado con exito! Muchas Gracias");
} else {
    console.log("El pago fue cancelado. Gracias de todas formas. Vuelva pronto!");
}

