var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yy = String(today.getFullYear());
dd = parseInt(dd);

//Going to next Sunday, unless today is Sunday
if (today.getDay() != 0) {
  dd = dd + 7 - today.getDay();
}

//Checking if date overflows
//February
if (parseInt(mm) === 2 && parseInt(dd) > 28) {
  //Leap year
  if (parseInt(yy) % 4 === 0 || (parseInt(yy) % 100 === 0 && parseInt(yy) % 400 === 0)
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
else if (parseInt(mm) < 8) {
  //Long month
  if (parseInt(mm) % 2 === 1 && parseInt(dd) > 31) {
    dd = "0" + String(dd -= 31);
    mm = "0" + String(parseInt(mm) + 1);
  }

  //Short month
  if (parseInt(mm) % 2 === 0 && parseInt(dd) > 30) {
    dd = "0" + String(dd -= 30);
    mm = "0" + String(parseInt(mm) + 1);
  }
}

//On or after August
else if (parseInt(mm) >= 8 && parseInt(mm) <= 12) {
  //Long month
  if (parseInt(mm) % 2 === 0 && parseInt(dd) > 31) {
    dd = "0" + String(dd -= 31);
    if(parseInt(mm) < 10) { mm = "0" + String(parseInt(mm) + 1); }
    else { mm++; }
  }

  //Short month
  if (parseInt(mm) % 2 === 1 && parseInt(dd) > 30) {
    dd = "0" + String(dd -= 30);
    if(parseInt(mm) < 10) { mm = "0" + String(parseInt(mm) + 1); }
    else { mm++; }
  }
}

//Beyond the year
else if(parseInt(mm) > 12) {
   mm = "01";
   dd = "0" + String(dd -= 31);
   yy = String(parseInt(yy) + 1);
}
               
yy_short = yy.substring(2, yy.length);

function bodyLoad() {
  $("#title").html("Sunday Reading:<br>" + mm + "-" + dd + "-" + yy_short);
}

function clickOpen() {
  $("#open").attr(
    "href",
    "http://www.usccb.org/bible/readings/" + mm + dd + yy_short + ".cfm#cs_control_228453"
  );
}
