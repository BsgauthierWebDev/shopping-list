//This is the function to add an item to the list.
//It takes the entered itemName and applies all of the <li> code
//Creating a new list item at the bottom.
function addItem(itemName){
    $("shopping-list").append(
        `<li>
        <span class="shopping-item">${itemName}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
    );
}

//This traverses the page, looking for entered text in the box
//(shopping-list-form) and creates a new shopping list itemName
//to append using the above function
$("#js-shopping-list-form").submit(function(event) {
    //This prevents the page from submitting a form to the server
    event.preventDefault();
    //This applies the input text to the itemName variable
    let itemName = $(this).find(".shopping-list-entry")[0].value;
    //This calls the itemName
    console.log(itemName);
    //This adds the itemName to the list
    addItem(itemName);
});

//This traverses the page looking for the "shopping-item-toggle" button clicked
$("body").on("click", ".shopping-item-toggle", function(){
    //This determines which list item had the button clicked and 
    //toggles the class to "shopping-item_checked" to cross it off
    let itemText = $(this).parents("li").find(".shopping-item").toggleClass("shopping-item_checked");
});

//This performs the same task as the first have of the above function
$("body").on("click", "shopping-item-delete", function(){
    //But instead of changing the class, the list item is removed from the list
    let itemText = $(this).parents("li").find(".shopping-item").remove("<li>");
});
