import { Component, OnInit } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-get-involved',
  templateUrl: './get-involved.component.html',
  styleUrls: ['./get-involved.component.sass']
})
export class GetInvolvedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $("body").css("display", "none");
      $("body").fadeIn(1000);
    });
  }

}
