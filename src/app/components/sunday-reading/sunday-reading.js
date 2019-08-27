var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yy = String(today.getFullYear());
yy_short = yy.substring(2, yy.length);
dd = parseInt(dd);

//Going to next Sunday, unless today is Sunday
if (today.getDay() != 0) {
  dd = dd + 7 - today.getDay();
}

//Checking if date overflows
//February
if (mm === 2 && dd > 28) {
  //Leap year
  if (
    parseInt(yy) % 4 === 0 ||
    (parseInt(yy) % 100 === 0 && parseInt(yy) % 400 === 0)
  ) {
    if (dd > 29) {
      dd -= 29;
      mm = "03";
    }
  }

  //Not leap year
  else {
    dd -= 28;
    mm = "03";
  }
}

//Not February, before August
else if (mm < 8) {
  //Long month
  if (mm % 2 === 1 && dd > 31) {
    String("0" + (dd -= 31));
    String("0" + mm++);
  }

  //Short month
  if (mm % 2 === 0 && dd > 30) {
    String("0" + (dd -= 30));
    mm++;
    String("0" + mm++);
  }
}

//On or after August
else if (mm >= 8) {
  //Long month
  if (mm % 2 === 0 && dd > 31) {
    String("0" + (dd -= 31));
    if(mm < 10) { String("0" + mm++); }
    else { mm++; }
  }

  //Short month
  if (mm % 2 === 1 && dd > 30) {
    String("0" + (dd -= 30));
    if(mm < 10) { String("0" + mm++); }
    else { mm++; }
  }
}

function bodyLoad() {
  $("#title").html("Sunday Reading:<br>" + mm + "-" + dd + "-" + yy_short);
}

function clickOpen() {
  $("#open").attr(
    "href",
    "http://www.usccb.org/bible/readings/" + mm + dd + yy_short + ".cfm"
  );
}
