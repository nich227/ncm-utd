import { Component, OnInit } from '@angular/core';
import $ from "jquery";
import { timeout } from 'q';

declare function parseEvents(): any;

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
    parseEvents();
  }
}