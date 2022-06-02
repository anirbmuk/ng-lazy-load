import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataService } from './../../data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  constructor(private readonly data: DataService) {}

  private readonly callback = (data: 'people' | 'places') =>
    this.data.fetchData(data);
  readonly callback1 = this.callback.bind(this.data, 'people');
  readonly callback2 = this.callback.bind(this.data, 'places');
}
