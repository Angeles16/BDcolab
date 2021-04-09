const carrito = document.querySelector('#carrito');
const carritoMensaje = document.querySelector('#carrito-mensaje');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito;
let infoCarrito2;

let productoJSON = localStorage.getItem("productos");
articulosCarrito= JSON.parse(productoJSON);
if (articulosCarrito==[]){
carritoMensaje = document.textContent("Carrito Vacio");

}

carritoHTML();

cargarEventListeners();
function cargarEventListeners(){
    
    //Elimina cursos del carrio
    carrito.addEventListener('click', eliminarCurso);
    //Vaciar Carrito
    vaciarCarritoBtn.addEventListener('click', () =>{

        articulosCarrito=[]; // reseteando el carrito
        infoCarrito2 = JSON.stringify(articulosCarrito);

        localStorage.setItem('productos', infoCarrito2);


        limpiarHTML(); // Eliminamos todo del HTML
        carritoHTML();
    });


}

// Eliminar un curso del carrito
function eliminarCurso(e){

    console.log(e.target.classList);
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        //Eliminar del arreglo con el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !==cursoId);
        console.log(articulosCarrito);

        
        infoCarrito2 = JSON.stringify(articulosCarrito);

        localStorage.setItem('productos', infoCarrito2);
        carritoHTML();
        
    }
}




function carritoHTML (){
    //Limpiar el HTML

    limpiarHTML();
    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach(curso => {
        const {imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML=`
            <td>
                <img src='${imagen}' width='100'>
            </td>    

            <td>${titulo}</td>
    
            <td class="text-center">${precio}</td> 

            <td class="text-center">${cantidad}</td>
            <td>
                <img src="../img/delete.png" width="30" height="30" class='borrar-curso' data-id='${id}'></img>
            
            </td>


        `;
        //Agrega el HTML del carrito en el body

        contenedorCarrito.appendChild(row);
        
    });

    totalCompra();

} 
function limpiarHTML(){
    // contenedorCarrito.innerHTML='';

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);

    }
}
console.log('limpiando');

function totalCompra(){
    const listaP = localStorage.getItem('productos');
    const listProduct = JSON.parse(listaP);
    let contenedor=0;
    let total = 0;

    listProduct.forEach(curso => {
        const {imagen, titulo, precio, cantidad, _id} = curso;

        // switch (curso._id){
        //     case "1":
        //         contenedor = curso.cantidad * 10;
        //         total=total+contenedor;
        //         console.log(total);
        //         break;
           
        //     case "2":
        //         contenedor = curso.cantidad * 15;
        //         total=total+contenedor;
        //         break;
        //     case "3":
        //         contenedor = curso.cantidad * 20;
        //         total=total+contenedor;
        //         break;
        //     case "4":
        //         contenedor = curso.cantidad * 10;
        //         total=total+contenedor;
        //         break;
        //     case "5":
        //         contenedor = curso.cantidad * 12;
        //         total=total+contenedor;
        //         break;
        //     case "6":
        //         contenedor = curso.cantidad * 5;
        //         total=total+contenedor;
        //         break;
        //     case "7":
        //         contenedor = curso.cantidad * 20;
        //         total=total+contenedor;
        //         break;

        // }

 contenedor = precio*cantidad;
 total = total+contenedor;        
    });
    
    console.log('total es ', total);
    if(total != 0){
    document.getElementById("carrito-mensaje").innerHTML = "Total a Pagar Q "+total+".00";
    }else{
        document.getElementById("carrito-mensaje").innerHTML = "Carrito Vacio";
    }
}
