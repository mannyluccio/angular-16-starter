import {Component, OnInit} from '@angular/core'
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'login-component',
  templateUrl: `./login.component.html`,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    //this.store.dispatch(fromActions.changeBodyClass({class: 'text-center'}))
  }
  login(){
    this.authService.login('', '').subscribe(
      {
        next: ()=>{
          console.log('buono')
          this.router.navigate(['home'])
        },
        error: ()=>{
          console.log('cattivo')
        },
      }
    );
  }


}
