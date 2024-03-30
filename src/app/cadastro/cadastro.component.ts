import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  form = new FormGroup({
    nome: new FormControl(''),
    codigoUsuario: new FormControl(''),
    senha: new FormControl(''),
    confirmarSenha: new FormControl('')
  })

  cadastrar() {
    if(this.form.value.senha === this.form.value.confirmarSenha) {
      const usuario = {
       codigoUsuario: this.form.value.codigoUsuario,
       senha: this.form.value.senha
      }
      window.localStorage.setItem('usuario logado', JSON.stringify(usuario))
    }
  }
}
