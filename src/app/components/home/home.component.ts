import { Component, OnInit } from "@angular/core";
import $ from "jquery";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(document).ready(function() {
      $("body").css("display", "none");
      $("body").fadeIn(1000);
    });
  }
}
