function parseEvents() {
  $.getJSON("events.json", function(json) {
    alert(json);
  });

  putEvents();
}

function putEvents() {
  let numEvent = 0;
  numEvent++;
  $("#eventTmpl").clone().attr("id", "event" + numEvent).appendTo(".section").css("display", "block");
}
