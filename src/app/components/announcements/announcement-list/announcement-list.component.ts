import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Announcement } from '../../../models/Announcement.model';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.scss']
})
export class AnnouncementListComponent implements OnInit {
  @Input() announcements: Array<Announcement>;
  @Output() selectAnnouncementEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }


  selectAnnouncement(i) {
    this.selectAnnouncementEvent.emit(i);
  }
}
