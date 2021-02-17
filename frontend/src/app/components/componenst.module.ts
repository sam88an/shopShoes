import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    RouterModule,
    MatCardModule,
    FlexLayoutModule,
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
  ],
  providers: [],
})
export class ComponentsModule {}
