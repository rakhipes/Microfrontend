import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadChildren: () =>
    import('./sample.module').then((m) => m.AppModule),
}];
