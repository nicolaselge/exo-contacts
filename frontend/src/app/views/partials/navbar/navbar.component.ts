import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menu: boolean = true;
  menuBtn() {
      this.menu = !this.menu;
  }
  constructor() {}

  ngOnInit(): void {}
}
