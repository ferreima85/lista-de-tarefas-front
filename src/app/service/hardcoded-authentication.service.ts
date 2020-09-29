import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(usuario, senha) {
    if(usuario === 'marco' && senha === '123') {
      sessionStorage.setItem('authenticateUser', usuario)
      return true;
    }
    return false;
  }
  
  isUserLoggedIn() {
    let usuario = sessionStorage.getItem('authenticateUser')
    return !(usuario === null)
  }

  logout(){
    sessionStorage.removeItem('authenticateUser')
  }
}
