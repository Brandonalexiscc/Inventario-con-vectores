import Productos from "./producto.js";
import Inventario from "./inventario.js";

const inventario = new Inventario();


document.getElementById('agregar').addEventListener('click', () =>{
    const nombre = document.getElementById('nombre').value;
    const codigo = document.getElementById('codigo').value;
    const cantidad = document.getElementById('cantidad').value;
    const costo = document.getElementById('costo').value;

    const producto = new Productos(nombre, codigo, cantidad, costo);

    inventario.agregarProducto(producto);
    let elemento = inventario.mostrarProducto();

    let listaProducto = document.getElementById('producto-list');
    listaProducto.innerHTML = elemento;
});


document.getElementById('eliminar-Codigo').addEventListener('click', () => {
    const codigoEliminar = document.getElementById('codigoEliminar').value;
        
    inventario.eliminarPorCodigo(codigoEliminar);
    inventario.mostrarProducto();
    
});

document.getElementById('buscar-Codigo').addEventListener('click', () =>{
    const buscarPorCodigo = document.getElementById('buscarCodigo').value;

    let elemento = inventario.buscarPorCodigo(buscarPorCodigo);
    if (elemento != "") {
        let listaProducto = document.getElementById('producto-list');
        listaProducto.innerHTML = `<h4>Producto Encontrado:</h4><br>${elemento}`;
    }
    else
        alert('Producto No Encontrado');
});

document.getElementById('agregar').addEventListener('click', () =>{
    const nombre = document.getElementById('nombre').value;
    const codigo = document.getElementById('codigo').value;
    const cantidad = document.getElementById('cantidad').value;
    const costo = document.getElementById('costo').value;

    const producto = new Productos(nombre, codigo, cantidad, costo);

    inventario.insertarProductoEnPosicion(producto);
    let elemento = inventario.mostrarProducto();

    let listaProducto = document.getElementById('producto-list');
    listaProducto.innerHTML = elemento;
});

document.getElementById('inverso').addEventListener('click', () =>{
    const interfaz = new Inventario();
    interfaz.recuperarListado();

    e.preventDefault();
});

