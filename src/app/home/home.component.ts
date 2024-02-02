import {Component, OnInit} from '@angular/core'


@Component({
  selector: 'home-component',
  templateUrl: `./home.component.html`,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentYear: number

  constructor() {
    this.currentYear = new Date().getFullYear()
  }

  ngOnInit(): void {
    //this.store.dispatch(fromActions.changeBodyClass({class: 'text-center'}))
  }
}
