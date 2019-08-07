import { Component, OnInit } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-support-ncm',
  templateUrl: './support-ncm.component.html',
  styleUrls: ['./support-ncm.component.sass']
})
export class SupportNcmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("body").css("display", "none");
    $(document).ready(function() {
      $("body").fadeIn(1000);
    });
  }

}
