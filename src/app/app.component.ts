import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerService, NgxSpinnerComponent } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  id=inject(PLATFORM_ID)
  
  title = 'fresh-cart';

  // ngOnInit():void{


  //   if(isPlatformBrowser(this.id)){
      
  //     localStorage.setItem('name','ali')
      
  //   }
  // }


  //   constructor(private spinner: NgxSpinnerService) {}

  // ngOnInit() {
  //   /** spinner starts on init */
  //   this.spinner.show('spinner1');

  //   setTimeout(() => {
  //     /** spinner ends after 5 seconds */
  //     this.spinner.hide('spinner1');
  //   }, 2000);
  // }
  
}
