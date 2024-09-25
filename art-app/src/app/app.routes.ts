import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { Project } from './project.model';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contacts', component: ContactsComponent },
    // project path with the id of the project
    { path: 'project/:id', component: ProjectViewComponent },
    // if the path is not found, redirect to home
    { path: '**', redirectTo: 'home' }
  ];


