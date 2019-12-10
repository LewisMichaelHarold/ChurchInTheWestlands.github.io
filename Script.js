var theDate = new Date();
var dayofweek = theDate.getDay();
var dayofmonth = theDate.getDate();
var nexteventp = document.getElementById("ServiceParagraph");
var stndrd = "th";
var nextSunday = dayofmonth - dayofweek + 7;
if (nextSunday == 1 || nextSunday == 21 || nextSunday == 31) {
  stndrd = "st";
}
else if (nextSunday == 2 || nextSunday == 22){
  stndrd = "nd";
}
else if (nextSunday == 3 || nextSunday == 23){
  stndrd = "rd";
}
var oNS = "Our next service is on Sunday the ";
var atT = " at 10:30am. This will be our";
var sTM = "service of the month.";

if (dayofweek == 0) {
  document.getElementById("ServiceHeading").innerHTML = "Today's service";
  if (dayofmonth < 8) {
    nexteventp.innerHTML = "Today is the Holy Communion which is our first service of the month. Join us at 11:00.";
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
    nexteventp.innerHTML = oNS + nextSunday + stndrd + atT + " first " + sTM;
    }
  else if (nextSunday < 14) {
    nexteventp.innerHTML = oNS + nextSunday + stndrd + atT + " second " + sTM;
  }
  else if (nextSunday < 21) {
    nexteventp.innerHTML = oNS + nextSunday + stndrd + atT + " third " + sTM;
  }
  else if (nextSunday < 28) {
    nexteventp.innerHTML = oNS + nextSunday + stndrd + atT + " fourth " + sTM;
  }
  else {
    nexteventp.innerHTML = oNS + nextSunday + stndrd + atT + " fifth " + sTM;
  }
}
