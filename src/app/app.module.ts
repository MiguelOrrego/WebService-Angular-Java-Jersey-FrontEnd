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
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavComponent,
    RegistrarPersonasComponent,
    ConsultarLineasComponent,
    RegistrarEquipoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    ReactiveFormsModule,
    FontAwesomeModule
    
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
