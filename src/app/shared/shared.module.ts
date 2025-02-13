import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ]
})
export class SharedModule { }
