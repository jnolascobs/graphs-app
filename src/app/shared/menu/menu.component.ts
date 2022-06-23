import { Component } from '@angular/core';

interface MenuItem {
  route: string;
  text: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `
  ]
})
export class MenuComponent {

  menu: MenuItem[] = [
    {route: '/graphics/bar', text: 'Barrras'},
    {route: '/graphics/double-bar', text: 'Barras Dobles'},
    {route: '/graphics/doughnut', text: 'Donut'},
    {route: '/graphics/doughnut-http', text: 'Donut Http'},

  ]

}
