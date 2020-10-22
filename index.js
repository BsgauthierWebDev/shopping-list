
function addItem(itemName){
    //add item from input filed to list
    
    //add a list item for the itemName
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
    //function checkItem(){
    //apply strikethrough to item
    
    //}
    
    //function deleteItem(){
    //delete item from list
    
    //}
    
    $("#js-shopping-list-form").submit(function(event){
      //when Add item is clicked get the field value and pass to addItem
      event.preventDefault();
      //console.log(event)
    
      let itemName = $(this).find("#shopping-list-entry")[0].value;
      console.log(itemName);
      addItem(itemName);
    });
    
    $("body").on('click', ".shopping-item-toggle",function(){
      //console.log($(this));
      let itemText = $(this).parents("li").find(".shopping-item").toggleClass("shopping-item__checked");
      //console.log(itemText);
      //$(itemText).toggleClass("shopping-item__checked")
      //console.log("check");
    });
