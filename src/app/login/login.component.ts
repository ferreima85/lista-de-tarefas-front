import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = ''
  senha = ''
  errorMessage = 'Usuário/Senha inválidos'
  invalidLogin = false

  constructor(private router: Router,
              private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin() {
//    if(this.usuario === 'marco' && this.senha === '123') {
  if(this.hardcodedAuthenticationService.authenticate(this.usuario, this.senha)) {
      this.router.navigate(['welcome',this.usuario])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
