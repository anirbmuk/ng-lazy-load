import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, delay, filter, map, of } from 'rxjs';
import { people, places } from './data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private peActionS = new BehaviorSubject<string | undefined>('');
  private plActionS = new BehaviorSubject<string | undefined>('');

  private peAction$ = this.peActionS.asObservable();
  private plAction$ = this.plActionS.asObservable();

  readonly people$ = combineLatest([this.peAction$, of(people)]).pipe(
    filter(([action, _]) => !!action),
    map(([_, data]) => data),
    delay(1500)
  );

  readonly places$ = combineLatest([this.plAction$, of(places)]).pipe(
    filter(([action, _]) => !!action),
    map(([_, data]) => data),
    delay(1500)
  );

  fetchData(set: 'people' | 'places') {
    set === 'people' ? this.peActionS.next(set) : this.plActionS.next(set);
  }
}
