import { Component, inject, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Categories } from '../../models/categorie';
import { CategoryService } from '../../services/category.service';
;

@Component({
  selector: 'app-home-category',
  imports: [CarouselModule],
  templateUrl: './home-category.component.html',
  styleUrl: './home-category.component.scss'
})
export class HomeCategoryComponent implements OnInit {

    private readonly categoryService=inject(CategoryService)
  customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 800,
  navText: [

  '<span class="nav-btn-modern">←</span>',
  '<span class="nav-btn-modern">→</span>'
],
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
  responsive: {
    0: { items: 2 },
    576: { items: 3 },
    768: { items: 5 },
    992: { items: 7 },
    1200: { items: 9 }
  },
  nav: true,
};


     categories:Categories[]=[]


      ngOnInit(): void {
        this.getAllCategory()
    }

    getAllCategory(){
        this.categoryService.getCategory().subscribe({
            next:(res)=>(
                this.categories=res.data
            )
        })
    }
}
