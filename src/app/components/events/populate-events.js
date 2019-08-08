function populateEvents() {
  //Get JSON file from repo
  $.getJSON("https://raw.githubusercontent.com/nich227/ncm-utd/master/src/assets/events.json", function (json) {

    //Get today's date
    let today = new Date();

    //Iterate through JSON file for events
    var numEvent = 1;
    $.each(json.events, function (numEvent, event) {
      let end_date = new Date(event.end_date * 1000);

      //Check if the event has already passed
      if (today < end_date) {
        $("#eventTmpl").clone().attr("id", "event" + numEvent).appendTo(".section").css("display", "block");
        //Modify all elements within the new event
        $("#event" + numEvent + " .event-pic").attr("src", event.pic_location);
        if(typeof event.pic_scale !== 'undefined'){
            $("#event" + numEvent + " .event-pic").attr("width", event.pic_scale);
            $("#event" + numEvent + " .event-pic").attr("height", event.pic_scale);
        }
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
