import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import {  FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
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