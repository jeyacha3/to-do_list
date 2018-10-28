// Check off Specific Todos By Clicking
$("ul").on("click", "li", function() {
    // Toggle class completed css properties when clicked
    $(this).toggleClass("completed");
});

// Click on X to delete list item
$("ul").on("click", "span", function(event){
    // remove entire li that span is nested in after list item fades out
    $(this).parent().fadeOut(500, function(){
        $(this).remove()
    });
    // prevents parent elements' click events from being triggered
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    // if enter key is pressed
    if(event.which === 13) {
        // store text from input into variable
        var listItem = $(this).val();
        $(this).val("");
        // add new list item to to-do list
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + listItem + "</li>");
    }
});

// toogle input for adding new list items when plus icon is clicked
$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
});