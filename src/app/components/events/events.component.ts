import { Component, OnInit } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.sass']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $("body").css("display", "none");
      $("body").fadeIn(1000);
    });
  }

}
