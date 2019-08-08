function populateEvents() {
  //Get JSON file from repo
  $.getJSON("https://raw.githubusercontent.com/nich227/ncm-utd/master/src/assets/events.json", function (json) {
    //Get today's date
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    var numEvent = 1;
    $.each(json.events, function (numEvent, event) {
      let end_date = new Date(events.end_date);
      if (end_date > today) {
        $("#eventTmpl").clone().attr("id", "event" + numEvent).appendTo(".section").css("display", "block");
        //Modify all elements within the new event
        $("#event" + numEvent + " .event-pic").attr("src", event.pic_location);
        $("#event" + numEvent + " .event-title").text(event.name);
        $("#event" + numEvent + " .event-desc").text(event.description);
        $("#event" + numEvent + " .event-date").html("<i class='fas fa-calendar-alt'></i> " + event.date_string);
        $("#event" + numEvent + " .event-loc").html("<i class='fas fa-map-marker-alt'></i> " + event.location);
        $("#event" + numEvent + " .event-loc").attr("href", event.maps_link);
        numEvent++;
      }
    });
  });

}
