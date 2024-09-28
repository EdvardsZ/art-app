import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-view',
  standalone: true,
  imports: [],
  templateUrl: './project-view.component.html',
  styleUrl: './project-view.component.scss'
})
export class ProjectViewComponent {
  project_folder: string = '';
  constructor(private route: ActivatedRoute){
    this.route.params.subscribe( params => {
      const id = params['id'];
      if (id) {
        this.project_folder = id;
      }
      else {
        this.project_folder = '';
      }
    });
  }
}
