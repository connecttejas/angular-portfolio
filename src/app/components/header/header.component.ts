import { Component, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('typedText', { static: false }) typedTextRef!: ElementRef;
  private text = 'Hello World !';
  private typingSpeed = 90;

  ngAfterViewInit() {
    this.typeText();
  }

  typeText() {
    const el = this.typedTextRef.nativeElement as HTMLElement;
    let i = 0;
    const type = () => {
      if (i <= this.text.length) {
        el.textContent = this.text.substring(0, i);
        i++;
        setTimeout(type, this.typingSpeed);
      }
    };
    type();
  }

  @HostListener('click', ['$event'])
  onNavClick(event: Event) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('nav-link') && target.getAttribute('href')?.startsWith('#')) {
      event.preventDefault();
      const sectionId = target.getAttribute('href')!.substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
