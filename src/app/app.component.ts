import { Component } from '@angular/core';
@Component({
  selector: 'nmdx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xml';
  constructor() { }
  ngOnInit() {
    setTimeout(() => {
      window.clearInterval(window['randomLoader'])
    }, 10000)
  }

}
