import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectImage } from '../project-image.interface';
import { GithubServiceService } from '../github-service.service';

@Component({
  selector: 'app-project-view',
  standalone: true,
  imports: [],
  templateUrl: './project-view.component.html',
  styleUrl: './project-view.component.scss'
})
export class ProjectViewComponent {
  projectFolder: string = '';
  projectImages: ProjectImage[] = [];
  constructor(
    private route: ActivatedRoute,
    private githubService: GithubServiceService
  ){
    this.route.params.subscribe( params => {
      const id = params['id'];
      if (id) {
        this.projectFolder = id;
      }
      else {
        this.projectFolder = 'home';
      }
      this.getProjectData(this.projectFolder);
    });
  }




  getProjectData(project_folder: string) {
    this.githubService.getProjectData(project_folder).subscribe( (res) => {
        this.projectImages = res;
        console.log(this.projectImages);
        console.log(this.projectImages[0]);
      },
      (err) => {
        console.log("No project data found for " + project_folder);
        console.log("Loading default view");
      }
    );
  }

}
