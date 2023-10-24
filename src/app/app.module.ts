import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponentModule } from './hello.component';
import { AvatarComponent } from './avatar/avatar/avatar.component';
import { AvatarBadgeComponent } from './avatar/avatar-badge/avatar-badge.component';
import { AvatarBadgeTemplateMarkerDirective } from './avatar/template-marker-directive';
import { AvatarGroupComponent } from './avatar/avatar-group/avatar-group/avatar-group.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HelloComponentModule],
  declarations: [
    AppComponent,
    AvatarComponent,
    AvatarBadgeComponent,
    AvatarBadgeTemplateMarkerDirective,
    AvatarGroupComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
