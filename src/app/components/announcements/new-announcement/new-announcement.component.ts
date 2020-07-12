import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnnouncementService } from '../../../services/announcement/announcement.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-new-announcement',
  templateUrl: './new-announcement.component.html',
  styleUrls: ['./new-announcement.component.scss']
})
export class NewAnnouncementComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>()

  announcementForm = new FormGroup({
    author: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    text: new FormControl('', [Validators.required,
    Validators.maxLength(600),])
  });

  constructor(private announcementService: AnnouncementService, private _snackBar: MatSnackBar) { }
  randomLine: string;
  ngOnInit(): void {
    this.setRandomLine();
  }
  onFormSubmit() {
    this.announcementService.createAnnouncement(this.announcementForm.value).subscribe((res: any) => {
      this._snackBar.open('Announcement Created!', 'Dismiss', {
        duration: 5000
      });
      this.announcementService.fetchAnnouncements();
      this.announcementService.fetchSingleAnnouncement(res.announcement._id);
      this.close.emit(true);

    }, err => {
      this._snackBar.open('An error occurred!', 'Dismiss', {
        duration: 5000
      });

    });
  }
  setRandomLine() {
    const arr = ['yellow', 'red', 'green'];
    this.randomLine = arr[Math.floor(Math.random() * Math.floor(3))];
  }

  newAnnouncementClicked(e) {
    console.log(e.target)
    if (e.target.className.includes('closeAnn')) {
      this.close.emit(true);
    }
    console.log(e);
  }

}
