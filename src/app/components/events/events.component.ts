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
    $("body").css("display", "none");
    $(document).ready(function() {
      $("body").fadeIn(1000);
    });
    this.loadEvents();
  }

  loadEvents() {
    let numEvents = 0;
    numEvents++;
    $("#eventTmpl").clone().attr("id", "event"+numEvents).appendTo(".section").css("display","block");
  }
}
