import { Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { ProjectViewComponent } from './project-view/project-view.component';

export const routes: Routes = [
    { path: 'home', component: ProjectViewComponent },
    { path: 'project/:id', component: ProjectViewComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' },
    // if the path is not found, redirect to home
    //{ path: '**', redirectTo: 'home' }
  ];


