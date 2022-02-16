let i = 0;

let whichDone = [];

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

    $('#itemDelete' + itemIndex).on('click', function () {
        $('#listItem' + itemIndex).hide();
    });
}

$("#addButton").on("click", function () {
    $(".theList").append('<tr class="listElement" id="listItem' + i + '">' +
    '<td class="listItemText" id="listItemText' + i + '">' + $('#textToDo').val() + '</td>' +
    '<td class="listItemDone"><img src="./checkmark-circle-outline-svgrepo-com.svg" alt="Mark To Do item as done" width="30px" id="itemDone' + i + '"></td>' +
    '<td class="listItemDelete"><img src="./trash-can-with-cover-svgrepo-com.svg" alt="Remove To Do item from the list" width="30px" id="itemDelete' + i + '"></td>' +
    '</tr>');
    whichDone.push(false);
    itemDone(i);
    console.log("One item added to the To Do list. Index of list item: " + i);
    i = i + 1;
})