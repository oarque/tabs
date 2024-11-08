import { Routes } from '@angular/router';
import { OtherComponentComponent } from './other-component/other-component.component';
import { TabsComponent } from './tabs/tabs.component';

// Defineix les rutes de l'aplicació
export const routes: Routes = [
    { path: 'page1', component: OtherComponentComponent },
    { path: 'page2', component: TabsComponent },
    { path: '', redirectTo: '/page1', pathMatch: 'full' } // Ruta per defecte
];
