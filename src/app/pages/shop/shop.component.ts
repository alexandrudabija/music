import {
  Component,
  ViewEncapsulation,
  Output,
  Input,
  EventEmitter,
  Injectable,
} from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class ShopComponent {

  showCart = false;
  
  cart: any = [];

  ngOnInit(): void {

  }


  arrayObj: Array<any> = [
    {
      id: 1,
      name: 'piano',
      brand: 'Yamaha',
      price: 2000,
      img: 'assets/sliders/a.jpg',
      quantity: 1,
    },
    {
      id: 2,
      name: 'microphone',
      brand: 'LGS',
      price: 1000,
      img: 'assets/sliders/b.jpg' ,

      quantity: 1,
    },
    {
      id: 3,
      name: 'drum',
      brand: 'Pearl',
      price: 3000,
      img: 'assets/sliders/c.jpg',
      quantity: 1,
    },
    {
      id: 4,
      name: 'microphone',
      brand: 'SGR',
      price: 1400,
      img: 'assets/sliders/d.jpg',
      quantity: 1,
    },
    {
      id: 5,
      name: 'Guitar',
      brand: 'Cordoba',
      price: 1500,
      img: 'assets/sliders/e.jpg',
      quantity: 1,
    },
    {
      id: 6,
      name: 'microphone',
      brand: 'Snure',
      price: 1600,
      img: 'assets/sliders/f.jpg',
      quantity: 1,
    },
    {
      id: 7,
      name: 'Guitar',
      brand: 'Silvano',
      price: 1800,
      img: 'assets/sliders/g.jpg',
      quantity: 1,
    },
    {
      id: 8,
      name: 'Violin',
      brand: 'Antonio Stradivari',
      price: 100000,
      img: 'assets/sliders/h.jpg',
      quantity: 1,
    },
  ];

  // add 
  addOnCart(id: number) {

    //we did to check if the object is already in the bin so we don't push double array !
    const isITeamInCart: any = this.cart.filter((item: any) => item.id === id);


// check if the item is already in the cart so you don't see a duplicate !
    if (isITeamInCart.length === 0) 
    {
                this.arrayObj.filter((item: any) => {
                  if (item.id == id) {
                    console.log('arrayObj', item);
                    this.cart.push(item);
                  }
                });
    } 
    // if the article is not in the cart  we increase the quantity with operator Spread
    else {
                this.cart.map((item: any) => {
                  if (item.id == id) {
                    return { ...item, quantity: item.quantity++ };
                  }
                });
              }
  }

  toggleCart() {
    this.showCart = !this.showCart;
  }

  delete(id: number) {
    this.cart = this.cart.filter((item: any) => item.id !== id);
    // console.log(this.cart);
  }















  swiperConfig: any = {
    breakpoints: {
      1000: {
        spaceBetween: 20,
        slidesPerView: 3,
        Pagination: true,
        Scrollbar: true,
        Navigation: true,
      },
      600: {
        spaceBetween: 14,
        slidesPerView: 2,
        Pagination: true,
        Scrollbar: true,
        Navigation: true,
      },

      0: {
        spaceBetween: 10,
        slidesPerView: 1,
        Pagination: true,
        Scrollbar: true,
        Navigation: true,
      },
    },
  };

}
