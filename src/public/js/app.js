const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-productos');
let articulosCarrito =  [];

cargarEventListeners();
function cargarEventListeners(){
    //Cuando agregas un curso cuando das agregar curso
    listaCursos.addEventListener('click', agregarCurso);
    //Elimina cursos del carrio
    carrito.addEventListener('click', eliminarCurso);
    //Vaciar Carrito
    vaciarCarritoBtn.addEventListener('click', () =>{

        articulosCarrito=[]; // reseteando el carrito

        limpiarHTML(); // Eliminamos todo del HTML
    })


}


//funciones

function agregarCurso(e){
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
    
}

// Eliminar un curso del carrito
function eliminarCurso(e){

    console.log(e.target.classList);
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        //Eliminar del arreglo con el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !==cursoId);
        console.log(articulosCarrito);

        carritoHTML();

    }
}



//Lee el contenido del HTML al que le dimos click y extrae la informacion del curso

function leerDatosCurso(curso){
   // console.log(curso);

    //Crear un objeto con el contenido del curso actual
    const infoCurso ={
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
console.log(urso.querySelector('h4').textContent);
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if(existe){
// Actualizamos la cantidad
        const cursos = articulosCarrito.map(curso =>{
            
            if(curso.id === infoCurso.id){
                    curso.cantidad++;
                    return curso;
            }
            else{
                return curso;
            }
            
        });
        articulosCarrito = [...cursos];
    }
    else{
// Agregamos el curso al carrito
    articulosCarrito = [...articulosCarrito, infoCurso];

    }



    
    console.log(articulosCarrito);
    carritoHTML();
}

//Muestra el carruto de compras en HTML

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
    
            <td>${precio}</td> 

            <td>${cantidad}</td>
            <td>
                <a href='#' class='borrar-curso' data-id='${id}'> X </a>
            </td>


        `;
        //Agrega el HTML del carrito en el body

        contenedorCarrito.appendChild(row);
        
    });
} 

//Funcion que elimina los cursos del tbody
function limpiarHTML(){
    // contenedorCarrito.innerHTML='';
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);

    }
}