import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../../services/announcement/announcement.service';
import { Announcement } from '../../models/Announcement.model';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {
  newAnnouncement: boolean;
  constructor(private announcementService: AnnouncementService) { }
  // announcements: Array<Announcement>;
  singleFetching: boolean = false;

  ngOnInit(): void {
    this.newAnnouncement = false;
    this.announcementService.fetchAnnouncements();
  }

  get announcements(): Array<Announcement> {
    return this.announcementService.announcements
  }

  get selectedAnnouncement(): Announcement {
    return this.announcementService.single_announcement;
  }

  fetchAnnouncement(id: string) {
    this.announcementService.fetchSingleAnnouncement(id)
  }


}
