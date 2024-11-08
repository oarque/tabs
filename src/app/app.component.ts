import { Component } from '@angular/core';
import { Tabs2Module } from '@coreui/angular';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterModule, Tabs2Module],
  standalone: true,
})
export class AppComponent {
  title = 'CoreUI-Angular Tabs Example';
}
