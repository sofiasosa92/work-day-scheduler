//Declaring elements/classes to be used to create time blocks
const box = $(".box");
const hours = $(".hour");
const past = $(".past");
const present = $(".present");
const future = $(".future");
const timeBlock = $(".time-block");
const saveButton = $(".saveButton");
const hourTask = $("id");
const text= $(".toDo");


// to display current time in teh header

$(document).ready(function () {
    var today = moment();
    $("#currentDay").text(today.format("dddd MMM. Do YYYY, h:mm a"));

    var hours = today.hours();
//    console.log(hours);
});

// variables for time color changes

var parent = $(this).parents(".box");
var timeId = parseInt(parent.attr("id")); //fixed bug here
var currentHour = parseInt(moment().format("Hr"));

//Set variable for current hour display
let index = 0;
console.log(timeBlock);

//fucntions to display Past/present/future

timeBlock.each(function () {

    var parent = $(this).parents(".row");
    var timeId = parseInt(parent.attr("id"));
    var currentHour = parseInt(moment().format("Hr"));
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

})

//on.click function to save task
    $(".saveButton").on("click", function() {
    var text = $(this).siblings(".time-block").val();
    var hourTask = $(this).parents(".row").attr("id");
    localStorage.setItem(hourTask, text);

    console.log("Get Item from Local Storage: ", localStorage.getItem(hourTask))
})
