import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {
  @Input() announcement;

  constructor() { }

  ngOnInit(): void {
  }

  deleteAnnouncement(id) {

  }

}
