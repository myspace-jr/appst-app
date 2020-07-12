import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../server_config';
import { Announcement } from '../../models/Announcement.model';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  url = config.backend;

  announcements: Array<Announcement>
  single_announcement: Announcement = null;
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
  }

  fetchAnnouncements() {
    this.http.get(this.url + 'api/announcements').subscribe((result: Array<Announcement>) => {
      this.announcements = result;
    }
    )
  }

  fetchSingleAnnouncement(id: string) {
    this.http.get(this.url + 'api/announcements/' + id).subscribe((result: Announcement) => {
      this.single_announcement = result;
    })
  }

  deleteAnnouncement(id: string) {
    this.http.delete(this.url + 'api/announcements/' + id).subscribe((res: any) => {
      if (res.deleted) {
        this.fetchAnnouncements();
        this._snackBar.open('Announcement Deleted', 'Dismiss', {
          duration: 3000
        });
        this.single_announcement = null;
        return true;
      } else {
        return false;
      }
    });
  }


}
