import {
  Component,
  HostListener,
  AfterViewInit
} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements AfterViewInit {

  active: string = 'home';

  sections: string[] = [
    'home',
    'about',
    'experience',
    'projects',
    'skills',
    'certifications',
    'beyond-work',
    'contact'
  ];

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updateActiveSection();
    }, 100);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateActiveSection();
  }

  setActive(section: string): void {
    this.active = section;

    history.replaceState(
      null,
      '',
      `${window.location.pathname}#${section}`
    );
  }

  private updateActiveSection(): void {

    const scrollPosition =
      window.scrollY + 180;

    let currentSection = 'home';

    for (const sectionId of this.sections) {

      const section =
        document.getElementById(sectionId);

      if (!section) {
        continue;
      }

      if (section.offsetTop <= scrollPosition) {
        currentSection = sectionId;
      }
    }

    if (this.active !== currentSection) {

      this.active = currentSection;

      history.replaceState(
        null,
        '',
        `${window.location.pathname}#${currentSection}`
      );
    }
  }
}