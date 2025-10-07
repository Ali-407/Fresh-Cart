import { Component } from '@angular/core';
import { MainSliderComponent } from "../../components/main-slider/main-slider.component";
import { HomeCategoryComponent } from "../../components/home-category/home-category.component";
import { ProductsComponent } from "../../../products/pages/products/products.component";

@Component({
  selector: 'app-home',
  imports: [MainSliderComponent, HomeCategoryComponent, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
