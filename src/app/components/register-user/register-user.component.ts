import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FirebaseErrorService } from 'src/app/services/firebase-error.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  registrarUsuario : FormGroup;
  loading : boolean = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseErrorCode: FirebaseErrorService,
    ){
  this.registrarUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repetirpassword: ['', Validators.required],
    })
  }
  ngOnInit(): void {

  }

  registrar(){
    let usuario = this.registrarUsuario.value.email
    let password = this.registrarUsuario.value.password
    let repetirpassword = this.registrarUsuario.value.repetirpassword
    console.log(`El usuario que se registrará es: \n==> ${usuario}\nContraseña:\n==> ${password}\nContraseña - Repetida\n==> ${repetirpassword}`)
    //this.toastr.success('Hello world!', 'Toastr fun!');
    if (password != repetirpassword){
      alert("Las contraseñas no son iguales")
      return
    }
    this.loading = true;
    this.afAuth.createUserWithEmailAndPassword(usuario, password).then(
      () => {
      this.verificarCorreo();
    }).catch((error) => {
      this.loading = false;
      console.log(error)
      alert(this.firebaseErrorCode.firebaseError(error.code))
    })
  }
  verificarCorreo(){
    this.afAuth.currentUser
    .then(user => user?.sendEmailVerification())
    .then(() => {
      alert("Le enviamos un correo para su verificación")
      this.router.navigate(['/login']);
    })
  }
}
