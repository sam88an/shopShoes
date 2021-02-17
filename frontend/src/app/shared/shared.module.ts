import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [MaterialModule, HttpClientModule, FlexLayoutModule, MatCardModule],
  exports: [MaterialModule, HttpClientModule, FlexLayoutModule, MatCardModule],
})
export class SharedModule {}
