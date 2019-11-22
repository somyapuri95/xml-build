import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { MatBottomSheet } from '@angular/material';
import { ChangePassComponent } from '../modals/change-pass/change-pass.component';


@Component({
  selector: 'vtf-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  user: User;

  constructor(private router: Router, private bottomSheet: MatBottomSheet) {
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }

  openBottomSheet(): void {
    this.bottomSheet.open(ChangePassComponent, { disableClose: true});
  }


  ngOnInit() {
  }

  logOut() {
    window.localStorage.clear();
    this.router.navigate(['/signin']);
  }
}
