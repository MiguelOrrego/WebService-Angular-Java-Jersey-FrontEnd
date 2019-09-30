import { Component, OnInit } from '@angular/core';
import { ServicesService }    from "../../services/services.service";
import { RouterModule,Router}     from "@angular/router";
import { DatosLinea }    from "../../models/DatosLinea";
import swal from "sweetalert2";
import {FormGroup,FormBuilder, Validators} from "@angular/forms";



@Component({
  selector: 'app-actualizar-estado-linea',
  templateUrl: './actualizar-estado-linea.component.html',
  styleUrls: ['./actualizar-estado-linea.component.css']
})
export class ActualizarEstadoLineaComponent implements OnInit {

  signupForm:FormGroup

  constructor(private service:ServicesService,private router:Router,private _builder:FormBuilder) {
    this.signupForm=this._builder.group({
      doc:['',Validators.required],
      numlinea:['',Validators.required],
      estado:['',Validators.required],
      tipo_plan:['',Validators.required],
   })
   }

  ngOnInit() {
  }
  mostrarError:boolean=false;
  errorMsg:String;
  datoslinea:DatosLinea=new DatosLinea();
  buscarPersona=[];
  mostrarTabla:boolean=false;



  buscarLinea=[];
  ValidacionLinea(){
    this.service.getlinea(this.datoslinea.linumerolinea)
        .subscribe(data=>{
          this.buscarLinea=data;
          if(this.buscarLinea==null){
            this.mostrarError=true;
            this.errorMsg="La Linea No Se Encuentra Vinculda A El Nro De Documento:"+this.datoslinea.percedula;
            this.mostrarTabla=false;

          }else{
            this.mostrarError=false;
            this.datoslinea=new DatosLinea();

           
          }

          })
  }

  datoLinea=[];

  Actualizar(){
    this.service.updateLineaEstado(this.datoslinea)
                .subscribe(data=>{
                  swal.fire(
                    'Se Actualizo Exitosamente La Linea!',
                    'Por Favor Presiona El Boton Ok Para Continuar!',
                    'success'
                  )
                this.router.navigate(["ActualizarLinea"])
                })

  }
  

  validacionPersona(){
    this.service.getPersona(this.datoslinea.percedula)
    .subscribe(data => {
      this.buscarPersona = data;
        if(this.buscarPersona==null){
          this.mostrarError=true;
          this.errorMsg="El Documento De La Persona No Se Encuentra Vinculda A El Nro De Linea:"+this.datoslinea.linumerolinea;
          this.mostrarTabla=false;
          this.datoslinea=new DatosLinea();

        }else{
          this.mostrarError=false;
          this.ValidacionLinea();
          this.Actualizar()
          this.datoslinea=new DatosLinea();

        }
        });
  }

 
 

   
  
}
