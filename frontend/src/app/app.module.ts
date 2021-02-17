import { AdminModule } from './modules/admin/admin.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout/admin-layout.component';
import { AdminLayoutHeaderComponent } from './layouts/admin/admin-layout-header/admin-layout-header.component';
import { AdminLayoutFooterComponent } from './layouts/admin/admin-layout-footer/admin-layout-footer.component';
import { AdminLayoutNavbarComponent } from './layouts/admin/admin-layout-navbar/admin-layout-navbar.component';
import { AdminLayoutSidebarComponent } from './layouts/admin/admin-layout-sidebar/admin-layout-sidebar.component';
import { DefaultLayoutComponent } from './layouts/default/default-layout/default-layout.component';
import { DefaultLayoutHeaderComponent } from './layouts/default/default-layout-header/default-layout-header.component';
import { DefaultLayoutFooterComponent } from './layouts/default/default-layout-footer/default-layout-footer.component';
import { DefaultLayoutSidebarComponent } from './layouts/default/default-layout-sidebar/default-layout-sidebar.component';
import { DefaultLayoutNavbarComponent } from './layouts/default/default-layout-navbar/default-layout-navbar.component';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AdminLayoutHeaderComponent,
    AdminLayoutFooterComponent,
    AdminLayoutNavbarComponent,
    AdminLayoutSidebarComponent,
    DefaultLayoutComponent,
    DefaultLayoutHeaderComponent,
    DefaultLayoutFooterComponent,
    DefaultLayoutSidebarComponent,
    DefaultLayoutNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule,
    FlexLayoutModule,
    HomeModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
