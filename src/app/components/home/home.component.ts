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
    $("body").css("display", "none");
    $(document).ready(function() {
      $("body").fadeIn(1000);
    });

    $(".overflow").click(function() {
      $("html,body").animate(
        {
          scrollTop: $("#links").offset().top
        },
        "slow"
      );
    });
  }
}
