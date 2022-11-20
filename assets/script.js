//Declaring elements/classes
const rows = $(".row");
const hours = $(".hour");
const past = $(".past");
const present = $(".present");
const future = $(".future");
const timeBlock = $(".time-block");
const saveButton = $(".saveBtn");
const hourTask = $("id");
const userText = $(".hour-task");


//Set current time in header when application opens

$(document).ready(function () {
    var today = moment();
    $("#currentDay").text(today.format("dddd MMM. Do YYYY, h:mm a"));

    var hours = today.hours();
//    console.log(hours);
});

//Reset button will clear the form and make it blank




//Set variables for time and color changes

var parent = $(this).parents(".row");
var timeId = parseInt(parent.attr("id")); //fixed bug here
var currentHour = parseInt(moment().format("H"));

//Set variable for current hour
let index = 0;
console.log(timeBlock);

//Past/present/future functions

timeBlock.each(function () {

    var parent = $(this).parents(".row");
    var timeId = parseInt(parent.attr("id"));
    var currentHour = parseInt(moment().format("H"));
    console.log(timeId);

    if(timeId < currentHour) {
        $(this).addClass("past");
    } else if(timeId === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
    } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");

        $(this).val(localStorage.getItem(parent.attr("id")));
    }
    $(this).val(localStorage.getItem(parent.attr("id"))); //???????
    
})

//Set on.click function to tell it when and where to store the information
$(".saveBtn").on("click", function() {
    
    var userText = $(this).siblings(".time-block").val();

    var hourTask = $(this).parents(".row").attr("id");

    localStorage.setItem(hourTask, userText);

    console.log("+++ Get Item from Local Storage: ", localStorage.getItem(hourTask))
})
