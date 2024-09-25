import { Component } from '@angular/core';
import { GithubServiceService } from '../github-service.service';
import { Project } from '../project.model';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
  ingredientList = [    {name: 'noodles', quantity: 1},    {name: 'miso broth', quantity: 1},    {name: 'egg', quantity: 2},  ];
  projects: Project[] = [];
    constructor(private githubService: GithubServiceService) {
        this.githubService.getProjectsJSON().subscribe((data) => {
            console.log(data);
            for (let project of data) {
                console.log(project);
            }
            this.projects = data;
        });
    }
}
