import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { VentaComponent } from './components/venta/venta.component';
import {MatTableModule} from "@angular/material/table";
import { DetalleVentaComponent } from './components/detalle-venta/detalle-venta.component';

@NgModule({
  declarations: [
    AppComponent,
    VentaComponent,
    DetalleVentaComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
