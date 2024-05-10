
// function convertGMTToLocal(timestamp) {
//     const date = new Date(timestamp);
//     return date.toLocaleString();
// }

// const gmtTimestampInMilliseconds = 1715324700000; 
// const localTime = convertGMTToLocal(gmtTimestampInMilliseconds);
// console.log("Local time:", localTime); 



let userInput = "2024-05-10 15:30"; 

let localDate = new Date(userInput);

let utcTimestamp = localDate.getTime();

console.log("UTC Timestamp in milliseconds:", utcTimestamp);

let utcDate = new Date(utcTimestamp);
console.log("UTC Date:", utcDate.toISOString()); 
