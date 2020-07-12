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
  randomLine: string;


  constructor(private announcementService: AnnouncementService) { }

  ngOnInit(): void {
    this.setRandomLine();
    console.log(this.announcement.date);
  }


  setRandomLine() {
    const arr = ['yellow', 'red', 'green'];
    this.randomLine = arr[Math.floor(Math.random() * Math.floor(3))];
  }

  deleteAnnouncement(id: string) {
    this.announcementService.deleteAnnouncement(id);
  }

}
