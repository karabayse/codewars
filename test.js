/*
Write a function, which takes a non-negative integer (seconds) as input and
returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)
*/
function humanReadable(seconds) {
  //let numyears = Math.floor(seconds / 31536000);
  //let numdays = Math.floor((seconds % 31536000) / 86400);
  let numHours = Math.floor(((seconds % 31536000) % 86400) / 3600);
  console.log(numHours);  // 0
  let numMinutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
  console.log(numMinutes);  // 20
  let numSeconds = (((seconds % 31536000) % 86400) % 3600) % 60;
  console.log(numSeconds);  // 34
  console.log(
    //numyears + " years " +  numdays + " days " +
    numHours + ":" +
    numMinutes + ":" +
    numSeconds);  // 0:20:34
}

humanReadable(1234);
