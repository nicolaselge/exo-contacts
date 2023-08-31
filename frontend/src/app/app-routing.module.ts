import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/pages/home/home.component';
import { UsersComponent } from './views/pages/users/users.component';

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "users", component: UsersComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }