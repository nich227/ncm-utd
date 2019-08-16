import { Component, OnInit } from "@angular/core";
import $ from "jquery";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.sass"]
})
export class AboutUsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(document).ready(function() {
      $("body").css("display", "none");
      $("body").fadeIn(1000);
    });

    $(".overflow").click(function() {
      $("html,body").animate(
        {
          scrollTop: $("#officers").offset().top
        },
        "slow"
      );
    });
  }
}
