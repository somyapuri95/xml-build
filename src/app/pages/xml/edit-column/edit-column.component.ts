import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'nmdx-edit-column',
  templateUrl: './edit-column.component.html',
  styleUrls: ['./edit-column.component.css']
})
export class EditColumnComponent implements OnInit {
  values = [
    { id: 3432, name: "Recent" },
    { id: 3442, name: "Most Popular" },
    { id: 3352, name: "Rating" }
  ];
  
  onChange(cityEvent){
      console.log(cityEvent); // It will display the select city data
  }
  
  ngOnInit() {
  }
}
