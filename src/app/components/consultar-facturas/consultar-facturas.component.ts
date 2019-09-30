import { Component, OnInit } from '@angular/core';
import { ServicesService }    from "../../services/services.service";
import { RouterModule,Router}     from "@angular/router";
import { Post }    from "../../models/Post";
import swal from "sweetalert2";
import {FormGroup,FormBuilder, Validators} from "@angular/forms";


@Component({
  selector: 'app-consultar-facturas',
  templateUrl: './consultar-facturas.component.html',
  styleUrls: ['./consultar-facturas.component.css']
})
export class ConsultarFacturasComponent implements OnInit {

  signupForm:FormGroup

  constructor(private service:ServicesService,private router:Router,private _builder:FormBuilder) {
    this.signupForm=this._builder.group({
      doc:['',Validators.required]
   })
  }

  ngOnInit() {
  }

  post = [];
  


  posts:Post=new Post();
  mostrarTabla:boolean=false;
  errorMsg:String;
  mostrarError:boolean=false;



  Consultar(){
    this.service.getFacturas(this.posts.userDoc)
    .subscribe(data => {
      this.post = data;
      if(this.post.length==0){
        this.mostrarTabla=false;
        this.mostrarError=true;
        this.errorMsg="El Documento De La Persona No Se Encuentra! Debes Registrar El Documento O No Tiene Una Linea Telefonica";
        this.router.navigate(["ConsultarFacturas"]);
        this.posts=new Post();

      }else{
        this.mostrarTabla=true;
        this.mostrarError=false;
        this.router.navigate(["ConsultarFacturas"]);
        this.posts=new Post();

      }
    },
    );
  }
  

  Eliminar(datos:number){
    swal.fire({
      title: 'Estas Seguro?',
      text:  `¿Seguro Desea Eliminar La Factura Nro:${datos}?!`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si,Eliminar!'
    }).then((result) => {
      if (result.value) {
        this.service.deleteFactura(datos)
    .subscribe(data=>{
      this.post=this.post.filter(p=>p!==datos);
      this.router.navigate(["ConsultarFacturas"]);
      this.mostrarTabla=false;
      this.posts=new Post();
    })
        swal.fire(
          'Eliminado!',
          'Se Ha Eliminado La Factura.',
          'success'
        )
      }
    })
    
  }

}
