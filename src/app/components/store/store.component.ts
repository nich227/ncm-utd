import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.sass"]
})
export class StoreComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $("body").css("display", "none");
    $(document).ready(function() {
      $("body").fadeIn(1000);
    });

    $(".overflow").click(function() {
      $("html,body").animate(
        {
          scrollTop: $("#support").offset().top
        },
        "slow"
      );
    });
  }
}
