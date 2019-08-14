var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yy = String(today.getFullYear());
yy = yy.substring(2, yy.length);
dd = parseInt(dd);
if (today.getDay() != 0)
  dd = dd + 7 - today.getDay();

function bodyLoad() {
  $("#title").html("Sunday Reading:<br>" + mm + "-" + dd + "-" + yy);
}

function clickOpen() {
  $("#open").attr("href", "http://www.usccb.org/bible/readings/" + mm + dd + yy + ".cfm");
}
