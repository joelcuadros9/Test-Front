import { Component } from '@angular/core';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent {

  displayedColumns: string[] = ['cliente', 'fecha', 'total', 'acciones'];
  dataSource = [];

}
