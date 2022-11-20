//Displaying current date

var todayDate = moment().format('dddd, MMM Do YYYY');
$('#currentDay').html(todayDate);


$(document).ready(function () {

//saveBtn click listener

$(".saveBtn").on("click", function () {

    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

//saving text in local storage

localStorage.setItem(time, text);
})

function timeTracker() {
    //current number of hours
    var timeNow = moment().hour();

    //loop over time blocks

    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

    //Check the time and add the classes for background indicators

        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}


//get item from local storage if 

$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

timeTracker();

})
