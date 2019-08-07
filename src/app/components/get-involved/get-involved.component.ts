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
    $("body").css("display", "none");
    $(document).ready(function() {
      $("body").fadeIn(1000);
    });
  }

}
