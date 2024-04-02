import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login = {
    codigoUsuario: '',
    senha: '',
  }

  constructor( private router: Router) {}

  entrar() {
    if (this.login.codigoUsuario && this.login.senha) {
      this.router.navigate(['/home'])
    }
  }

  cadastroRoute() {
    this.router.navigate(['/cadastro'])
  }
}
