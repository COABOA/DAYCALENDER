$(document).ready(function() {
  // listen for save button clicks
  $(".saveBtn").on("click", function() {
    // get nearby values
    var userVal = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // save in localStorage
    localStorage.setItem(time, userVal);
  });

  function updateByHour() {
    // get current number of hours
    var currentHrs = moment().hours();

    // loop over time blocks - splitting up that string "hour-1" by the dash -
    //and then turning that "1" into a 1 (string to a number).
    
    $(".time-block").each(function() {
      var hourSectionTimeBlk = parseInt($(this).attr("id").split("-")[1]); 
    

      // check if we've moved past this time
      if (hourSectionTimeBlk < currentHrs) {
        $(this).addClass("previous");
      } 
      else if (hourSectionTimeBlk === currentHrs) {
        $(this).removeClass("previous");
        $(this).addClass("current");
      } 
      else {
        $(this).removeClass("previous");
        $(this).removeClass("current");
        $(this).addClass("upcoming");
      }
    });
  }

  updateByHour();

  // set up interval to check if current time needs to be updated
var interval = setInterval(updateByHour, 15000);



// load any saved data from localStorage (used solved solution as inspiration. simplified the code to a loop)

var i = 1;
for (i; i < 9; i++){
  var divClassVar = "hour-" + i;  
  $("#" + divClassVar + " .description").val(localStorage.getItem(divClassVar));
}
 
  



  
  // getLocalStorage loop or function




  // display current day on page
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
});