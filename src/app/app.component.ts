import { Component } from '@angular/core';
import { HeroComponent } from "./components/hero/hero.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, NavbarComponent, AboutMeComponent, ExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jay-portfolio';
}
