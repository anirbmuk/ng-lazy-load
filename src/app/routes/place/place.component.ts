import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataService } from './../../data';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaceComponent {
  constructor(private readonly data: DataService) {}

  readonly places$ = this.data.places$;
}
