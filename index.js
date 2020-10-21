    $("body").on("click", ".shopping-item-toggle",function() {
        let itemText = $(this).parents("li").find(".shopping-item").toggleClass("shopping-item_checked");
    }

