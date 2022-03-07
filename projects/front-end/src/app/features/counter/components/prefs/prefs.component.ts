import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCountingBy } from '../../state';
import * as events from '../../state/actions/counter.events';
@Component({
  selector: 'app-prefs',
  templateUrl: './prefs.component.html',
  styleUrls: ['./prefs.component.css']
})
export class PrefsComponent implements OnInit {

  countingBy$!:Observable<number>;

  constructor(private store:Store) { }


  ngOnInit(): void {
    this.countingBy$ = this.store.select(selectCountingBy);
  }


  setCountBy(payload:number) {
    this.store.dispatch(events.countBySet({payload}))
  }
}
