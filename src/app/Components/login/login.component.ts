import { Component, inject } from '@angular/core';
import { AccesoService } from '../../Services/acceso.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../Interfaces/Login';
import { SharedModule } from '../../Reutilizable/shared/shared.module';
import { UsuarioService } from '../../Services/usuario.service';
import { UtilidadService } from '../../Reutilizable/utilidad.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  ocultarPassword:boolean=true;
  mostrarLoading:boolean=false;
  private accessoService = inject(UsuarioService);
  private router = inject(Router);
  public formBuild = inject(FormBuilder);
  private utilidadServicio= inject(UtilidadService)

  public formLogin: FormGroup = this.formBuild.group({
    correo:['',Validators.required],
    clave:['',Validators.required]
  })

  iniciarSesion(){
    this.mostrarLoading=true;
    
    if(this.formLogin.invalid) return;

    const objeto:Login ={
      correo: this.formLogin.value.correo,
      clave: this.formLogin.value.clave
    }

    this.accessoService.iniciarSesion(objeto).subscribe({
      next:(data) =>{
        if(data.resultado){
          //localStorage.setItem("token",data.token)
          this.utilidadServicio.guardarSesionUsuario(data.value);
          this.router.navigate(["pages"])
        }
        else{
          this.utilidadServicio.mostrarAlerta("Credenciales son incorrectas","Opps!")
        }
      },
      complete:()=>{
        this.mostrarLoading=false;
      },
      error:()=>{
        this.utilidadServicio.mostrarAlerta("Hubo un error","Opps!")
      }
    })
  }

}
