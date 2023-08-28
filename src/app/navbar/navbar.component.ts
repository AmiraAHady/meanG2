import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar', //component directive
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  logo: string = 'Netflix';
  navbarLinks: string[] = ['Home', 'Movies', 'TVShow', 'About', 'contact us'];
  language: string = 'en-Us';
  isLogin:boolean=false;
  //'ar-SA'
  constructor() {}

  changeLanguage() {
    this.language = this.language == 'en-Us' ? 'ar-SA' : 'en-Us';
  }
}
