import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit,OnDestroy{
  name: any;

  private localStorageSubscription: Subscription;

  ngOnInit() {
    this.name = localStorage.getItem('userName') || null;
  }
  constructor(private authService: AuthService) {
    this.localStorageSubscription = this.authService.getStorageChanges()
      .subscribe(newValue => {
      this.name = newValue;
      });
  }

  ngOnDestroy() {
    this.localStorageSubscription.unsubscribe();
  }

}
