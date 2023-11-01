import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{  

  productos: Producto[] = [
    new Producto(100, 'Inka Cola 3 Litros descartable', 5.50),
    new Producto(200, 'Coca Cola 3 Litros retornable', 6.50),
    new Producto(300, 'Galletas Soda 12 unidades', 10.00),
    new Producto(400, 'Galletas Soda 6 unidades', 5.00),
    new Producto(500, 'Sal de Maras 1 Kg', 3.00),
  ];

  productoSeleccionado: Producto = new Producto();

  seleccionarProducto(producto: Producto): void {
    this.productoSeleccionado = producto;
  }

  AnadirOEditar(): void {
    if (this.productos.indexOf(this.productoSeleccionado) < 0) {
      this.productos.push(this.productoSeleccionado);
    }
    this.productoSeleccionado = new Producto();
  }

  eliminar(): void {
    if (confirm('¿Está seguro de eliminar el registro de ' + this.productoSeleccionado.descripcion + '?')) {
      this.productos = this.productos.filter(x => x != this.productoSeleccionado);
      this.productoSeleccionado = new Producto();
    }
  }
}
