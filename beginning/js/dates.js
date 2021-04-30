//STEP 1
// var daysMonth = function(month, year) {
//     return new Date(year, month, 0).getDate();
// };
// window.console.log(daysMonth(4, 2021));

//STEP 2
// var month;
// switch (new Date().getMonth()) {
//     case 0:
//         month = "January";
//       break;
//     case 1:
//         month = "February";
//       break;
//     case 2:
//         month = "March";
//       break;
//     case 3:
//         month = "April";
//       break;
//     case 4:
//         month = "May";
//       break;
//     case 5:
//         month = "June";
//       break;
//     case 6:
//         month = "July";
//         break;
//     case 7:
//         month = "August";
//         break;
//     case 8:
//         month = "September";
//         break;
//         case 9:
//         month = "October";
//         break;
//         case 10:
//         month = "November";
//         break;
//         case 11:
//         month = "December";
//         break;
//   }
//   window.console.log(month);

//STEP 3
// var today = new Date ();
// if (today.getDay() === 6 || today.getDay() === 0) {
//     console.log("Weekend!");
// } else {
//     console.log("Weekday");
// }

//STEP 4
// var day;
// switch (new Date().getDay() - 1) {
//         case 0:
//           day = "Sunday";
//           break;
//         case 1:
//           day = "Monday";
//           break;
//         case 2:
//            day = "Tuesday";
//           break;
//         case 3:
//           day = "Wednesday";
//           break;
//         case 4:
//           day = "Thursday";
//           break;
//         case 5:
//           day = "Friday";
//           break;
//         case 6:
//           day = "Saturday";
//       }   
// window.console.log(day);

//STEP 5
// var day;
// switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//   }
//   var sday = day.match(/\w{1}/g);
//   window.console.log(sday[0]);
