
alert("Bienvenidos a TiendaMultimarca. A continuacion realizaremos una serie de preguntas para ayudarte con la busqueda (no es necesario que contestes todas) ")


let marca = prompt("Ingrese la marca que andas buscando").toLowerCase();
let prenda = prompt("Ingrese la prenda que te interesa").toLowerCase();
let maximo = Number (prompt("Ingrese el maximo de dinero que quieras gastar en la prenda"))
let talles = prompt ("Ingrese el talle de la prenda (S, M, L, XL)")
let color = prompt ("Ingrese el color de la prenda").toLowerCase();


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
    tiendas.forEach((tienda) => console.log(tienda.marca + " - " + tienda.prenda + " - " + tienda.precio + "$ - " + tienda.talles + " - " + tienda.color))
}


function filtrarTiendas() {
    const resultado = tiendas.filter(filtrarMarca) .filter(filtrarPrenda) .filter(filtrarMaximo) .filter(filtrarTalles) .filter(filtrarColor);
    if (resultado.length > 0){
        mostrarTiendas(resultado)
    }else{
        console.log ( "No tenemos disponible disculpa")
    }
    
}


function filtrarMarca(tienda) {
    if (marca) {
        return tienda.marca.toLowerCase() === marca
    }
    return tienda;
}


function filtrarPrenda (tienda) {
    if (prenda) {
        return tienda.prenda.toLowerCase() === prenda
    }
    return tienda;
}

function filtrarMaximo (tienda) {
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

function filtrarColor (tienda) {
    if (color) {
        return tienda.color.toLowerCase() === color
    }
    return tienda;
}


filtrarTiendas()

console.log ("Espero hayas encontrado lo que buscabas") 
