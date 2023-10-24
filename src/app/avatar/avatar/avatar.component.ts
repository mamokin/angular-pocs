import { ContentChild } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AvatarBadgeTemplateMarkerDirective } from '../template-marker-directive';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css'],
})
export class AvatarComponent implements OnInit {
  @ContentChild(AvatarBadgeTemplateMarkerDirective)
  badge!: AvatarBadgeTemplateMarkerDirective;
  @Input() type?: 'template' | 'select' | 'project' | 'fallback';
  @Input() initials?: string;

  constructor() {}

  ngOnInit() {}
}
