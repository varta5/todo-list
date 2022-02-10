let i = 0;

let whichDone = [];

/* THIS IS THE VERSION WHEN LI-S WERE ADDED TO THE UL

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

*/

function itemDone(itemIndex) {
    $('#itemDone' + itemIndex).on('click', function () {
        if (whichDone[itemIndex] === false) {
            $('#listItemText' + itemIndex).css('text-decoration', 'line-through');
            $('#listItemText' + itemIndex).css('color', '#7F7F7F');
            $('#itemDone' + itemIndex).attr('src', './checkmark-circle-sharp-svgrepo-com.svg');
            console.log('ToDo list item number ' + itemIndex + ', (' + $('#listItem' + itemIndex).text() + ') has been marked as completed.');
            whichDone[itemIndex] = true;
        } else if (whichDone[itemIndex] === true) {
            $('#listItemText' + itemIndex).css('text-decoration', 'none');
            $('#listItemText' + itemIndex).css('color', 'black');
            $('#itemDone' + itemIndex).attr('src', './checkmark-circle-outline-svgrepo-com.svg');
            console.log('ToDo list item number ' + itemIndex + ', (' + $('#listItem' + itemIndex).text() + ') has been marked as undone.');
            whichDone[itemIndex] = false;
        } else {
            alert('There is something wrong with the code. Please contact the developer.');
        }
    });
}

$("#addButton").on("click", function () {
    $(".theList").append('<tr class="listElement" id="listItem' + i + '"><td class="listItemText" id="listItemText' + i + '">' + $('#textToDo').val() + '</td><td class="listItemDone"><img src="./checkmark-circle-outline-svgrepo-com.svg" alt="Mark To Do item as done" width="30px" id="itemDone' + i + '"></td><td class="listItemDelete"><img src="./trash-can-with-cover-svgrepo-com.svg" alt="Remove To Do item from the list" width="30px" id="itemDelete' + i + '"></td></tr>');
    whichDone.push(false);
    itemDone(i);
    console.log("One item added to the To Do list. Index of list item: " + i);
    i = i + 1;
})