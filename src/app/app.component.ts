import { Component } from '@angular/core';
import {HeroComponent} from "./components/hero/hero.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [HeroComponent, NavbarComponent,  NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jay-portfolio';
}
