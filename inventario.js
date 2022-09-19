export default class Inventario{
    constructor(){
        this.productos = new Array();;
    }
    agregarProducto(producto){
        const listaProducto = document.getElementById('producto-list');
        const elemento = document.createElement('div');
        elemento.innerHTML = `
        <div class="card text-center  Tb.4">
            <div class="card.body">
                <strong>Producto</strong>: ${producto.nombre}
                <strong>Codigo</strong>: ${producto.codigo}
                <strong>Cantidad</strong>: ${producto.cantidad}
                <strong>Costo</strong>: ${producto.costo}
            </div>
        </div>
        `;
        listaProducto.appendChild(elemento);
    } 

    resetearFormulario(){
        document.getElementById('producto-form').reset();
    }

    eliminarPorCodigo(){ 
        let codigo = document.getElementById('codigo').value; 
        let listaProducto = document.getElementById('producto-list'); 
        let producto = document.getElementById('producto-list').value; 
        if(codigo == this.producto.codigo){ 
            listaProducto.removeChild(producto); 
            alert("Producto Eliminado"); 
        } 
    }

    buscarPorCodigo(){ 
        let codigo = document.getElementById('codigo').value; 
        let producto = document.getElementById('producto-list').value; 
        if(codigo == producto.codigo){ 
            alert("Producto Encontrado"); 
        }else{
            alert("Producto No Encontrado");
        } 
    }

    insertarProductoEnPosicion(){
         let codigo = document.getElementById('codigo').value;
         let producto = document.getElementById('producto-list').value;
         let posicion = document.getElementById('posicion').value;
         if(codigo === producto.codigo){
            producto.insert(posicion, producto);
            codigo.insert(posicion, codigo);
            alert('Producto Insertado');
        }else{
            alert('Producto No Insertado');
        }
    }

    recuperarListado(){
        let listaProducto = document.getElementById('producto-list');
        let producto = document.getElementById('producto-list').value;
        if(producto === listaProducto.value){
            alert('Listado Recuperado');
        }else{
            alert('Listado No Recuerado');
        }
    }

    mostrarMensaje(mensaje, tipo){
        const div = document.getElementById('mensaje');
        if(tipo === 'error'){
            div.className = 'alert alert-danger';

        }else{
            div.className = 'alert alert-success';
        }
        div.appendChild(document.createTextNode(mensaje));
        setTimeout(function(){
            document.getElementById('mensaje').remove();
        }, 3000);
    }

}
 

document.getElementById('producto-form').addEventListener('submit', function(e){
    const nombre = document.getElementById('nombre').value;
    const codigo = document.getElementById('codigo').value;
    const cantidad = document.getElementById('cantidad').value;
    const costo = document.getElementById('costo').value;
    
    const producto = new Productos(nombre, codigo, cantidad, costo); 

    const interfaz = new InterfazUsuario();
        interfaz.agregarProducto(producto);  
        interfaz.resetearFormulario();


    e.preventDefault();
});


document.getElementById('producto-list').addEventListener('submit',function (e){
    const interfaz = new InterfazUsuario();
        
        InterfazUsuario.eliminarPorCodigo();
        interfaz.resetearFormulario();

    e.preventDefault();
})

document.getElementById('producto-list').addEventListener('submit', function (e){
    const interfaz = new InterfazUsuario();
        interfaz.buscarPorCodigo();
        interfaz.resetearFormulario();

        e.preventDefault();
});

document.getElementById('producto-list').addEventListener('submit', function (e){
    const interfaz = new InterfazUsuario();
        interfaz.insertarProductoEnPosicion();
        interfaz.resetearFormulario();

        e.preventDefault();
});

document.getElementById('producto-list').addEventListener('submit', function (e){
    const interfaz = new InterfazUsuario();
        interfaz.recuperarListado();
        interfaz.resetearFormulario();

        e.preventDefault();
});

