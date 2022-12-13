import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IndexComponent } from './pages/index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CampusComponent } from './pages/campus/campus.component';
import { UserComponent } from './pages/user/user.component';
import { AcademyComponent } from './pages/academy/academy.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { StudioComponent } from './pages/studio/studio.component';
import { arrayObject } from './app-routing.module';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import {SwiperModule } from 'swiper/angular';
import { CartComponent } from './components/cart/cart.component';


@NgModule({
  declarations: [
    arrayObject,
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ShopComponent,
    CampusComponent,
    UserComponent,
    AcademyComponent,
    CoursesComponent,
    IndexComponent,
    StudioComponent,
    Navbar2Component,
    CartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
