import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  lista = [
    {
      imagem: 'assets/marcket-car.jpg',
      descricao: 'Produto A'
    },
    {
      imagem: 'assets/marcket-car.jpg',
      descricao: 'Produto B'
    },
    {
      imagem: 'assets/marcket-car.jpg',
      descricao: 'Produto C'
    },
    {
      imagem: 'assets/marcket-car.jpg',
      descricao: 'Produto D'
    },
  ]
}
