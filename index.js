//All actions can be housed in the same base function.
$(function() {
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

    //This is the function to cross items off the list
    //Traverses the page for the correct click item
    $("body").on('click', ".shopping-item-toggle",function(){
        //Finds the particular <li> associated with the "click" button
        //and toggles the class to "shopping-item_checked"
        let itemText = $(this).parents("li").find(".shopping-item").toggleClass("shopping-item__checked");
        });
    
    //This is the function to remove an item from the list
    $("body").on("click", ".shopping-item-delete", function() {
        //Finds the particular <li> associated with the "click" button
        //and removes the item from the array
        let itemText = $(this).parents("li").remove("li");
        });
    }
);



    






