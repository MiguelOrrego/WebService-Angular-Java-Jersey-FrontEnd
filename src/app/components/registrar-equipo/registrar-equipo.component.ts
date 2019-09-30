import { Component, OnInit } from '@angular/core';
import { RouterModule}     from "@angular/router";
import { ServicesService }    from "../../services/services.service";
import { Equipo }    from "../../models/Equipo";
import swal from "sweetalert2";
import {FormGroup,FormBuilder, Validators} from "@angular/forms";



@Component({
  selector: 'app-registrar-equipo',
  templateUrl: './registrar-equipo.component.html',
  styleUrls: ['./registrar-equipo.component.css']
})
export class RegistrarEquipoComponent implements OnInit {
  signupForm:FormGroup
  constructor(private service:ServicesService,private router:RouterModule,private _builder:FormBuilder) {
    this.signupForm=this._builder.group({
      serquipo:['',Validators.required],
      numlinea:['',Validators.required],
      marca:['',Validators.required],
      descripcion:['',Validators.required],
      estado:['',Validators.required],
   })

   }

  ngOnInit() {
  }

  equipo:Equipo=new Equipo();
  public errorMsg;
  mostrarError:boolean=false;


  GuardarEquipo(){
    this.service.createEquipo(this.equipo)
    .subscribe(data=>{
      swal.fire(
        'Registro Exitoso!',
        'Por Favor Presiona El Boton Ok Para Continuar!',
        'success'
      )
      this.equipo=new Equipo();
    },
    );
    console.log("paso por aca");
  }
  buscarLinea=[];
  ConsultarLinea(){
    this.service.getlinea(this.equipo.linumerolinea)
                .subscribe(data=>{
                  this.buscarLinea=data;
                  if(this.buscarLinea==null){
                    this.mostrarError=true;
                    this.errorMsg="La Linea No Existe En El Sistema";
                  }else{
                    this.GuardarEquipo();
                    this.mostrarError=false;
                  }

                })
  }

  
  buscarEquipo=[];
  ConsultarYGuardarEquipo(){
    this.service.getEquipo(this.equipo.equserial)
                .subscribe(data=>{
                  this.buscarEquipo = data;
                  if(this.buscarEquipo!=null){
                    this.mostrarError=true;
                    this.errorMsg="El Serial:"+this.equipo.equserial+" Ya Existe En El Sistema";
                  }else{
                    this.ConsultarLinea();
                    this.mostrarError=false;
                  }
  })
  }




}
