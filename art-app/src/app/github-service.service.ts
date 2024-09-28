import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './project.interface';
@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  REPO_URL = "https://raw.githubusercontent.com/EdvardsZ/art-app/main/";

  constructor(private http: HttpClient) { }

  getProjectsJSON() {
    return this.http.get<Project[]>(this.REPO_URL + 'data/projects.json')
  }
}
