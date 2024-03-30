import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule  ],
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  form = new FormGroup({
    nome: new FormControl('',[Validators.minLength(3), Validators.required]),
    codigoUsuario: new FormControl('',[Validators.minLength(5), Validators.maxLength(10), Validators.required]),
    senha: new FormControl('',[Validators.minLength(4), Validators.required]),
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
