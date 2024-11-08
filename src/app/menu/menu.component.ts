import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-menu',
  template: `
    <nav>
      <ul>
        <li><a routerLink="/pagina1">Page 1</a></li>
        <li><a routerLink="/pagina2">Page 2</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
  imports: [RouterModule]
})
export class MenuComponent { }
