/*
<h2>Challenge:</h2>
        <p>💫 Generar una colección de Objetos de tipo Product que tenga las siguientes propiedades:</p>
        <ul>
          <li>nombre</li>
          <li>description</li>
          <li>precio de costo</li>
          <li>clasificación</li>
          <li>porcentaje de Ganancia</li>
          <li>precio de venta</li> precio de costo + porcentaje de Ganancia
          <li>precios de los ultimos 6 meses en una colección</li> precios aleatorios de 6 lengths
          <li>Cantidad vendidas en la ultima semana</li> aleatorio en lengths
          <li>Fecha de Caducidad</li>
        </ul>
        <p>💫 De igual forma es necesario realizar lo siguientes calculos por cada Producto:</p>
        <ol>
          <li>Calcular el precio de Venta y asignarlo a su correspondiente propiedad</li>
            prescio dde costo + porcentage de de ganancia = precio de venta
          <li>Obtener los diás restantes para que caduque el producto</li>
          <li>Obtener el promedio de precio de los ultimos 6 meses</li>
        </ol>
        <p>💫 Una vez obtenido la colleción de Productos obtener lo siguiente:</p>
        <ol>
          <li>Los productos que tengan mayor a 50 cantidades vendidas en la ultima semana</li>
          <li>Los productos que tengan menor a 10 cantidades vendidas en la ultima semana</li>
          <li>Los productos que se encuentren a menos de 15 días proximas a caducar</li>
        </ol>
*/

const Product = [
  {
    nombre: "leche",
    descripcion: "Bote de leche de 1.5 lt tetrapac",
    precioCosto: 15.50,
    categoria: "Lacteo",
    ganancia: .50, 
    fechaC: "03/10/2022",
    ventaU: 50,
    precioeM: [10.5,11.10,12.15,13.40,14.80,15.60],
  },
  {
    nombre: "crema",
    descripcion: "Bote con 1lt de crema",
    precioCosto: 15.50,
    categoria: "Lacteo",
    ganancia: .50, 
    fechaC: "2022-05-05",
    ventaU: 25,
    precioeM: [10.5,11.10,12.15,13.40,14.80,15.60],
  },
  {
    nombre: "huevo",
    descripcion: "Paquete de 12 blamquillos",
    precioCosto: 31.80,
    categoria: "ovino",
    ganancia: .50, 
    fechaC: "2022-03-30",
    ventaU: 35,
    precioeM: [10.5,11.10,12.15,13.40,14.80,15.60]
    },
    {
    nombre: "azucar clara",
    descripcion: "Bolsa de 1k",
    precioCosto: 10.90,
    categoria: "costales",
    ganancia: .50, 
    fechaC: "2022-08-01",
    ventaU: 40,
    precioeM: [10.5,11.10,12.15,13.40,14.80,15.60],
    },
    {
    nombre: "azucar morena",
    descripcion: "Bolsa de 1k",
    precioCosto: 10.90,
    categoria: "costales",
    ganancia: .50, 
    fechaC: "2022-03-10",
    ventaU: 10,
    precioeM: [10.5,11.10,12.15,13.40,14.80,15.60],
    },
    {
    nombre: "Jugo de naranja",
    descripcion: "bote de 600mlt",
    precioCosto: 12.90,
    categoria: "bebidas",
    ganancia: .50, 
    fechaC: "2022-04-08",
    ventaU: 17,
    precioeM: [10.5,11.10,12.15,13.40,14.80,15.60],
    },
    {
      nombre: "prueba",
      descripcion: "prueba",
      precioCosto: 50,
      categoria: "prueba",
      ganancia: .50, 
      fechaC: "1970-01-01",
      ventaU: 200,
      precioeM: [10.5,11.10,12.15,13.40,14.80,15.60],

      }
]

function Producto(nombre, descripcion, precioCosto, categoria, ganancia, fechaC, ventaU, precio6M){
this.nombre = nombre
this.descripcion = descripcion
this.precioCosto = precioCosto
this.categoria = categoria
this.ganancia = ganancia
this.fechaC = fechaC
this.ventaU = ventaU
this.precio6M= precio6M

this.getDays = function (){
  let today = new Date()
  let caducidad = new Date(this.fechaC)
  let mes = (caducidad.getMonth() - today.getMonth()) * 30
  return caducidad.getDate() - today.getDate() + mes
}
this.getPrecioPromedio = function(){
  return (precio6M.reduce((accum, current) => accum + current,0 )) / precio6M.length
}

}

const Productos = [Leche = new Producto('leche', 'lacteo', 12, 'bebida', .15, "2022/04/30", 30, [11,10,9,8,7,6]),
                   manzana = new Producto('manzana', 'roja', 7, 'fruta', 320, "2022/04/10", 15, [7,7,6.5,6.2,6,6]),
                   huevoz = new Producto('huevos', 'blanco', 8, 'alimento', .16, "2022/04/23", 100, [8,8,8,8,8,7]),
                   mango = new Producto('mango', 'petacon', 10, 'fruta', 20, "2022/04/38", 30, [10,10,9,9,8,7])
]

const getProductsAvobe = (cantidad) => Productos.filter(array => array.ventaU >= cantidad)

console.log(getProductsAvobe(50))
console.log(getProductsAvobe(10))

let proximosAcaducar = Productos.filter(current => current.getDays() < 15)