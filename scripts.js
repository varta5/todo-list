// $("body").append("<h1>This is a H1 inserted by JavaScript.</h1>");

$("#addButton").on("click", function () {
    $("ul").append("<li>" + $("#textToDo").val() + "</li>");
    console.log("One item added to the To Do list.");
})

$("ul").append("<li>" + "Added by JavaScript" + "</li>");

$("ul").on("click", function () {
    console.log("An item can be marked as done by clicking on it");
})

/* $("h1").on("click", function () {
    console.log("Click H1");
})
*/