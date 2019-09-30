import { Component, OnInit } from '@angular/core';
import { ServicesService }    from "../../services/services.service";
import { RouterModule}     from "@angular/router";
import { Persona }    from "../../models/Persona";
import swal from "sweetalert2";
import {FormGroup,FormBuilder, Validators} from "@angular/forms";




@Component({
  selector: 'app-registrar-personas',
  templateUrl: './registrar-personas.component.html',
  styleUrls: ['./registrar-personas.component.css']
})
export class RegistrarPersonasComponent implements OnInit {
  signupForm:FormGroup

  constructor(private service:ServicesService,private router:RouterModule,private _builder:FormBuilder) { 
    this.signupForm=this._builder.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      telefono:['',Validators.required],
      cedula:['',Validators.required],
      fechanac:['',Validators.required],
     
   })
  }

  ngOnInit() {
  }
  persona:Persona=new Persona();
  public errorMsg;
  mostrarError:boolean=false;


  GuardarPersona(){
    this.service.createPersona(this.persona)
    .subscribe(data=>{
      swal.fire(
        'Registro Exitoso!',
        'Por Favor Presiona El Boton Ok Para Continuar!',
        'success'
      )
      this.persona=new Persona();
    },
    );
    console.log("paso por aca");
  }
  buscarPersona=[];

  ConsultarYGuardarPersona(){
    this.service.getPersona(this.persona.percedula)
                .subscribe(data=>{
                  this.buscarPersona = data;
                  if(this.buscarPersona!=null){
                    this.mostrarError=true;
                    this.errorMsg="La Persona Ya Existe En El Sistema";
                  }else{
                    this.GuardarPersona();
                    this.mostrarError=false;
                  }
                })
  }

}
