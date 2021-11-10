import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroContainerComponent } from './hero/hero-container/hero-container.component';
import { HeroSingleComponent } from './hero/hero-single/hero-single.component';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroContainerComponent,
    HeroSingleComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
