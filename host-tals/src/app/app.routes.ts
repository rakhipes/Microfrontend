import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [{path:'home', component:HomeComponent},
    {path:'sample', loadChildren:()=>{ return loadRemoteModule({
    type:'module',
    remoteEntry:"http://localhost:4001/remoteEntry.js",
    exposedModule:"./SampleModule"
    }).then((m)=>m.AppModule)
    .catch(err=>console.log('error occuredd:' ,err))
    }
    },
    { path:'login', loadChildren:()=>{ return loadRemoteModule({
        type:'module',
        remoteEntry:"http://localhost:4002/remoteEntry.js",
        exposedModule:"./LoginModule"
        }).then((m)=>m.LoginModule)
        .catch(err=>console.log('error occuredd:' ,err))
        }
    }
];
