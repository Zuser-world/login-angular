import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseError } from 'firebase/app';
import { ToastrService } from 'ngx-toastr';
import { FirebaseErrorService } from 'src/app/services/firebase-error.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent implements OnInit {
  recuperarUsuario: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private FirebaseError: FirebaseErrorService,
  ){
    this.recuperarUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  recuperar(){
    const email = this.recuperarUsuario.value.email
    this.loading = true;
    this.afAuth.sendPasswordResetEmail(email).then(() => {
      alert("Correo enviado\nPara restablecer la cuenta")
      this.router.navigate(['/login']);
    }).catch((error) => {
      this.loading = false;
      console.log(error)
      alert(this.FirebaseError.firebaseError(error.code))
    })
  }

}
