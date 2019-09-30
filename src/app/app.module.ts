import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import {NavComponent} from "./components/nav/nav.component"
import { AppComponent } from './app.component';
import {RouterModule}   from "@angular/router";
import {ServicesService}   from "../app/services/services.service";
import { RegistrarPersonasComponent } from './components/registrar-personas/registrar-personas.component';
import { ConsultarLineasComponent } from './components/consultar-lineas/consultar-lineas.component';
import { RegistrarEquipoComponent } from './components/registrar-equipo/registrar-equipo.component';
import { ReactiveFormsModule,FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavComponent,
    RegistrarPersonasComponent,
    ConsultarLineasComponent,
    RegistrarEquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    ReactiveFormsModule
    
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
