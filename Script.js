//Make an interactive calendar

var theDate = new Date();
var dayofweek = theDate.getDay();
var dayofmonth = theDate.getDate();
var nexteventp = document.getElementById("ServiceParagraph");

var nextSunday = dayofmonth - dayofweek + 7;
var stndrd = "th";
if (nextSunday == 1 || nextSunday == 21 || nextSunday == 31) {
  stndrd = "st";
}
else if (nextSunday == 2 || nextSunday == 22){
  stndrd = "nd";
}
else if (nextSunday == 3 || nextSunday == 23){
  stndrd = "rd";
}

if (dayofweek == 0) {
  document.getElementById("ServiceHeading").innerHTML = "Today's service";
  if (dayofmonth < 8) {
    nexteventp.innerHTML = "Today is the Holy Communion which is our first service of the month. Join us at 10:30.";
  } 
  else if (dayofmonth < 15) {
    nexteventp.innerHTML = "Today is our second service of the month. Join us at 10:30am.";
  } 
  else if (dayofmonth < 22) {
    nexteventp.innerHTML = "Today is the Holy Communion which is our third service of the month. Join us at 10:30am.";
  } 
  else if (dayofmonth < 29) {
    nexteventp.innerHTML = "Today is our fourth service of the month. Join us at 10:30am.";
  } 
  else {
    nexteventp.innerHTML = "Today is our fifth service of the month. Join us at 10:30am.";
  }
}
else if (dayofweek !== 0) {
  document.getElementById("ServiceHeading").innerHTML = "Next Sunday's service";
  if (nextSunday < 7) {
    var fstf = " first ";
    }
  else if (nextSunday < 14) {
    var fstf =  " second ";
  }
  else if (nextSunday < 21) {
    var fstf =  " third ";
  }
  else if (nextSunday < 28) {
    var fstf =  " fourth ";
  }
  else {
    var fstf =  " fifth ";
  }
  var oNS = "Our next service is on Sunday the ";
  var atT = " at 10:30am. This will be our";
  var sTM = "service of the month.";
  var nSS = oNS + nextSunday + stndrd + atT + fstf + sTM;
  nexteventp.innerHTML = nSS;
}
