//Add item to shopping list
function addItem(itemName) {
    //This adds the item input to the list
    $(".shopping-list").append(
        //The following was copied from the HTML 
        //to make sure all aspects of the code 
        //were properly imported for the new item
        //Line 10 makes sure to add the entered text 
        //as the item name for the new <li>
        `<li>
        <span class="shopping-item">${item-name}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
    )
}

//Cross item off list
function checkItem(itemName) {
    //Throughout the body of the page, when the "check" button is clicked
    $("body").on("click", ".shopping-item-toggle", function() {
        //the text for this line item is found on the page
        let itemText = $(this).parents("li").find
        //and the class of the item is changed to show as strikethrough
        ("shopping-item").toggleClass("shopping-item_checked");
    })
}

//Remove item from list
function deleteItem(itemName) {
    $("body").on("click", ".shopping-item-delete", function() {
        let itemText = $(this).parents("li").remove
        ("li");
    })
}
