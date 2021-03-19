//Variables 
const listaCursos = document.querySelector('#lista-productos');
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');


let productLocalS = localStorage.getItem("productos");
let articulosCarrito = JSON.parse(productLocalS);

eventListener();
function eventListener(){
    listaCursos.addEventListener('click', agregarProducto);
}

function agregarLocalStorage(e){
    e.preventDefault();
   

}

function agregarProducto(e){
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
    
}




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
     
     const infoCarrito = JSON.stringify(articulosCarrito);
     localStorage.setItem('productos', infoCarrito);
     
 }