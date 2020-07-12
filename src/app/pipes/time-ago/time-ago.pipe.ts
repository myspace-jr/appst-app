import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const now = new Date();
    const post = new Date(value);
    const dif = now.getTime() - post.getTime();
    const minutes = { value: Math.floor(dif / (1000 * 60)), format: "minute" };
    const hours = { value: Math.floor(minutes.value / 60), format: "hour" };
    const days = { value: Math.floor(hours.value / 24), format: "day" };
    const left = days.value > 0 ? days : hours.value > 0 ? hours : minutes
    const string = left.value === 0 ? "just now" : (left.value + ' ' + left.format + (left.value > 1 ? "s" : "") + " ago");

    return string;
  }

}
