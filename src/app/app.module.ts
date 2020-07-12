import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AnnouncementsComponent } from './components/announcements/announcements.component';
import { AnnouncementListComponent } from './components/announcements/announcement-list/announcement-list.component';
import { AnnouncementListItemComponent } from './components/announcements/announcement-list/announcement-list-item/announcement-list-item.component';
import { AnnouncementComponent } from './components/announcements/announcement/announcement.component';
import { AnnouncementTextPipe } from './pipes/announcement-text/announcement-text.pipe';
import { TimeAgoPipe } from './pipes/time-ago/time-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    SidebarComponent,
    AnnouncementsComponent,
    AnnouncementListComponent,
    AnnouncementListItemComponent,
    AnnouncementComponent,
    AnnouncementTextPipe,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
