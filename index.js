//Add item to shopping list
function addItem(itemName) {
    //This adds the item input to the list
    $(".shopping-list").append(
        //The following was copied from the HTML 
        //to make sure all aspects of the code 
        //were properly imported for the new item
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
    $("body").on("click", ".shopping-item-toggle", function() {
        let itemText = $(this).parents("li").find
        ("shopping-item").toggleClass("shopping-item_checked");
    })
}

//Remove item from list
function deleteItem(itemName) {
    $(".shopping-list").remove(
        //The following was copied from the HTML 
        //to make sure all aspects of the code 
        //were properly imported for the new item
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
}
