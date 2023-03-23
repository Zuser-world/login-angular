import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseErrorService {

  constructor() { }
  firebaseError(code: string){
    switch(code){
      // El Correo ya Existe
      case FirebaseCodeErrorEnum.EmailAlreadyInUse:
        return 'El Usuario ya Existe';
      // Contraseña debil
      case FirebaseCodeErrorEnum.WeakPassword:
        return 'La contraseña es muy debil';
      // Correo Invalido
      case FirebaseCodeErrorEnum.InvalidEmail:
        return 'Correo Invalido'
      // Contraseña Incorrecta
      case FirebaseCodeErrorEnum.WrongPassword:
        return 'Contraseña Invalida';
      // Correo No Encontrado
      case FirebaseCodeErrorEnum.UserNotFound:
        return 'Usuario no encontrado'
      default:
        return 'Error desconocido';
    }
  }
}
