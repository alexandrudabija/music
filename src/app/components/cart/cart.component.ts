import { Component ,EventEmitter,Output,Input} from '@angular/core';
import { ShopComponent } from 'src/app/pages/shop/shop.component';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent {

constructor (public shop :ShopComponent)
{


}

  @Output() onClose = new EventEmitter<any>();


@Input() cart:any ;

      toggle()
      {
        this.onClose.emit();
      
      }
      




}
