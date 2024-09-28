import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GithubServiceService } from './github-service.service';
import { Project } from './project.interface';

import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav'
import { FooterComponent } from './footer/footer.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,

    FooterComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'art-app';
  projects: Project[] = [];

  constructor(private githubService: GithubServiceService) {
    this.githubService.getProjectsJSON().subscribe( res =>{
      this.projects = res;
    })
  }


}
