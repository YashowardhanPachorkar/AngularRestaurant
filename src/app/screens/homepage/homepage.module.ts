import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { TitleComponent } from './components/title/title.component';
import { KeyFeaturesComponent } from './components/key-features/key-features.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { FooterComponent } from './components/footer/footer.component';
import { FullhomepageComponent } from './components/fullhomepage/fullhomepage.component';


@NgModule({
  declarations: [
    TitleComponent,
    KeyFeaturesComponent,
    ReviewsComponent,
    FooterComponent,
    FullhomepageComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
