import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LaCollaComponent } from './pages/la-colla/la-colla.component';
import { LaGenteComponent } from './pages/la-gente/la-gente.component';
import { MagdalenaComponent } from './pages/magdalena/magdalena.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

export const routes: Routes = [ 
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'la-colla', component: LaCollaComponent },
    { path: 'la-gente', component: LaGenteComponent },
    { path: 'magdalena', component: MagdalenaComponent },
    { path: 'fotos', component: GalleryComponent },
    { path: '**', redirectTo: 'home' }
];
