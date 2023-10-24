import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar-badge',
  templateUrl: './avatar-badge.component.html',
  styleUrls: ['./avatar-badge.component.css'],
})
export class AvatarBadgeComponent implements OnInit {
  @Input() size: 's' | 'm' | 'l' = 's';
  @Input() color: 'success' | 'warning' | 'error' | 'neutral' = 'neutral';

  private readonly baseClass = 'avatar__badge';

  constructor() {}

  ngOnInit() {}

  get fontClass() {
    switch (this.size) {
      case 's':
        return this.baseClass + '--small';
      case 'm':
        return this.baseClass + '--medium';
      case 'l':
        return this.baseClass + '--large';
    }
  }

  get backgroundColorClass() {
    switch (this.color) {
      case 'error':
        return this.baseClass + '--error';
      case 'success':
        return this.baseClass + '--success';
      case 'warning':
        return this.baseClass + '--warning';
      case 'neutral':
        return this.baseClass + '--neutral';
    }
  }
}
