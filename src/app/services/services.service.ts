import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http" ;
import { Persona }    from "../models/Persona";
import { LineaTelefonica }    from "../models/LineaTelefonica";
import { Factura }    from "../models/Factura";
import { Post }    from "../models/Post";
import { BuscarPersona }    from "../models/BuscarPersona";
import { BuscarLinea }    from "../models/BuscarLinea";
import { DatosLinea }    from "../models/DatosLinea";
import { Equipo }    from "../models/Equipo";



import { Observable } from "rxjs/Observable"
import 'rxjs/add/operator/catch';



const httpOption={
  headers:new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http:HttpClient) {
    console.log("service on");
    
   }
  Url="http://localhost:8080/CRUD_API_REST_JPA/Rest/PruebaOrrego/registrarPersona";
  Url2="http://localhost:8080/CRUD_API_REST_JPA/Rest/PruebaOrrego/listadoLibros";
   url3="http://localhost:8080/CRUD_API_REST_JPA/Rest/PruebaOrrego/registrarLinea";
   url4="http://localhost:8080/CRUD_API_REST_JPA/Rest/PruebaOrrego/registrarFactura";
   url5="http://localhost:8080/CRUD_API_REST_JPA/Rest/PruebaOrrego/obtenerFacturas/";
   url6="http://localhost:8080/CRUD_API_REST_JPA/Rest/PruebaOrrego/buscarPersona/";
   url7="http://localhost:8080/CRUD_API_REST_JPA/Rest/PruebaOrrego/buscarLinea/";
   url8="http://localhost:8080/CRUD_API_REST_JPA/Rest/PruebaOrrego/eliminarFactura/";
   url9="http://localhost:8080/CRUD_API_REST_JPA/Rest/PruebaOrrego/obtenerLineaEditar/";
   url11="http://localhost:8080/CRUD_API_REST_JPA/Rest/PruebaOrrego/editarEstadoLinea";
   url12="http://localhost:8080/CRUD_API_REST_JPA/Rest/PruebaOrrego/registrarEquipo";
   url13="http://localhost:8080/CRUD_API_REST_JPA/Rest/PruebaOrrego/buscarEquipo/";



   getEquipo(equserial:number){
    const url = `${this.url13}${equserial}`;
    return this.http.get<Equipo[]>(url);
  }

  createEquipo(equipo:Equipo){
  return this.http.post<Equipo>(this.url12,equipo)
  }

  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url,persona)
                  
  }
  getPersonas(){
    return this.http.get<Persona[]>(this.Url2);
  }
  createLinea(lineaTelefonica:LineaTelefonica){
    return this.http.post<LineaTelefonica>(this.url3,lineaTelefonica);
  }
  createFactura(factura:Factura){
    return this.http.post<Factura>(this.url4,factura)
                
  }
  getFacturas(documento:String){
    const url = `${this.url5}${documento}`;
    return this.http.get<Post[]>(url);
  }

  getPersona(documento:String){
    const url = `${this.url6}${documento}`;
    return this.http.get<BuscarPersona[]>(url);
  }

  getlinea(linumerolinea:number){
    const url = `${this.url7}${linumerolinea}`;
    return this.http.get<BuscarLinea[]>(url);
  }

  deleteFactura(datos:number){
    const url = `${this.url8}${datos}`;
    return this.http.delete<Post>(url)
  }

  getLineaParaEditar(documento:String,linumerolinea:number){
    return this.http.get<DatosLinea[]>(this.url9+documento+"/"+linumerolinea);
  }
  
  updateLineaEstado(datos:DatosLinea){
    return this.http.put<DatosLinea>(this.url11,datos);

  }
}
