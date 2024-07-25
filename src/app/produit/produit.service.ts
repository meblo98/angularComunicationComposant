import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private produits: Produit[] = [
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

  getProduits(): Produit[] {
    return this.produits;
  }

  getProduitById(id: number): Produit | null {
    return this.produits.find(produit => produit.id === id) || null;
  }
}
