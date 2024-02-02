import {Component, OnInit} from '@angular/core'


@Component({
  selector: 'auth-component',
  templateUrl: `./auth.component.html`,
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  currentYear: number

  constructor() {
    this.currentYear = new Date().getFullYear()
  }

  ngOnInit(): void {
    //this.store.dispatch(fromActions.changeBodyClass({class: 'text-center'}))
  }
}
