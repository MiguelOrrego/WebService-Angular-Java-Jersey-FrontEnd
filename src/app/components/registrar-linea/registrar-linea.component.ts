import { Component,OnInit } from '@angular/core';
import { Persona }    from "../../models/Persona";
import { LineaTelefonica }    from "../../models/LineaTelefonica";
import { RouterModule,Router}     from "@angular/router";
import { ServicesService }    from "../../services/services.service";
import { Factura }    from "../../models/Factura";
import swal from "sweetalert2";
import {FormGroup,FormBuilder, Validators} from "@angular/forms";




@Component({
  selector: 'app-registrar-linea',
  templateUrl: './registrar-linea.component.html',
})
export class RegistrarLineaComponent implements OnInit {


  signupForm:FormGroup


  constructor(private service:ServicesService,private router:Router,private _builder:FormBuilder){

    this.signupForm=this._builder.group({
      numeroLinea:['',Validators.required],
      linestado:['',Validators.required],
      tipo_plan:['',Validators.required],
      cedula:['',Validators.required],
   })
  }

  personas: Persona[];

  ngOnInit() {
  }

  lineatelefonica:LineaTelefonica=new LineaTelefonica();
  factura:Factura=new Factura();
  persona:Persona=new Persona();
  mostrarError:boolean=false;
  errorMsg:String;

  
 
  GuardarFactura(){
    this.factura.linumerolineas=this.lineatelefonica.linumerolinea;
    this.factura.facvalor=this.lineatelefonica.tipo_plan;
     this.service.createFactura(this.factura)
    .subscribe(data=>{
    })
  }
  GuardarLinea(){
    this.service.createLinea(this.lineatelefonica)
    .subscribe(data=>{
      swal.fire(
        'Registro Exitoso!',
        'Por Favor Presiona El Boton Ok Para Continuar!',
        'success'
      )
      this.router.navigate(["RegistrarEquipo"]);
      this.factura=new Factura();
    })
   this.GuardarFactura();
  }
  buscarPersona=[];

  ConsultarPersona(){
    this.service.getPersona(this.lineatelefonica.percedula)
    .subscribe(data => {
      this.buscarPersona = data;
        if(this.buscarPersona==null){
          this.mostrarError=true;
          this.errorMsg="El Documento De La Persona No Se Encuentra! Debes Registrar El Documento";
        }else{
          this.GuardarLinea();
          this.mostrarError=false;
        }
        });
  }
  buscarLinea=[];
  ConsultarYGuardarLinea(){
    this.service.getlinea(this.lineatelefonica.linumerolinea)
                .subscribe(data=>{
                  this.buscarLinea=data;
                  if(this.buscarLinea!=null){
                    this.mostrarError=true;
                    this.errorMsg="La Linea Ya Existe En El Sistema";
                  }else{
                    this.ConsultarPersona();
                    this.mostrarError=false;
                  }

                })
  }
 

}
