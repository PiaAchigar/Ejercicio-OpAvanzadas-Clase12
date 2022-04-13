function init() {
  cargarCategorias();
}

/* Escriba la funcion cargarCategorias
    Las categorías deben estar en botones (<button>)
    Cada botón debe tener una acción que al oprimirlo, se carguen los productos asociados
    (cargarProductos)
*/

function cargarCategorias() {
  let btnCategorias = document.getElementById("categorias");
  categorias.forEach((categ) => {
    let btn = document.createElement("button");
    btn.setAttribute("id", categ.id);
    btn.setAttribute("class", "btnStyle");
    btn.innerHTML = categ.nombre;
    btn.addEventListener("click", cargarProductos);
    btnCategorias.appendChild(btn);
  });
}

/*
    La función cargar productos recibe una categoría (OBJETO) como parámetro y muestra el listado de productos 
    Use elementos UL Y LI para cada producto de la cetagoría 
    Use un Elemento <h4>Productos de {categoria}</h4> como título del contenedor
    Para validar la integridad de la información, use operadores avanzados, en donde aplique
    Cada Producto debe mostrar:    
        <h5> Nombre (en un <h5>)
        <li>Precio 
        <li> Si el producto tiene descuento, debe mostrar el descuento 
        <li> Si el producto no tiene descuento, debe mostrar el texto 'Sin descuento'
        <butoon> Si el producto tiene inventario, debe mostrar el botón 'Comprar' (NO DEBE PROGRAMAR LA FUNCIONALIDAD DE ESTE BOTÓN)
*/
function cargarProductos(categoClic) {
  const filteredArray = productos.filter((p) => {
    return p.idCategoria == categoClic.target.id;
  });
  filteredArray.map((prod) => {
    let etqUL = document.createElement("ul");
    let etqLi = document.createElement("li");
    etqLi.innerHTML = prod.precio;
    etqUL.appendChild(etqLi);
    document.body.append(etqUL);
  });
}
