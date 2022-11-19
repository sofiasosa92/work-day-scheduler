//Displaying current date

var todayDate = moment().format('dddd, MMM do YYYY');
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

    $(".time-block").each(function () {})
}
