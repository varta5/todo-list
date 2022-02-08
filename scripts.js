let i = 0;

function itemDone(itemIndex) {
    $('#listItem' + itemIndex).on('click', function () {
        $('#listItem' + itemIndex).css('text-decoration', 'line-through');
        console.log('ToDo list item number ' + itemIndex + ', (' + $('#listItem' + itemIndex).text() + ') has been marked as completed.');
    });
}

$("#addButton").on("click", function () {
    $("ul").append('<li id=listItem' + i + '>' + $('#textToDo').val() + '</li>');
    console.log("One item added to the To Do list. Index of list item: " + i);
    itemDone(i);
    i = i + 1;
})