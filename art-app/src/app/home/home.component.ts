import { Component } from '@angular/core';
import { ProjectListComponent } from '../project-list/project-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
