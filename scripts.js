let i = 0;

$("#addButton").on("click", function () {
    $("ul").append('<li id=listItem"' + i + '">' + $('#textToDo').val() + '</li>');
    console.log("One item added to the To Do list. Index of list item: " + i);
    i = i + 1;
})

// $("ul").append('<li>' + 'Added by JavaScript' + '</li>');

$("h1").on("click", function () {
    console.log($('ul').find('li').text());
})

/*
$("ul").on("click", function () {
    console.log("You clicked on: " + $('li').text());
})  
*/

$('ul').find('li').on('click', function () {
    console.log('LI clicked.');
});

/* $("h1").on("click", function () {
    console.log("Click H1");
})
*/