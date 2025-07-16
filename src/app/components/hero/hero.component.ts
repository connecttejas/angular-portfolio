import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  animations: [
    trigger('staggerFadeInUp', [
      transition(':enter', [
        query('.hero-animate', [
          style({ opacity: 0, transform: 'translateY(40px)' }),
          stagger(120, [
            animate('700ms cubic-bezier(0.23, 1, 0.32, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class HeroComponent {

}
