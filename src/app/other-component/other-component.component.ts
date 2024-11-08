import { Component } from '@angular/core';
import { Tabs2Module } from '@coreui/angular';

@Component({
  selector: 'app-other-component',
  standalone: true,
  imports: [Tabs2Module],
  templateUrl: './other-component.component.html',
  styleUrl: './other-component.component.scss'
})
export class OtherComponentComponent {

}
