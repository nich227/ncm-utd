import { Component, OnInit } from '@angular/core';

declare function clickOpen(): any;

@Component({
  selector: 'app-sunday-reading',
  templateUrl: './sunday-reading.component.html',
  styleUrls: ['./sunday-reading.component.sass']
})
export class SundayReadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("body").css("display", "none");
    $(document).ready(function() {
      $("body").fadeIn(1000);
    });
  }

}
