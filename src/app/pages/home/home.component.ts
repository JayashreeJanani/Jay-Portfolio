import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { CertificationsComponent } from '../../components/certifications/certifications.component';
import { BeyondWorkComponent } from '../../components/beyond-work/beyond-work.component';
import {ContactComponent} from "../../components/contact/contact.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, 
    HeroComponent, 
    AboutMeComponent, 
    ExperienceComponent, 
    ProjectsComponent, 
    SkillsComponent, 
    CertificationsComponent, 
    BeyondWorkComponent,
    ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
