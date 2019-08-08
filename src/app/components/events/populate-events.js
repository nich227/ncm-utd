function parseEvents() {
  //Get JSON file from repo
  $.getJSON("https://raw.githubusercontent.com/nich227/ncm-utd/master/src/assets/events.json", function (json) {
    alert(json.events[0].location);
  });

  //putEvents();
}

function putEvents() {
  //Get today's date
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;

  let numEvent = 0;
  json.forEach(function (event) {
    $("#eventTmpl").clone().attr("id", "event" + numEvent).appendTo(".section").css("display", "block");
    //Modify all elements within the new event
    $("#event"+numEvent+" .event-title").css("value", "yeet");

    numEvent++;
  });

}
