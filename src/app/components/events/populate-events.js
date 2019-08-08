function populateEvents() {
  //Get JSON file from repo
  $.getJSON("https://raw.githubusercontent.com/nich227/ncm-utd/master/src/assets/events.json", function (json) {
    //Get today's date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    var numEvent = 1;
    $.each(json.events, function(numEvent, event) {
      $("#eventTmpl").clone().attr("id", "event" + numEvent).appendTo(".section").css("display", "block");
      //Modify all elements within the new event
      $("#event" + numEvent + " .event-pic").attr("src", event.pic_location);
      $("#event" + numEvent + " .event-title").html(event.name);
      $("#event" + numEvent + " .event-desc").html(event.description);
      $("#event" + numEvent + " .event-date").html(event.date_string);

      numEvent++;
    });
  });

}
