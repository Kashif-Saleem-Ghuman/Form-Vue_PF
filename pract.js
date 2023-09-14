const data = new Date().getDay();

// const dateMap = {
//   0: "Sunday",
//   1: "Monday",
//   2: "Tuesday",
//   3: "Wednsday",
//   4: "Thursday",
//   5: "Friday",
//   6: "Saturday",
// };

// const day = dateMap[data];
// console.log(day);

let day;

switch (data) {
  case 0:
    day = "sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednsday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Invalid day";
    break;
}

console.log(day);
