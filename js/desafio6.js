
let productos_precios = [

    {producto: "buzo ferrari", precio: 5000},

    {producto: "buzo mercedes", precio: 5000},

    {producto: "buzo red bull", precio: 5000},

    {producto: "buzo vaca", precio: 2500},

    {producto: "buzo neon lila", precio: 2500},

    {producto: "buzo life", precio: 2500},

    {producto: "remera coraje", precio: 1500},

    {producto: "remera reggie", precio: 1500},

    {producto: "remera daria", precio: 1500},

    {producto: "remera johnny bravo", precio: 1500},

    {producto: "remera castores cascarrabias", precio: 1500},

    {producto: "joggin neon verde", precio: 2500},

    {producto: "joggin neon lila", precio: 2500},

    {producto: "body ursula", precio: 2000},

    {producto: "encendedores", precio: 500},

    {producto: "soquetes bob esponja", precio: 2500},

]

let producto_ingresado = "";

let precio_ingresado = 0;

let precio_total= 0;


function asignarProducto (productos_precios) {

    return productos_precios.producto === producto_ingresado;

}

function buscarProducto (producto_a_buscar){


    let texto= "";  

    producto_ingresado = producto_a_buscar

    let resultado = productos_precios.find (asignarProducto);

    if (resultado == undefined) {

        producto_ingresado = "";

        alert ("no se encontro el producto")
    }

    else {
        texto = resultado.producto + " -->  " + "$" + resultado.precio

        if (precio_total == 0){

            precio_total = resultado.precio;
        }

        else {

            precio_total += resultado.precio;
        }       
    }

    return texto;
}


function agregar_productos(){

    let producto_usuario = "";

    let lista = document.getElementById("lista");

    let li = document.createElement("li");

    li.style.color = "green";

    producto_usuario = document.getElementById("producto").value

    producto_ingresado = "";

    if (producto_usuario !="") {

        producto_usuario = buscarProducto (producto_usuario)

        if (producto_usuario != "") {

            li.innerHTML = producto_usuario

            lista.append(li);

            document.getElementById("PrecioTotal").innerHTML = "Precio Total de los productos seleccionados: $" + precio_total  
        }
    }
}

function borrar_productos () {

    producto_ingresado = "";

    precio_ingresado = 0;

    precio_total= 0;

    document.getElementById("producto").value = ""

    document.getElementById("PrecioTotal").innerHTML = "Precio Total de los productos seleccionados:"

    let list = document.getElementById("lista");

    while (list.hasChildNodes()) {

        list.removeChild(list.firstChild);

    }
}

// Eventos
  
let boton_uno = document.getElementById ("boton_agregar");
let boton_dos = document.getElementById ("boton_borrar");

boton_uno.addEventListener ("click", agregar_productos); 
boton_dos.addEventListener ("click", borrar_productos);





