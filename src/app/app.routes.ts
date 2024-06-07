import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LaCollaComponent } from './components/pages/la-colla/la-colla.component';
import { LaGenteComponent } from './components/pages/la-gente/la-gente.component';
import { MagdalenaComponent } from './components/pages/magdalena/magdalena.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';

export const routes: Routes = [ 
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'la-colla', component: LaCollaComponent },
    { path: 'la-gente', component: LaGenteComponent },
    { path: 'magdalena', component: MagdalenaComponent },
    { path: 'fotos', component: GalleryComponent },
    { path: '**', redirectTo: '' }
];
