import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthenticationService } from '../../../modules/Authentication/services/authentication.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  private readonly authenticationService=inject(AuthenticationService)

  @Input() authType:string=''
  isMobileOpen:boolean=false;

  toggleMoble(){
    this.isMobileOpen=!this.isMobileOpen
  }

  islogout(){
    this.authenticationService.islogout()
  }

  ngOnInit(): void{
    console.log(this.authenticationService.decodeToken());
    
  }
  


}
