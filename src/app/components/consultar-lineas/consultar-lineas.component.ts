import { Component, OnInit } from '@angular/core';
import { ServicesService }    from "../../services/services.service";
import { RouterModule,Router}     from "@angular/router";
import { DatosLinea }    from "../../models/DatosLinea";
import {FormGroup,FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-consultar-lineas',
  templateUrl: './consultar-lineas.component.html',
  styleUrls: ['./consultar-lineas.component.css']
})
export class ConsultarLineasComponent implements OnInit {

  signupForm:FormGroup





  constructor(private service:ServicesService,private router:Router,private _builder:FormBuilder) {
    this.signupForm=this._builder.group({
      doc:['',Validators.required],
      numlinea:['',Validators.required],
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

  datoLinea = [];
  Consultar(){
    this.service.getLineaParaEditar(this.datoslinea.percedula,this.datoslinea.linumerolinea)
    .subscribe(data => {
      this.datoLinea = data;
      if(this.datoLinea.length>0){
        this.mostrarTabla=true;
        this.mostrarError=false;
        this.router.navigate(["ConsultarLineas"]);
        this.datoslinea=new DatosLinea();
      }
    },
    );
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
          this.Consultar();
          this.datoslinea=new DatosLinea();

        }
        });
}
}
