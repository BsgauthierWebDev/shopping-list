//All actions can be housed in the same base function.
//Function to remove deleted items from the list
 $(function() {
//     //This SHOULD delete the <li> associated with the delete button
//     event.preventDefault();
//     $("button.shopping-item-delete").click(function() {
//         //Using the "closest" modifyer should select the object in the same area as the button
//         $(this).closest('li').remove();
//     })
//})
//Function to cross items off - Create function to change the class of the item
//$(function() {
    event.preventDefault();
    $("button.shopping-item-toggle").click(function() {
        //This adds the class "shoppingItem_checked", which should add a strikethrough to the associated text.
        $(this).closest('li').toggleClass('shoppingItem shoppingItem_checked');
    });

//Tell jQuery to add a new element for the added item
    // $('#js-shopping-list-form button').click(function() {
    //      event.preventDefault();
    //     $('#shopping-list-entry').val()
    // //      Takes the value of the text entered into the box and adds it as a new line item in the unorganized list
    //         {$('ul').append($('<div>').html(''))
    //         }
        //}
    }
);



