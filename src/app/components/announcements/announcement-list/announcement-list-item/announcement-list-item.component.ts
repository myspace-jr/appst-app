import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Announcement } from '../../../../models/Announcement.model';
import { AnnouncementService } from '../../../../services/announcement/announcement.service'

@Component({
  selector: 'app-announcement-list-item',
  templateUrl: './announcement-list-item.component.html',
  styleUrls: ['./announcement-list-item.component.scss']
})
export class AnnouncementListItemComponent implements OnInit {

  @Input() announcement: Announcement;
  @Input() selected: boolean;



  constructor(private announcementService: AnnouncementService) { }

  ngOnInit(): void {

  }

  deleteAnnouncement(id: string) {
    this.announcementService.deleteAnnouncement(id);
  }

}
