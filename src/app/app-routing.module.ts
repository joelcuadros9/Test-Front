import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {VentaComponent} from "./components/venta/venta.component";

export const routes: Routes = [
  {
    path: 'venta',
    component: VentaComponent
  }
];

@NgModule({
  imports: [[RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
  })],
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
