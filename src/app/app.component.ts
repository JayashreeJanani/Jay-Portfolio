import { Component } from '@angular/core';
import { HeroComponent } from "./components/hero/hero.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AboutMeComponent } from './components/about-me/about-me.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, NavbarComponent, AboutMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jay-portfolio';
}
