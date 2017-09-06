import { ArchiveComponent } from './archive/archive.component';
import { HomeComponent } from './home/home.component';
import { Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'archive',
        component: ArchiveComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
]