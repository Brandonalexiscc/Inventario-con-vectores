export default class Inventario{
    constructor(){
        this.productos = [];
    }

    agregarProducto(producto){
        this.productos.push(producto);
        console.log(this.productos);
    }

    mostrarProducto(){
        let cadena = '';
        for (let i = 0; i < this.productos.length; i++){
            cadena += `<div class="card text-center  Tb.4">
                <div class="card.body">
                    <strong>Producto</strong>: ${this.productos[i].nombre}&nbsp;
                    <strong>Codigo</strong>: ${this.productos[i].codigo}&nbsp;
                    <strong>Cantidad</strong>: ${this.productos[i].cantidad}&nbsp;
                    <strong>Costo</strong>: ${this.productos[i].costo}
                </div>
            </div>
            `;
        }
        return cadena;
    }

    eliminarPorCodigo(codigo){ 
        let articulo = 0; 
        let producto = "";
        for (let i = 0; i <= this.productos.length; i++) {
            if (this.productos[i])
                if (codigo === this.productos[i].codigo) {
                    for (let b = i; b < this.productos.length - 1; b++)
                        this.productos[b] = this.productos[b + 1];

                    this.productos[this.productos.length - 1] = articulo;
                    this.productos.pop();
                    producto = `El elemento con código ${codigo} ha sido eliminado`;
                }
        }
        return producto;
    }
    
    buscarPorCodigo(codigo) {
        let cadena = '';
        for (let i = 0; i <= this.productos.length; i++) {
            if (this.productos[i])
                if (codigo === this.productos[i].codigo) {
                    cadena += `<div class="card text-center  Tb.4">
                    <div class="card.body">
                        <strong>Producto</strong>: ${this.productos[i].nombre}&nbsp;
                        <strong>Codigo</strong>: ${this.productos[i].codigo}&nbsp;
                        <strong>Cantidad</strong>: ${this.productos[i].cantidad}&nbsp;
                        <strong>Costo</strong>: ${this.productos[i].costo}
                    </div>
                    </div>
            `;
            }
        }
        return cadena;
    }

    insertarProductoEnPosicion(producto, posicion){
         let nvoProd = this.productos[posicion-1];
         this.productos[posicion-1] = producto;
         for(let i = posicion+1; i<this.productos.length; i++){
            let nvoProd2 = this.productos[i];
            this.productos[i] = nvoProd;
            nvoProd = nvoProd2;
         }
    }

    listaProductos(){
        let cadena = '';
        for (let i = 0; i < this.productos.length; i++){
            cadena += `<div class="card text-center  Tb.4">
            <div class="card.body">
                <strong>Producto</strong>: ${this.productos[i].nombre}&nbsp;
                <strong>Codigo</strong>: ${this.productos[i].codigo}&nbsp;
                <strong>Cantidad</strong>: ${this.productos[i].cantidad}&nbsp;
                <strong>Costo</strong>: ${this.productos[i].costo}
            </div>
        </div>
        `;
        }
        return cadena;
    }

    listarProductosOrdenInverso() {
        let cadena = '';
        for (let i = this.productos.length; i >= 0; i--) {
            if (this.productos[i])
                cadena += `<div class="card text-center  Tb.4">
                <div class="card.body">
                    <strong>Producto</strong>: ${this.productos[i].nombre}&nbsp;
                    <strong>Codigo</strong>: ${this.productos[i].codigo}&nbsp;
                    <strong>Cantidad</strong>: ${this.productos[i].cantidad}&nbsp;
                    <strong>Costo</strong>: ${this.productos[i].costo};
                </div>
                </div>
            `;
        }
        return cadena;
    }
}

