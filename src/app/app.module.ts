import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BulletinBoardComponent } from './components/bulletin-board/bulletin-board.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, BulletinBoardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
