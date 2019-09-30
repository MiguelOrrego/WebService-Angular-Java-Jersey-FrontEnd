import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarLineaComponent } from "./components/registrar-linea/registrar-linea.component";
import {ConsultarFacturasComponent} from "./components/consultar-facturas/consultar-facturas.component"
import {RegistrarPersonasComponent} from "./components/registrar-personas/registrar-personas.component"
import {ActualizarEstadoLineaComponent} from "./components/actualizar-estado-linea/actualizar-estado-linea.component"
import {ConsultarLineasComponent} from "./components/consultar-lineas/consultar-lineas.component"
import {RegistrarEquipoComponent} from "./components/registrar-equipo/registrar-equipo.component"
import {AppComponent} from "../app/app.component"




const routes: Routes = [
  { path: 'RegistroLinea', component: RegistrarLineaComponent },
  { path: 'ConsultarFacturas', component: ConsultarFacturasComponent },
  { path: 'RegistrarPersonas', component: RegistrarPersonasComponent },
  { path: 'ActualizarLinea', component: ActualizarEstadoLineaComponent },
  { path: 'ConsultarLineas', component: ConsultarLineasComponent },
  { path: 'RegistrarEquipo', component: RegistrarEquipoComponent },
  { path: 'app', component: AppComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegistrarLineaComponent,ConsultarFacturasComponent,
                                  RegistrarPersonasComponent,ActualizarEstadoLineaComponent,
                                  ConsultarLineasComponent,RegistrarEquipoComponent,AppComponent]