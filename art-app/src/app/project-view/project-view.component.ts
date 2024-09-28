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
  project_folder: string = '';
  project_images: ProjectImage[] = [];
  constructor(
    private route: ActivatedRoute,
    private githubService: GithubServiceService
  ){
    this.route.params.subscribe( params => {
      const id = params['id'];
      if (id) {
        this.project_folder = id;
      }
      else {
        this.project_folder = '';
      }
    });

    this.githubService.getProjectData(this.project_folder).subscribe( (res) => {
      this.project_images = res;
      console.log(this.project_images);
    },
    (err) => {
      console.log("No project data found for " + this.project_folder);
      console.log("Loading default view");
    }

  );
  }
}
