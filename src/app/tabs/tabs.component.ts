import { Component } from '@angular/core';
import { Tabs2Module } from '@coreui/angular';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [Tabs2Module],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  title = 'CoreUI-Angular Tabs Example';
}
