import { CommonModule, registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DetailProduitComponent } from '../detail-produit/detail-produit.component';
import localeFr from '@angular/common/locales/fr';

export interface Produit {
  id: number;
  nom: string;
  prix: number;
  quantite: number;
  image: string;
  description: string;
}
registerLocaleData(localeFr, 'Fr');

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule, DetailProduitComponent],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css',
})
export class ProduitComponent implements OnInit {


  produits: Produit[] = [
    {
      id: 1,
      nom: 'Produit 1',
      prix: 100,
      quantite: 10,
      image: 'https://media.ccmbg.com/tc/4881385133/929330/1637230514',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
    },
    {
      id: 2,
      nom: 'Produit 2',
      prix: 200,
      quantite: 20,
      image: 'https://media.ccmbg.com/tc/4881385133/929330/1637230514',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
    },
    {
      id: 3,
      nom: 'Produit 3',
      prix: 300,
      quantite: 30,
      image: 'https://media.ccmbg.com/tc/4881385133/929330/1637230514',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
    },
    {
      id: 4,
      nom: 'Produit 4',
      prix: 400,
      quantite: 40,
      image: 'https://media.ccmbg.com/tc/4881385133/929330/1637230514',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
    },
    {
      id: 4,
      nom: 'Produit 4',
      prix: 400,
      quantite: 40,
      image: 'https://media.ccmbg.com/tc/4881385133/929330/1637230514',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
    },
    {
      id: 4,
      nom: 'Produit 4',
      prix: 400,
      quantite: 40,
      image: 'https://media.ccmbg.com/tc/4881385133/929330/1637230514',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
    },
  ];

  ngOnInit() {}

  selectedProduit: Produit | null = null;

  selectProduit(produit: Produit) {
    this.selectedProduit = produit;
  }
}
