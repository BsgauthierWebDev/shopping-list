//All actions can be housed in the same base function.
//Function to remove deleted items from the list
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
      </li>`)

    $("body").on('click', ".shopping-item-toggle",function(){
    //console.log($(this));
        let itemText = $(this).parents("li").find(".shopping-item").toggleClass("shopping-item__checked");
    //console.log(itemText);
    //$(itemText).toggleClass("shopping-item__checked")
    //console.log("check");
    });

    $("body").on("click", ".shopping-item-delete", function() {
        let itemText = $(this).parents("li").remove("li");
    })
}
);





