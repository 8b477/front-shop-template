import { Component } from '@angular/core';
import { ItemPannierComponent } from '../../components/item-pannier/item-pannier.component';

@Component({
  selector: 'app-pannier',
  standalone: true,
  templateUrl: './pannier.component.html',
  imports: [ItemPannierComponent],
})
export class PannierComponent {}
