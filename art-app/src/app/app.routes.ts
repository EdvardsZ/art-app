import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProjectViewComponent } from './project-view/project-view.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: ProjectViewComponent },
    { path: 'project/:id', component: ProjectViewComponent },
    { path: 'contacts', component: ContactsComponent }
    // if the path is not found, redirect to home
    //{ path: '**', redirectTo: 'home' }
  ];


