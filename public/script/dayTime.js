
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

const d = new Date();
let year = d.getFullYear();
let month = months[d.getMonth()];
let date = d.getDate();
let day = days[d.getDay()];
$(".date").text(day+", "+date+" "+month+", "+year);
// console.log("changed");