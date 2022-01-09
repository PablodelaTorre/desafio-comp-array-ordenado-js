//Una manera de hacerlo(ordeno por precio)

class Auto {
    constructor(marca, puertas, velMax, precio) {
        this.marca = marca
        this.puertas = puertas
        this.velMax = velMax
        this.precio = precio
    }
}

const fordFocus = new Auto ("ford", "4 puertas", 220, 160)
const fiatFitito = new Auto ("fiat", "2 puertas", 100, 50)
const toyotaHilux = new Auto ("toyota", "4 puertas", 250, 200)
const bmwI8 = new Auto ("bmw", "2 puertas", 350, 400)



const autos = [fordFocus, fiatFitito, toyotaHilux, bmwI8]

const ordenPorPrecio = autos.sort((a, b) => a.precio - b.precio)

console.log(ordenPorPrecio)


//Otra forma, definiendo los objetos dentro del mismo array(ordeno por velocidad)


const autos2 = [{patente:1, marca:"ford", puertas:"4 puertas", velMax:220, precio:160,},
                {patente:2, marca:"fiat", puertas:"2 puertas", velMax:100, precio:50,},
                {patente:3, marca:"toyota", puertas:"4 puertas", velMax:250, precio:200,},
                {patente:4, marca:"bmw", puertas:"2 puertas", velMax:350, precio:400,}
]

const ordenPorPrecio2 = autos2.sort((a, b) => a.velMax - b.velMax)

console.log(ordenPorPrecio2)