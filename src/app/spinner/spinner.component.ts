import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nmdx-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  @Input() isLoading: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
