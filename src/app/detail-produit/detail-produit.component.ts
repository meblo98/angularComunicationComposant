import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produit } from "../produit/produit.component";
@Component({
  selector: 'app-detail-produit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-produit.component.html',
  styleUrl: './detail-produit.component.css'
})
export class DetailProduitComponent {

  @Input() produit: Produit | null = null;
  
}
