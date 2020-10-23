//Function to add an item to the shopping list
function addItem(itemName){
    //Takes the itemName and adds it to the bottom of the list
    $(".shopping-list").append(
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
        </li>`);
    }
        
    //This traverses the page, looking for entered text in the box
    //(shopping-list-form) and creates a new shopping list itemName
    //to append using the above function
    $("#js-shopping-list-form").submit(function(event) {
    //This prevents the page from submitting a form to the server
        event.preventDefault();
    //This applies the input text to the itemName variable
        let itemName = $(".shopping-list-entry").val("");
    //This calls the itemName
        console.log(itemName);
    //This adds the itemName to the list
        addItem(itemName);
    });
    
    //This traverses the page looking for the "shopping-item-toggle" button clicked
    //$("body").on("click", ".shopping-item-toggle", function(){
    //This determines which list item had the button clicked and 
    //toggles the class to "shopping-item_checked" to cross it off
    //    let itemText = $(this).parents("li").find(".shopping-item").toggleClass("shopping-item_checked");
    //});

    //This performs the same task as the first have of the above function
    //$("body").on("click", "shopping-item-delete", function(){
    //But instead of changing the class, the list item is removed from the list
    //     let itemText = $(this).parents("li").find(".shopping-item").remove("<li>");
    // });

    //Code to toggle the "shopping-item-toggle" and cross off items
    //Traverses the shopping list, when "check" button is clicked
    $('.shopping-list').on('click', '.shopping-item-toggle',function(event) {
        //The class for the item will be toggled to "shopping-item_checked"
        $(this).closest('shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item_checked')
    })

    //Code to delete an item from the shopping list
    //Traverses the shopping list, when "delete" button is clicked
    $(".shopping-list").on("click", ".shopping-item-delete",function(event) {
        //The entire associated line item is removed from the list
        $(this).closest("li").remove()
    }
    )
