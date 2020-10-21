//Function to add an item to the list
//$(function() {
//    $('js.form').submit(event => {
//        event.preventDefault();
//        const userTextElement = $(event.currentTarget).find('#shopping-list-entry);
//        $("js-display-shopping-list-text").text(`user text is: ${userTextElement.val()}`);
//        userTextElement.val("");
//    })
//}
//)


//Function to remove deleted items from the list
$(function() {
    //This SHOULD delete the <li> associated with the delete button
    $("button.shopping-item-delete").click(function() {
        $(this).closest('li').remove();
    })
//})
//Function to cross items off - Create function to change the class of the item
//$(function() {
    $("button.shopping-item-toggle").click(function() {
        $(this).closest('li').addClass('shoppingItem_checked');
    })
}
)
//Tell jQuery to add a new element for the added item
    $('#js-shopping-list-form button') {
        $('#shopping-list-entry').val()
        {$('ul').append($('<div>').html(''))
    }
    }



