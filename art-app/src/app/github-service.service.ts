import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './project.interface';
import { ProjectImage } from './project-image.interface';
@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  REPO_URL = "https://raw.githubusercontent.com/EdvardsZ/art-app/main/";

  constructor(private http: HttpClient) { }

  getProjectsJSON() {
    return this.http.get<Project[]>(this.REPO_URL + 'data/projects.json')
  }

  getProjectData(project_folder: string) {
    return this.http.get<ProjectImage[]>(this.REPO_URL + 'data/' + project_folder + '/project_data.json')
  }
}
