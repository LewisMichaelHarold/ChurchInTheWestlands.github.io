window.onload = function() {
  document.body.style.animation = "fadeIn 2.5s forwards 0.5s";
  document.body.style.WebkitAnimation = "fadeIn 2.5s forwards 0.5s";
}

var theDate = new Date();
var dayofweek = theDate.getDay();
var dayofmonth = theDate.getDate();
var nexteventp = ServiceParagraph;

if (dayofweek == 0) {
  ServiceHeading.innerHTML = "Today's service";
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
  ServiceHeading.innerHTML = "Next Sunday's service";
  var nextSunday = dayofmonth - dayofweek + 7;
  if (nextSunday < 7) {var fstf = " first ";}
  else if (nextSunday < 14) {var fstf =  " second ";}
  else if (nextSunday < 21) {var fstf =  " third ";}
  else if (nextSunday < 28) {var fstf =  " fourth ";}
  else {var fstf =  " fifth ";}
  var oNS = "Our next service is on Sunday the ";
  var atT = " at 10:30am. This will be our";
  var sTM = "service of the month.";
  var suffix = "th";
  if (nextSunday == 1 || nextSunday == 21 || nextSunday == 31) {suffix = "st";}
  else if (nextSunday == 2 || nextSunday == 22){suffix = "nd";}
  else if (nextSunday == 3 || nextSunday == 23){suffix = "rd";}
  var nSS = oNS + nextSunday + suffix + atT + fstf + sTM;
  nexteventp.innerHTML = nSS;
}
