import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadChildren: () =>
    import('./login.module').then((m) => m.LoginModule),
}];
