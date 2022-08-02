
import { Component } from '@angular/core';
import { AuthService } from '@bluebits/users';
@Component({
  selector: 'ngshop-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
constructor(
  private authService:AuthService
){

}
  search(){

  }
  logout2User() {
    this.authService.logout();

  }



}
