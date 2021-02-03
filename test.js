/*
Write a function, which takes a non-negative integer (seconds) as input and
returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)
*/
function humanReadable(seconds) {
  var numHours = Math.floor(((seconds % 31536000) % 86400) / 3600);

  if (numHours < 10) {
    var numHours = '0' + numHours;
  }

  var numMinutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);

  if (numMinutes < 10) {
    var numMinutes = '0' + numMinutes;
  }

  var numSeconds = (((seconds % 31536000) % 86400) % 3600) % 60;

  if (numSeconds < 10) {
    var numSeconds = '0' + numMinutes;
  }

  console.log('
    //numyears + " years " +  numdays + " days " +
    numHours + ":" +
    numMinutes + ":" +
    numSeconds');  // 0:20:34
}

humanReadable(1234);
