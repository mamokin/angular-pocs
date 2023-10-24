import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[avatarBadge]',
})
export class AvatarBadgeTemplateMarkerDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
