import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataService } from './../../data';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleComponent {
  constructor(private readonly data: DataService) {}

  readonly people$ = this.data.people$;
}
