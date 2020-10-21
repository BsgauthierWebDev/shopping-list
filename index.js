$("body").on('click', ".shopping-item-toggle",function(){
  //console.log($(this));
  let itemText = $(this).parents("li").find("shopping-item)
  console.log(itemText);
  $(itemText).toggleClass("shopping-item__checked")
  //console.log("check");
});
