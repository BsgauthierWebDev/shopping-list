$(function() {

    //This traverses the page, looking for entered text in the box
    //(shopping-list-form) and creates a new shopping list itemName
    //to append to the list
    $("#js-shopping-list-form").submit(function(event){
        //This prevents the page from submitting a form to the server
            event.preventDefault();
        //This applies the input text to the itemName variable
            let itemName = $(".shopping-list-entry").val();
        //This calls the itemName
            console.log(itemName);
        //This adds the itemName to the list
            addItem(itemName);
        });

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
        
    
    
    
    //Code to toggle the "shopping-item-toggle" and cross off items
    //Traverses the shopping list, when "check" button is clicked
    $(".shopping-list").on("click", ".shopping-item-toggle",function(event) {
        //The class for the closest "shopping-item" will be toggled to "shopping-item_checked"
        $(this).closest(".shopping-item").toggleClass("shopping-item_checked")
    })

    //Code to delete an item from the shopping list
    //Traverses the shopping list, when "delete" button is clicked
    $(".shopping-list").on("click", ".shopping-item-delete",function(event) {
        //The entire associated line item is removed from the list
        $(this).closest("li").remove()
    }
    )