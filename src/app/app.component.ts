import { Component } from '@angular/core';
import { HeroComponent } from "./components/hero/hero.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import {ProjectsComponent} from "./components/projects/projects.component";
import {SkillsComponent} from "./components/skills/skills.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, NavbarComponent, AboutMeComponent, ExperienceComponent, ProjectsComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jay-portfolio';
}
