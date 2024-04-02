import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, CommonModule, FormsModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent {
  textoPesquisa: string | undefined;

  pesquisar() {
    if(!this.pesquisar) {
      this.listaDeProdutosFiltro = this.listaDeProdutos
    } else { this.listaDeProdutosFiltro = this.listaDeProdutos.filter(item => item.descricao === this.textoPesquisa)
  }
}

  listaDeProdutos = [
    {
      imagem: 'assets/marcket-car.jpg',
      descricao: 'Fruta A'
    },
    {
      imagem: 'assets/marcket-car.jpg',
      descricao: 'Fruta B'
    },
    {
      imagem: 'assets/marcket-car.jpg',
      descricao: 'Fruta C'
    },
    {
      imagem: 'assets/marcket-car.jpg',
      descricao: 'Fruta D'
    },
  ]

  listaDeProdutosFiltro = this.listaDeProdutos
}
