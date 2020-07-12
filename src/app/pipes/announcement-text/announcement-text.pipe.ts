import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'announcementText'
})
export class AnnouncementTextPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.slice(0,120) + (value.length > 120 ? "..." : "");
  }

}
