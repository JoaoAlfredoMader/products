import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidatorService } from '../shared/services/custom-validator.service';
import {MatButtonModule} from '@angular/material/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule, MatButtonModule, ToastModule],
  providers:[CustomValidatorService, MessageService],
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  form = new FormGroup({
    nome: new FormControl('',[ Validators.required, this.CustomValidatorService.validaNomeCompleto()]),
    codigoUsuario: new FormControl('',[Validators.minLength(5), Validators.maxLength(10), Validators.required]),
    senha: new FormControl('',[Validators.minLength(4), Validators.required]),
    confirmarSenha: new FormControl('',[Validators.minLength(4), Validators.required])
  })

  constructor(private CustomValidatorService: CustomValidatorService, private messageService: MessageService) {

  }

  cadastrar() {
    console.log(this.form)
    if(this.form.valid) {
      const usuario = {
       codigoUsuario: this.form.value.codigoUsuario,
       senha: this.form.value.senha
      }
      window.localStorage.setItem('usuario logado', JSON.stringify(usuario))
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Usuario Logado' });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Success', detail: 'Formulario invalido' });

    }
  }
}
