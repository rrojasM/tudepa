import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './pages/home/dashboard/dashboard.component';
import { CotizacionesComponent } from './pages/home/cotizaciones/cotizaciones.component';
import { InventariosComponent } from './pages/home/inventarios/inventarios.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: LoginComponent },
    {
        path: 'home', component: HomeComponent,
        children: [
            { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
            { path: 'inventarios', component: InventariosComponent },
            { path: 'cotizaciones', component: CotizacionesComponent }
        ]
    },
    { path: '**', component: NotFoundComponent }
];
